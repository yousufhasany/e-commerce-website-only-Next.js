/**
 * Firebase Usage Examples
 * 
 * Import Firebase services in your components:
 * import { auth, db, storage } from '@/lib/firebase'
 */

// ============================================
// FIRESTORE DATABASE EXAMPLES
// ============================================

import { db } from '@/lib/firebase'
import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  setDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore'

// Add a product
export async function addProduct(productData: any) {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
      createdAt: new Date().toISOString()
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error adding product:', error)
    return { success: false, error }
  }
}

// Get all products
export async function getAllProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return { success: true, products }
  } catch (error) {
    console.error('Error getting products:', error)
    return { success: false, error }
  }
}

// Get single product by ID
export async function getProduct(productId: string) {
  try {
    const docRef = doc(db, 'products', productId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, product: { id: docSnap.id, ...docSnap.data() } }
    } else {
      return { success: false, error: 'Product not found' }
    }
  } catch (error) {
    console.error('Error getting product:', error)
    return { success: false, error }
  }
}

// Update product
export async function updateProduct(productId: string, updates: any) {
  try {
    const docRef = doc(db, 'products', productId)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating product:', error)
    return { success: false, error }
  }
}

// Delete product
export async function deleteProduct(productId: string) {
  try {
    await deleteDoc(doc(db, 'products', productId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting product:', error)
    return { success: false, error }
  }
}

// Query products by category
export async function getProductsByCategory(category: string) {
  try {
    const q = query(
      collection(db, 'products'),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return { success: true, products }
  } catch (error) {
    console.error('Error querying products:', error)
    return { success: false, error }
  }
}

// ============================================
// FIREBASE STORAGE EXAMPLES
// ============================================

import { storage } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

// Upload image to Firebase Storage
export async function uploadProductImage(file: File, productId: string) {
  try {
    const storageRef = ref(storage, `products/${productId}/${file.name}`)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return { success: true, url: downloadURL }
  } catch (error) {
    console.error('Error uploading image:', error)
    return { success: false, error }
  }
}

// Delete image from Firebase Storage
export async function deleteProductImage(imagePath: string) {
  try {
    const imageRef = ref(storage, imagePath)
    await deleteObject(imageRef)
    return { success: true }
  } catch (error) {
    console.error('Error deleting image:', error)
    return { success: false, error }
  }
}

// ============================================
// FIREBASE AUTH EXAMPLES
// ============================================

import { auth } from '@/lib/firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'

// Save or update user in Firestore
async function saveUserToFirestore(uid: string, email: string, displayName: string) {
  try {
    const userRef = doc(db, 'users', uid)
    // Use setDoc with merge to create or update user document
    await setDoc(userRef, {
      uid,
      email,
      displayName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, { merge: true })
    
    return { success: true }
  } catch (error) {
    console.error('Error saving user to Firestore:', error)
    return { success: false, error }
  }
}

// Sign up with email and password
export async function signUpWithEmail(email: string, password: string, displayName?: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    // Update user profile with display name if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, { displayName })
      
      // Save user to Firestore
      await saveUserToFirestore(
        userCredential.user.uid,
        email,
        displayName
      )
    }
    
    return userCredential.user
  } catch (error: any) {
    console.error('Error signing up:', error)
    throw new Error(error.message || 'Failed to create account')
  }
}

// Sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error: any) {
    console.error('Error signing in:', error)
    throw new Error(error.message || 'Invalid email or password')
  }
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    // Add prompt to select account every time
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    const result = await signInWithPopup(auth, provider)
    
    // Save user to Firestore (creates if doesn't exist)
    if (result.user) {
      await saveUserToFirestore(
        result.user.uid,
        result.user.email || '',
        result.user.displayName || result.user.email?.split('@')[0] || 'User'
      )
    }
    
    return result.user
  } catch (error: any) {
    console.error('Error signing in with Google:', error)
    
    // Handle specific error cases
    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Sign-in popup was closed')
    } else if (error.code === 'auth/popup-blocked') {
      throw new Error('Sign-in popup was blocked by browser')
    } else if (error.code === 'auth/cancelled-popup-request') {
      throw new Error('Sign-in was cancelled')
    }
    
    throw new Error(error.message || 'Failed to sign in with Google')
  }
}

// Sign out
export async function signOutUser() {
  try {
    await signOut(auth)
    return { success: true }
  } catch (error) {
    console.error('Error signing out:', error)
    return { success: false, error }
  }
}

// ============================================
// USAGE IN COMPONENTS
// ============================================

/**
 * Example usage in a React component:
 * 
 * import { addProduct, getAllProducts } from '@/lib/firebase-helpers'
 * 
 * async function handleAddProduct() {
 *   const result = await addProduct({
 *     title: 'New Product',
 *     price: 99.99,
 *     category: 'casual'
 *   })
 *   
 *   if (result.success) {
 *     console.log('Product added with ID:', result.id)
 *   }
 * }
 * 
 * async function loadProducts() {
 *   const result = await getAllProducts()
 *   if (result.success) {
 *     setProducts(result.products)
 *   }
 * }
 */
