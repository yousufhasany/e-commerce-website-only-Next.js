# 🚀 Deployment Guide - SHOP.CO E-Commerce Application

Complete step-by-step guide to deploy your Next.js application to Vercel with Firebase integration.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier)
- ✅ Firebase project set up
- ✅ All environment variables ready

---

## 🔥 Step 1: Firebase Setup

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., `shop-co-ecommerce`)
4. Disable Google Analytics (optional)
5. Click "Create project"

### 1.2 Enable Authentication
1. In Firebase Console → **Authentication**
2. Click "Get started"
3. Enable **Email/Password** provider
4. Enable **Google** provider
5. Add your email as authorized domain (will add Vercel domain later)

### 1.3 Enable Firestore (Optional)
1. Go to **Firestore Database**
2. Click "Create database"
3. Select "Production mode"
4. Choose your region
5. Click "Enable"

### 1.4 Enable Cloud Storage (Optional)
1. Go to **Storage**
2. Click "Get started"
3. Use default security rules
4. Click "Done"

### 1.5 Get Firebase Configuration
1. Go to **Project Settings** (gear icon)
2. Scroll to "Your apps"
3. Click "Web" icon (`</>`)
4. Register app with nickname (e.g., `shop-co-web`)
5. Copy the configuration values:
   ```js
   apiKey: "..."
   authDomain: "..."
   projectId: "..."
   storageBucket: "..."
   messagingSenderId: "..."
   appId: "..."
   ```

---

## 📦 Step 2: Prepare Repository

### 2.1 Initialize Git (if not already done)
```bash
cd C:\Project\NextJsProject
git init
git add .
git commit -m "Initial commit: SHOP.CO e-commerce application"
```

### 2.2 Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Repository name: `e-commerce-website-only-Next.js`
4. Make it public or private
5. Don't initialize with README (you already have one)
6. Click "Create repository"

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/e-commerce-website-only-Next.js.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username**

---

## ☁️ Step 3: Deploy to Vercel

### 3.1 Import Project
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Find and select `e-commerce-website-only-Next.js`
5. Click "Import"

### 3.2 Configure Project
**Framework Preset:** Next.js (auto-detected)  
**Root Directory:** `./`  
**Build Command:** `npm run build`  
**Output Directory:** `.next`

### 3.3 Add Environment Variables

Click "Environment Variables" and add these:

#### NextAuth Variables
```
NEXTAUTH_URL = https://your-project.vercel.app
```
**Generate secret with:**
```bash
openssl rand -base64 32
```
```
NEXTAUTH_SECRET = [paste generated secret]
```

#### Firebase Variables
```
NEXT_PUBLIC_FIREBASE_API_KEY = [from Firebase config]
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = [from Firebase config]
NEXT_PUBLIC_FIREBASE_PROJECT_ID = [from Firebase config]
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = [from Firebase config]
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = [from Firebase config]
NEXT_PUBLIC_FIREBASE_APP_ID = [from Firebase config]
```

**Important:** Set all variables for Production, Preview, and Development environments

### 3.4 Deploy
1. Click "Deploy"
2. Wait for build (2-3 minutes)
3. Click "Visit" to see your live site
4. Copy your deployment URL (e.g., `https://shop-co.vercel.app`)

---

## 🔐 Step 4: Configure Firebase for Production

### 4.1 Add Vercel Domain to Firebase
1. Go to Firebase Console → **Authentication** → **Settings**
2. Scroll to "Authorized domains"
3. Click "Add domain"
4. Add your Vercel domain: `your-project.vercel.app`
5. Click "Add"

### 4.2 Update NEXTAUTH_URL
1. Go to Vercel project → **Settings** → **Environment Variables**
2. Edit `NEXTAUTH_URL`
3. Change to your actual Vercel URL: `https://your-project.vercel.app`
4. Save and redeploy

---

## ✅ Step 5: Verify Deployment

### 5.1 Test Authentication
1. Visit your deployed site
2. Click "Login" or "Register"
3. Try creating account with email/password
4. Try Google sign-in
5. Verify redirect to homepage works
6. Check user dropdown appears with name

### 5.2 Test Protected Routes
1. Sign out
2. Try accessing `/add-product` → should redirect to login
3. Try accessing `/manage-products` → should redirect to login
4. Sign in
5. Verify you can access protected pages

### 5.3 Test Features
- ✅ Browse products
- ✅ View product details
- ✅ Category pages with filters
- ✅ Search functionality
- ✅ Add to cart
- ✅ Add new product (protected)
- ✅ Manage products (protected)

---

## 🔄 Step 6: Continuous Deployment

### Automatic Deployments
Every push to `main` branch automatically deploys to production:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy automatically
4. Notify you via email

### Preview Deployments
Every pull request gets a preview deployment:
1. Create a new branch
2. Make changes
3. Push and create PR
4. Vercel creates preview URL
5. Test before merging

---

## 📊 Step 7: Monitor & Optimize

### Vercel Analytics (Optional)
1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics
4. View real-time traffic and performance

### Firebase Usage
1. Firebase Console → **Usage and Billing**
2. Monitor Authentication users
3. Check Firestore reads/writes
4. Monitor Storage usage

---

## 🛠️ Troubleshooting

### Build Fails
**Error:** `Module not found`
- **Fix:** Check `package.json` has all dependencies
- Run `npm install` locally first

**Error:** `Environment variable not found`
- **Fix:** Verify all env vars in Vercel settings
- Check variable names match exactly

### Authentication Issues
**Error:** `NextAuth configuration error`
- **Fix:** Verify `NEXTAUTH_URL` matches your Vercel domain
- Regenerate `NEXTAUTH_SECRET` if needed

**Error:** `Firebase auth/unauthorized-domain`
- **Fix:** Add Vercel domain to Firebase authorized domains

### Runtime Errors
**Error:** `Firebase configuration invalid`
- **Fix:** Double-check all Firebase env variables
- Ensure no extra spaces or quotes

**Error:** `CORS error`
- **Fix:** Check Firebase security rules
- Verify Firestore permissions

---

## 🎉 Success!

Your SHOP.CO e-commerce application is now live! 

**Share your deployment:**
- GitHub: `https://github.com/YOUR_USERNAME/e-commerce-website-only-Next.js`
- Live Demo: `https://your-project.vercel.app`

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Firebase Documentation](https://firebase.google.com/docs)
- [NextAuth.js Deployment](https://next-auth.js.org/deployment)

---

## 🔒 Security Best Practices

1. ✅ Never commit `.env.local` to GitHub
2. ✅ Use `.env.local.example` for documentation
3. ✅ Rotate `NEXTAUTH_SECRET` periodically
4. ✅ Enable Firestore security rules
5. ✅ Use environment-specific Firebase projects
6. ✅ Monitor Firebase console for suspicious activity
7. ✅ Enable 2FA on Vercel and Firebase accounts

---

**Need help?** Open an issue on GitHub or contact support.
