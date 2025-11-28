# SHOP.SAKU — Next.js E-Commerce Application

## 🚀 Live Demo
**[View Live Site](https://e-commerce-website-only-next-js-niv.vercel.app/)**

## 📝 Short Description
SHOP.SAKU is a modern e-commerce web application built with **Next.js 14 App Router** and **NextAuth.js** authentication. The project demonstrates a complete full-stack implementation with public and protected pages, user authentication (Google OAuth & Credentials), product management system, shopping cart functionality, and a polished, responsive UI with glass morphism effects.

## ✨ Key Features

- **Complete Landing Page** with 7 distinct UI sections
- **Dual Authentication** - Google OAuth and Email/Password login using NextAuth.js
- **Protected Routes** - Add Product and Manage Products pages with authentication guards
- **Product Management** - Full CRUD operations with instant localStorage persistence
- **Shopping Cart** - Add to cart functionality with persistent storage
- **Responsive Design** - Mobile-first approach with hamburger menu for mobile devices
- **Polished UI** - Glass morphism effects, hover states, smooth transitions, and animations
- **Search Functionality** - Real-time product search with suggestions
- **Category Browsing** - Organized product categories (Casual, Formal, Party, Gym)

## 📄 Route Summary

| Route | Description | Access Type |
|-------|-------------|-------------|
| `/` | Landing Page with Hero, New Arrivals, Top Selling, Browse by Style, Testimonials, Newsletter | Public |
| `/login` | Login Page (Google OAuth + Email/Password) | Public |
| `/register` | Registration Page with background image and glass morphism | Public |
| `/new-arrivals` | New Arrivals Product List (6+ items) | Public |
| `/on-sale` | On Sale Product List | Public |
| `/brands` | Brands Page | Public |
| `/category/[category]` | Category-specific Product List (Casual, Formal, Party, Gym) | Public |
| `/products/[id]` | Product Details Page with full description, price, color/size selection | Public |
| `/search` | Search Results Page | Public |
| `/cart` | Shopping Cart with quantity management | Public |
| `/add-product` | Add New Product Form | **Protected** (Login Required) |
| `/manage-products` | Manage Products Table with View/Delete actions | **Protected** (Login Required) |

## 🏗️ Landing Page Breakdown

### 1. **Navbar** (Sticky, Responsive)
   - SHOP.SAKU logo linking to home
   - Navigation menu with 4+ routes: Shop (dropdown with categories), On Sale, New Arrivals, Brands
   - **Mobile hamburger menu** for responsive navigation
   - Search bar with real-time suggestions
   - Shopping cart icon
   - **Authentication-aware UI**:
     - Before login: Login and Register buttons
     - After login: User dropdown with:
       - User name and email
       - Add Product link
       - Manage Products link
       - Sign Out button

### 2. **Hero Section**
   - Bold headline: "FIND CLOTHES THAT MATCHES YOUR STYLE"
   - Subtitle with brand description
   - Primary CTA: "Shop Now" button linking to Casual category
   - Statistics display: 200+ Brands, 2,000+ Products, 30,000+ Customers
   - Professional background with styling

### 3. **New Arrivals Section**
   - Grid of 4 product cards
   - Each card includes product image, name, rating, and price

### 4. **Top Selling Section**
   - Grid of 4 best-selling product cards
   - Uniform spacing and responsive grid

### 5. **Browse by Style Section**
   - 4 category cards: Casual, Formal, Party, Gym
   - Large background images with hover effects

### 6. **Testimonials Section**
   - Customer reviews with 5-star ratings
   - Responsive card layout

### 7. **Newsletter Section**
   - Email subscription form
   - Clean, centered design

### 8. **Footer**
   - SHOP.SAKU branding with links
   - Social media icons
   - Copyright notice
   - Payment method badges

## 🛍️ Item List Pages

**Pages:** `/new-arrivals`, `/on-sale`, `/brands`, `/category/[category]`

### Features:
- Page title and description
- Search bar for filtering
- **Minimum 6 product cards** in responsive grid
- Each card includes:
  - Product image
  - Title
  - Short description (ellipsis)
  - Price/discount
  - Star rating
  - "View Details" button
- Mobile-responsive (1 column mobile, 2-3 tablet, 4 desktop)

## 📦 Item Details Page

**Route:** `/products/[id]`

### Features:
- Large product image
- Product title and full description
- Star rating and reviews
- Price with discount
- Color and size selection
- Quantity selector
- "Add to Cart" button
- Related Products section

## 🔒 Protected Page: Add Product

**Route:** `/add-product` (Requires Login)

### Security:
- Server-side NextAuth session check
- Automatic redirect to `/login` if not authenticated

### Form Fields:
- Product Name (required)
- Short Description (required)
- Full Description (required)
- Price (required, USD)
- Category (select: Casual, Formal, Party, Gym)
- Image URL (required)

### Functionality:
- Submit adds product to localStorage instantly
- Toast confirmation message
- Auto-redirect to `/manage-products`
- No loading delays

## 📋 Protected Page: Manage Products

**Route:** `/manage-products` (Requires Login)

### Features:
- Product table/grid with all products
- Each entry shows: image, name, category, price, description
- **Actions:**
  - **View** - Go to product details
  - **Delete** - Remove with confirmation
- Responsive layout (table on desktop, cards on mobile)
- Real-time updates via localStorage

## 🎨 UI Guidelines & Design System

### Layout & Responsiveness
- Mobile-first with breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Consistent spacing using Tailwind scale
- Max-width containers for centering
- Responsive grids and flexbox

### Typography & Colors
- **Font Hierarchy:** h1(36px), h2(24px), body(16px), small(14px)
- **Colors:** Black primary, gray scale, white with transparency
- **Text:** gray-900 primary, gray-600 secondary

### Cards, Lists & Forms
- Uniform white cards with shadows and rounded corners
- Hover states: scale, shadow, background changes
- Form styling with focus rings and validation
- All transitions smooth (300ms)

### Interactions
- Glass morphism (backdrop-blur, semi-transparent)
- Hover/focus on all interactive elements
- Micro-animations for transitions
- Visual consistency throughout

## 🛠️ Technologies Used

### Frontend
- **Next.js 14.2.33** - App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.3** - Styling
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Authentication
- **NextAuth.js 5.0-beta** - Auth library
- **Firebase Auth 12.6.0** - Google OAuth + Email/Password
- **Firebase Firestore** - User data storage

### Storage
- **localStorage** - Products and cart (instant performance)

### Deployment
- **Vercel** - Hosting with auto-deploy
- **GitHub** - Version control

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project with Authentication enabled


### Installation

```bash
# Clone repository
git clone https://github.com/yousufhasany/e-commerce-website-only-Next.js.git

# Install dependencies
cd e-commerce-website-only-Next.js
npm install

# Run development server
npm run dev

```

## 🔑 Authentication Flow

1. User visits protected route (`/add-product` or `/manage-products`)
2. Server-side session check validates authentication
3. If not authenticated → redirect to `/login`
4. User logs in with Google or Email/Password
5. Firebase creates/validates user
6. User data saved to Firestore (background)
7. NextAuth session created
8. Redirect to homepage
9. Header shows user dropdown
10. Protected routes now accessible

## ✅ Requirements Checklist

### Landing Page (7 Sections) ✓
- [x] Navbar: logo, 4+ routes, login/register, sticky, responsive, mobile menu
- [x] After login: user dropdown with Add Product, Manage Products
- [x] Hero: headline, subtitle, CTA
- [x] New Arrivals + Top Selling sections
- [x] Browse by Style categories
- [x] Testimonials
- [x] Newsletter + Footer

### Login/Register ✓
- [x] Google OAuth + Email/Password
- [x] Redirect to home after login
- [x] Glass morphism UI

### Item List ✓
- [x] Title + description
- [x] Search bar
- [x] 6+ product cards with all required fields
- [x] Responsive grid

### Item Details ✓
- [x] Large image, title, full description
- [x] Meta info (price, rating)
- [x] Add to cart functionality

### Protected: Add Product ✓
- [x] Login required
- [x] All form fields
- [x] Toast confirmation
- [x] Instant save

### Protected: Manage Products ✓
- [x] Login required
- [x] Product list with View/Delete
- [x] Responsive layout

### UI Guidelines ✓
- [x] Responsive design
- [x] Typography hierarchy
- [x] Uniform cards with hover states
- [x] Clean forms
- [x] Visual consistency

### Technologies ✓
- [x] Next.js App Router
- [x] NextAuth.js
- [x] Vercel deployment

### Submission ✓
- [x] GitHub: [Repository Link](https://github.com/yousufhasany/e-commerce-website-only-Next.js)
- [x] Live Demo: [SHOP.SAKU](https://e-commerce-website-only-next-js-niv.vercel.app/)
- [x] README with all details

## 🎉 Additional Features

- Shopping cart with persistence
- Real-time search suggestions
- Related products
- Customer reviews
- Newsletter subscription
- PWA support
- Optimized performance (2-3s account creation)
- Toast notifications

## 📞 Support

For issues or questions, open an issue on [GitHub](https://github.com/yousufhasany/e-commerce-website-only-Next.js/issues).

---

**Built with ❤️ using Next.js 14, NextAuth.js, and Tailwind CSS**

**Live:** https://e-commerce-website-only-next-js-niv.vercel.app/

**GitHub:** https://github.com/yousufhasany/e-commerce-website-only-Next.js
