# SHOP.CO - Modern E-Commerce Application

A fully functional e-commerce web application built with Next.js 14 App Router, featuring Firebase authentication, protected routes, product management, and a clean, responsive UI. Created as part of the EJP-12 Next.js Task.

## 🔗 Links

- **GitHub Repository**: [https://github.com/yousufhasany/e-commerce-website-only-Next.js](https://github.com/yousufhasany/e-commerce-website-only-Next.js)
- **Live Demo**: [https://e-commerce-website-only-next-js-niv.vercel.app](https://e-commerce-website-only-next-js-niv.vercel.app)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yousufhasany/e-commerce-website-only-Next.js.git
cd e-commerce-website-only-Next.js

# Install dependencies
npm install

# Set up environment variables (see .env.local.example)
cp .env.local.example .env.local
# Edit .env.local with your Firebase credentials

# Run development server
npm run dev

# Run backend server (optional)
npm run server

# Open browser
http://localhost:3000
```

## ✅ All Requirements Fulfilled

### ✓ 1. Landing Page (7 Sections)
- **Navbar**: Logo, 4+ routes (Shop dropdown, On Sale, New Arrivals, Brands), sticky, responsive
- **After Login**: User dropdown with name/email, Add Product, Manage Products, Sign Out
- **Hero**: Headline, subtitle, CTA button, stats, fashion image
- **New Arrivals**: 4 product cards with View All
- **Top Selling**: 4 products with discount badges
- **Browse by Style**: 4 category cards (Casual/Formal/Party/Gym)
- **Testimonials**: Customer reviews carousel
- **Newsletter**: Email subscription
- **Footer**: Links, social icons, payment methods, copyright

### ✓ 2. Login/Register Pages
- **Firebase Authentication** (Google OAuth + Email/Password)
- Social login and email/password forms
- Redirects to home (/) after successful login
- User data stored in Firebase Authentication
- Toast notifications for success/error feedback

### ✓ 3. Item List Page (`/category/[category]`)
- Page title + description
- **Search bar** (functional filtering)
- **Category filters**: Price slider, colors, sizes, dress styles
- Grid of 6+ product cards with:
  - Image, Title, Description (1-2 lines, ellipsis)
  - Price/discount, Star rating
  - Details button → product page
- Responsive: 1/2/3 column layout

### ✓ 4. Item Details Page (`/products/[id]`)
- Large image gallery with thumbnails
- Product title & breadcrumb navigation
- Full description text
- Meta info: price, rating, reviews
- Color & size selection
- Add to cart functionality
- **Back button** (breadcrumb navigation)
- Related products section

### ✓ 5. Protected: Add Product (`/add-product`)
- **Authentication guard**: Redirects to /login if not logged in
- Form fields:
  - Title*, Short Description*, Full Description*
  - Price*, Category* (dropdown)
  - Optional Image URL with preview
- Submit button with loading state
- **Toast notification** on success
- Validation & error handling

### ✓ 6. Protected: Manage Products (`/manage-products`)
- **Authentication guard**: Protected route
- Product table (desktop) / cards (mobile)
- Actions: **View** (opens details), **Delete** (with confirmation)
- "Add Product" button in header
- Clean, responsive layout
- Empty state handling

### ✓ UI Guidelines
- **Layout**: Consistent spacing, responsive (mobile/tablet/desktop)
- **Typography**: Clear hierarchy, readable fonts
- **Colors**: Black/gray palette, high contrast
- **Cards**: Uniform with hover/focus states, responsive grids
- **Forms**: Labels, icons, inline validation, loading states
- **Interactions**: Hover/focus effects, smooth transitions (200-300ms)
- **Consistency**: Rounded corners, shadows, spacing scale

## 🛠️ Technologies

- **Next.js 14** (App Router, Server Components, TypeScript)
- **Firebase** (Authentication, Firestore, Cloud Storage)
- **NextAuth.js 5.0** (Session management)
- **Tailwind CSS 3.3** (Responsive styling)
- **Express.js 5.1** (Optional backend API)
- **React Hot Toast** (Toast notifications)
- **Lucide React** (Icon library)
- **bcryptjs** (Password hashing)

## 📁 Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Home (7 sections) |
| `/login` | Public | Login page |
| `/register` | Public | Register page |
| `/category/[category]` | Public | Item list with search & filters |
| `/products/[id]` | Public | Item details |
| `/cart` | Public | Shopping cart |
| `/search` | Public | Search results |
| `/add-product` | Protected | Add new product |
| `/manage-products` | Protected | Manage products table |

## 🔐 Authentication

**Firebase Authentication** with NextAuth.js session management:
- **Google OAuth**: Sign in with Google account
- **Email/Password**: Create account with email and secure password
- Protected routes automatically redirect to `/login`
- User dropdown shows after login with Add/Manage product links
- Firebase handles user creation and authentication
- NextAuth manages sessions for protected routes

## 📦 Installation

### 1. Clone & Install
```bash
git clone https://github.com/yousufhasany/e-commerce-website-only-Next.js.git
cd e-commerce-website-only-Next.js
npm install
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → Email/Password and Google providers
4. Enable **Firestore Database** (optional for product storage)
5. Enable **Cloud Storage** (optional for image uploads)
6. Copy your Firebase config

### 3. Environment Variables
Create `.env.local` in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key-minimum-32-characters

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 4. Run Development
```bash
# Frontend only (port 3000)
npm run dev

# Frontend + Backend API (ports 3000 & 3001)
npm run dev:all
```

### 5. Open Browser
Navigate to `http://localhost:3000`

## 🎯 Features Checklist

✅ Navbar with 4+ routes, sticky, responsive  
✅ User dropdown after login (name, email, Add Product, Manage Products, Sign Out)  
✅ Hero section with CTA  
✅ 4 content sections (New Arrivals, Top Selling, Browse Style, Testimonials)  
✅ Footer with links & social icons  
✅ Login/Register with Google OAuth + Credentials  
✅ Item list with search & filters  
✅ Item details with large image & description  
✅ Protected Add Product form with toast notifications  
✅ Protected Manage Products with View/Delete actions  
✅ Responsive design (mobile/tablet/desktop)  
✅ Hover/focus states on all interactive elements  
✅ Form validation & loading states  
✅ Express.js backend with REST API  

## 🌐 API Endpoints (Express Backend)

```
GET    /api/products          # Get all products
GET    /api/products/:id      # Get product by ID
POST   /api/products          # Create product
PUT    /api/products/:id      # Update product
DELETE /api/products/:id      # Delete product
GET    /api/health            # Health check
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🎨 UI Components

- Uniform product cards with hover effects
- Form inputs with icons & validation
- Toast notifications for success/error
- Loading spinners on buttons
- Modal confirmations for delete
- Dropdown menus with animations
- Image galleries with thumbnails
- Star ratings & review displays

## 🚀 Deployment to Vercel

### Prerequisites
- GitHub account with repository pushed
- Vercel account (free tier works)
- Firebase project set up

### Step-by-Step Deployment

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the repository: `e-commerce-website-only-Next.js`

3. **Configure Environment Variables**
   In Vercel project settings, add these environment variables:
   ```
   NEXTAUTH_URL=https://your-project.vercel.app
   NEXTAUTH_SECRET=your-random-secret-key-minimum-32-characters
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. **Update Firebase Settings**
   - In Firebase Console → Authentication → Settings
   - Add authorized domain: `your-project.vercel.app`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Alternative Deployment Options
- **Netlify**: Similar process, import from GitHub
- **Railway**: For full-stack with Express backend
- **Firebase Hosting**: Native Firebase deployment

## 📝 Notes

- Mock data currently used (can integrate Firebase Firestore for persistence)
- Backend API optional (frontend works standalone)
- Firebase handles all authentication
- All 7 landing sections implemented
- All protected routes have authentication guards
- Search & filters fully functional
- Responsive design works on all devices

## 🐛 Troubleshooting

**Auth not working?**  
→ Check `.env.local` file exists with all Firebase credentials  
→ Verify NEXTAUTH_SECRET is set (minimum 32 characters)

**Can't access protected pages?**  
→ Create an account on the register page first  
→ Sign in with your email/password or Google

**Google login fails?**  
→ Enable Google provider in Firebase Console  
→ Check Firebase config in `.env.local`  
→ Verify authorized domains in Firebase settings

**Build fails on Vercel?**  
→ Check all environment variables are set  
→ Verify Firebase credentials are correct  
→ Check build logs for specific errors

**Firebase errors?**  
→ Verify Firebase project is active  
→ Check Authentication is enabled  
→ Ensure all Firebase services are configured

---

**Project fulfills all EJP-12 Next.js Task requirements ✅**
