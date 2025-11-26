# EJP-12 Next.js Task — Next.js App Router + NextAuth Full-Stack Application

A fully functional e-commerce web application built with Next.js App Router, featuring authentication, protected routes, product management, and a clean, responsive UI.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run backend server (optional)
npm run server

# Open browser
http://localhost:3000
```

**Demo Login:** `demo@example.com` / `password`

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
- **Google OAuth** + **Credentials** authentication
- Social login and email/password forms
- Redirects to home (/) after successful login
- Demo credentials provided for testing

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

- **Next.js 14** (App Router)
- **NextAuth.js** (Google + Credentials)
- **TypeScript**
- **Tailwind CSS 3.3**
- **Express.js** (Backend API)
- **React Hot Toast** (Notifications)
- **Lucide React** (Icons)

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

**NextAuth.js** with middleware protection:
- Google OAuth (requires Google credentials in `.env.local`)
- Credentials (demo: `demo@example.com` / `password`)
- Protected routes automatically redirect to `/login`
- User dropdown shows after login with Add/Manage product links

## 📦 Installation

1. **Install dependencies**
```bash
npm install
```

2. **Create `.env.local`**
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. **Run development**
```bash
npm run dev          # Frontend (port 3000)
npm run server       # Backend API (port 3001)
```

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

## 🚀 Deployment

**Vercel (Recommended)**
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

## 📝 Notes

- Mock data used (replace with database)
- Demo credentials: `demo@example.com` / `password`
- Backend API optional (frontend works standalone)
- Google OAuth requires credentials setup
- All 7 landing sections implemented
- All protected routes have authentication guards
- Search & filters fully functional

## 🐛 Troubleshooting

**Auth not working?**  
→ Check `.env.local` file exists with NEXTAUTH_SECRET

**Can't access protected pages?**  
→ Login first with demo credentials

**Google login fails?**  
→ Add Google OAuth credentials to `.env.local`

---

**Project fulfills all EJP-12 Next.js Task requirements ✅**
