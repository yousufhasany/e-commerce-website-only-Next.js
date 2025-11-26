# 🗺️ Route Summary - SHOP.CO E-Commerce Application

Complete documentation of all routes in the application.

---

## 📁 Route Structure

```
/                           → Home page (7 sections)
├── /login                  → Login page
├── /register               → Register page
├── /search                 → Search results
├── /cart                   → Shopping cart
├── /on-sale               → On sale products
├── /new-arrivals          → New arrival products
├── /brands                → All brands
│
├── /category              → Category pages
│   ├── /casual            → Casual clothing
│   ├── /formal            → Formal wear
│   ├── /party             → Party outfits
│   └── /gym               → Gym wear
│
├── /products              → Product pages
│   └── /[id]              → Individual product details
│
└── [Protected Routes]
    ├── /add-product       → Add new product (auth required)
    └── /manage-products   → Manage products (auth required)
```

---

## 🌐 Public Routes

### 1. Home Page (`/`)
**Access:** Public  
**Purpose:** Landing page with 7 sections

**Sections:**
1. **Navbar**: Logo, navigation links, search, cart, user menu
2. **Hero**: Main headline, CTA button, fashion imagery
3. **New Arrivals**: Featured new products (4 cards)
4. **Top Selling**: Best-selling products with discounts
5. **Browse by Style**: Category cards (Casual, Formal, Party, Gym)
6. **Testimonials**: Customer reviews carousel
7. **Newsletter**: Email subscription form
8. **Footer**: Links, social icons, payment methods

**Features:**
- Responsive design (mobile/tablet/desktop)
- Smooth scrolling
- Interactive hover states
- Dynamic content loading

---

### 2. Login Page (`/login`)
**Path:** `/login`  
**Access:** Public  
**Purpose:** User authentication

**Features:**
- **Google OAuth**: Sign in with Google (Firebase)
- **Email/Password**: Traditional credentials login
- Form validation
- Error handling with toast notifications
- Redirect to home after successful login
- Link to register page

**Firebase Integration:**
- `signInWithEmail()` for email/password
- `signInWithGoogle()` for Google OAuth
- User session stored in Firebase Auth

---

### 3. Register Page (`/register`)
**Path:** `/register`  
**Access:** Public  
**Purpose:** New user registration

**Features:**
- **Google OAuth**: Sign up with Google
- **Email/Password**: Create account with credentials
- Full name field
- Password confirmation
- Password strength validation (min 6 characters)
- Match validation (password === confirmPassword)
- Toast notifications
- Redirect to home after signup
- Link to login page

**Firebase Integration:**
- `signUpWithEmail()` creates user in Firebase Auth
- User profile stored with display name

---

### 4. Search Page (`/search`)
**Path:** `/search?q=[query]`  
**Access:** Public  
**Purpose:** Global product search results

**Features:**
- Search query in URL parameter
- Real-time product filtering
- Product grid display
- No results state
- Responsive layout

**Query Parameters:**
- `q`: Search query string

---

### 5. Shopping Cart (`/cart`)
**Path:** `/cart`  
**Access:** Public  
**Purpose:** View and manage cart items

**Features:**
- Cart items list
- Quantity adjustment
- Remove items
- Subtotal calculation
- Discount calculation
- Order summary
- Promo code input
- Checkout button
- Empty cart state

**Layout:**
- Desktop: Side-by-side (items | summary)
- Mobile: Stacked layout

---

### 6. Category Pages
**Paths:**
- `/category/casual` - Casual clothing
- `/category/formal` - Formal wear
- `/category/party` - Party outfits
- `/category/gym` - Gym wear

**Access:** Public  
**Purpose:** Browse products by category

**Features:**
- **Search Bar**: Filter products within category
- **Filters Panel** (Desktop sidebar, Mobile drawer):
  - Price range slider ($50 - $500)
  - Color selection (10 colors)
  - Size selection (XX-Small to 4X-Large)
  - Dress style checkboxes
- **Product Grid**: 6+ products per category
- **Product Cards**:
  - Image
  - Title
  - Short description (truncated)
  - Price & discount
  - Star rating (out of 5)
  - "View Details" button
- **Responsive Layout**:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns

**URL Parameters:**
- `search`: Filter by search query
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `colors`: Selected colors (comma-separated)
- `sizes`: Selected sizes (comma-separated)

---

### 7. Product Details Page
**Path:** `/products/[id]`  
**Access:** Public  
**Purpose:** View single product details

**Dynamic Route Parameter:**
- `[id]`: Product ID (e.g., `/products/1`, `/products/casual-shirt-1`)

**Features:**
- **Breadcrumb Navigation**: Home > Category > Product
- **Image Gallery**:
  - Large main image
  - Thumbnail carousel
  - Click thumbnails to change main image
- **Product Info**:
  - Title
  - Star rating (e.g., 4.5/5)
  - Review count
  - Price with discount
  - Full description
- **Product Options**:
  - Color selector (color swatches)
  - Size selector (S, M, L, XL, XXL)
  - Quantity selector
- **Add to Cart Button**
- **Product Details Tab**
- **Reviews Section**
- **Related Products Carousel**

**Data:**
- Product fetched by ID from data source
- 404 handling for invalid IDs

---

### 8. Special Collection Pages
**Paths:**
- `/on-sale` - Products on sale
- `/new-arrivals` - Latest products
- `/brands` - Browse by brand

**Access:** Public  
**Purpose:** Curated product collections

**Features:**
- Similar to category pages
- Filtered product lists
- Same filter options
- Same product card design

---

## 🔒 Protected Routes

### 9. Add Product Page (`/add-product`)
**Path:** `/add-product`  
**Access:** Protected (requires authentication)  
**Purpose:** Create new products

**Authentication Guard:**
```typescript
const session = await auth()
if (!session) redirect('/login')
```

**Form Fields:**
- **Title*** (required)
- **Short Description*** (required, max 100 chars)
- **Full Description*** (required, textarea)
- **Price*** (required, number input)
- **Category*** (required, dropdown):
  - Casual
  - Formal
  - Party
  - Gym
- **Image URL** (optional, with preview)

**Features:**
- Client-side validation
- Character counter for short description
- Image preview
- Loading state on submit
- Toast notification on success
- Error handling
- Clear form after submission

**Firebase Integration:**
- Can be extended to save to Firestore
- Image upload to Firebase Storage (optional)

**Access Control:**
- Visible in user dropdown after login
- Redirects to `/login` if not authenticated

---

### 10. Manage Products Page (`/manage-products`)
**Path:** `/manage-products`  
**Access:** Protected (requires authentication)  
**Purpose:** View and manage all products

**Authentication Guard:**
```typescript
const session = await auth()
if (!session) redirect('/login')
```

**Features:**
- **Product Table** (Desktop):
  - Columns: Image, Title, Category, Price, Actions
  - Sortable columns
  - Hover effects
- **Product Cards** (Mobile):
  - Card layout with same info
  - Stacked design
- **Actions**:
  - **View**: Navigate to product details
  - **Delete**: Remove product with confirmation
- **Add Product Button**: Link to `/add-product`
- **Empty State**: Shown when no products
- **Loading State**: Skeleton during fetch

**Firebase Integration:**
- `getAllProducts()` from Firestore
- `deleteProduct()` with confirmation
- Real-time updates (optional)

**Access Control:**
- Visible in user dropdown after login
- Redirects to `/login` if not authenticated

---

## 🔐 Authentication Flow

### Login Flow
```
1. User visits /login
2. Enters credentials OR clicks Google
3. Firebase authenticates user
4. NextAuth creates session
5. Redirect to /
6. User dropdown shows with name/email
```

### Register Flow
```
1. User visits /register
2. Enters details (name, email, password)
3. Firebase creates user account
4. User profile saved with displayName
5. NextAuth creates session
6. Redirect to /
7. User logged in automatically
```

### Protected Route Flow
```
1. User tries to access /add-product or /manage-products
2. Middleware checks for session
3. If no session → redirect to /login
4. If session exists → allow access
5. Page renders with user context
```

### Logout Flow
```
1. User clicks "Sign Out" in dropdown
2. signOut() called (NextAuth)
3. Firebase session cleared
4. Redirect to /
5. User dropdown hidden
6. Protected routes inaccessible
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Hamburger menu for navigation
- Stacked forms
- Card view for products
- Mobile-optimized filters (drawer)
- Touch-friendly buttons

### Tablet (768px - 1024px)
- 2 column product grid
- Sidebar navigation
- Optimized spacing
- Tablet-friendly forms

### Desktop (> 1024px)
- 3-4 column product grid
- Full navigation bar
- Sidebar filters
- Hover states on cards
- Optimal reading width

---

## 🎯 Navigation Structure

### Header Navigation
```
Logo (/) | Shop ▼ | On Sale | New Arrivals | Brands | [Search] | [Cart] | [User Menu]
```

**Shop Dropdown:**
- Casual
- Formal
- Party
- Gym

**User Menu (Logged Out):**
- Login
- Register

**User Menu (Logged In):**
- [User Name]
- [User Email]
- Add Product
- Manage Products
- Sign Out

### Footer Navigation
**Company:**
- About
- Features
- Works
- Career

**Help:**
- Customer Support
- Delivery Details
- Terms & Conditions
- Privacy Policy

**Resources:**
- Free eBooks
- Development Tutorial
- How to - Blog
- YouTube Playlist

---

## 🔗 API Routes (Express Backend)

### Product API
```
GET    /api/products          → Get all products
GET    /api/products/:id      → Get product by ID
POST   /api/products          → Create new product
PUT    /api/products/:id      → Update product
DELETE /api/products/:id      → Delete product
```

### Health Check
```
GET    /api/health            → Server status
```

**Port:** 3001  
**CORS:** Enabled for localhost:3000

---

## 🗄️ Firebase Integration

### Authentication Routes
- Email/Password signup → `signUpWithEmail()`
- Email/Password login → `signInWithEmail()`
- Google OAuth → `signInWithGoogle()`
- Sign out → `signOutUser()`

### Firestore (Optional)
- Products collection → `/products`
- Users collection → `/users`
- Orders collection → `/orders`

### Storage (Optional)
- Product images → `/products/{productId}/{imageName}`
- User avatars → `/avatars/{userId}/{imageName}`

---

## 📊 Route Summary Table

| Route | Type | Auth | Purpose |
|-------|------|------|---------|
| `/` | Public | No | Home page |
| `/login` | Public | No | Login |
| `/register` | Public | No | Register |
| `/search` | Public | No | Search results |
| `/cart` | Public | No | Shopping cart |
| `/on-sale` | Public | No | Sale products |
| `/new-arrivals` | Public | No | New products |
| `/brands` | Public | No | Browse brands |
| `/category/casual` | Public | No | Casual clothing |
| `/category/formal` | Public | No | Formal wear |
| `/category/party` | Public | No | Party outfits |
| `/category/gym` | Public | No | Gym wear |
| `/products/[id]` | Public | No | Product details |
| `/add-product` | Protected | Yes | Add product |
| `/manage-products` | Protected | Yes | Manage products |

**Total Routes:** 15 (13 public + 2 protected)

---

## 🎨 Design Patterns

### Route Naming Conventions
- Lowercase kebab-case
- Descriptive names
- RESTful structure
- Clear hierarchy

### File Structure
```
app/
├── page.tsx                    → /
├── login/page.tsx              → /login
├── register/page.tsx           → /register
├── search/page.tsx             → /search
├── cart/page.tsx               → /cart
├── category/[category]/page.tsx → /category/*
├── products/[id]/page.tsx      → /products/*
├── add-product/page.tsx        → /add-product
└── manage-products/page.tsx    → /manage-products
```

---

**Complete route documentation for SHOP.CO E-Commerce Application**
