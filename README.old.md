# SHOP.CO - E-commerce Fashion Website

A modern, responsive e-commerce website built with Next.js 14, featuring a clean design for fashion shopping.

## 🚀 Features

- **Hero Section**: Eye-catching landing page with statistics (200+ brands, 2,000+ products, 30,000+ customers)
- **Brand Showcase**: Features top fashion brands (VERSACE, ZARA, GUCCI, PRADA, Calvin Klein)
- **New Arrivals**: Product grid showcasing latest fashion items with ratings and pricing
- **Top Selling**: Curated selection of best-selling products
- **Product Details Page**: Complete product view with:
  - Image gallery with thumbnail navigation
  - Product information and pricing
  - Color and size selection
  - Quantity selector
  - Add to cart functionality
  - Tabbed interface (Product Details, Rating & Reviews, FAQs)
  - Customer reviews with verified badges
  - Related products section
- **Shopping Cart Page**: Full-featured cart with:
  - Cart items list with product images
  - Size and color information
  - Quantity controls (increase/decrease)
  - Remove item functionality
  - Order summary with subtotal, discount, delivery fee
  - Promo code input and application
  - Total price calculation
  - Go to Checkout button
  - Responsive design
- **Category Pages** (Casual, Formal, Party, Gym):
  - Breadcrumb navigation
  - Advanced filter sidebar with:
    - Category filters (T-shirts, Shorts, Shirts, Hoodie, Jeans)
    - Price range slider ($0-$500)
    - Color selection (10 colors)
    - Size selection (9 sizes from XX-Small to 4X-Large)
    - Dress style filters (collapsible sections)
    - Apply Filter button
  - Product grid (3 columns)
  - Sort options (Most Popular, Newest, Price)
  - Product count display
  - Pagination controls
  - Responsive layout
- **Browse by Style**: Category browsing with clickable cards (Casual, Formal, Party, Gym)
- **Customer Testimonials**: Verified customer reviews with carousel navigation
- **Newsletter Subscription**: Email capture for latest offers
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with hover effects and smooth transitions

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Hooks** - State management

## 📁 Project Structure

```
NextJsProject/
├── src/
│   ├── app/
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── category/
│   │   │   └── [category]/
│   │   │       └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── ProductCard.tsx
│       ├── ProductDetails.tsx
│       ├── ReviewsSection.tsx
│       ├── RelatedProducts.tsx
│       ├── CategoryPage.tsx
│       ├── Cart.tsx
│       ├── NewArrivals.tsx
│       ├── TopSelling.tsx
│       ├── BrowseByStyle.tsx
│       ├── Testimonials.tsx
│       └── Newsletter.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd c:\Project\NextJsProject
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Components Overview

### Header
- Logo and brand name
- Navigation menu (Shop, On Sale, New Arrivals, Brands)
- Search bar
- Shopping cart and user icons
- Sticky positioning

### Hero Section
- Large headline and description
- Call-to-action button
- Statistics display
- Featured image
- Brand logos strip

### Product Components
- Product cards with images
- Star ratings
- Pricing with discounts
- Hover effects

### Browse by Style
- Category cards (Casual, Formal, Party, Gym)
- Visual category representation
- Click navigation

### Testimonials
- Customer reviews
- Star ratings
- Verified badges
- Carousel navigation

### Newsletter
- Email input form
- Black background design
- Subscription call-to-action

### Footer
- Multi-column layout
- Company links
- Help & FAQ
- Resources
- Social media icons
- Payment method badges

## 🎯 Design Features

- **Typography**: Bold headings with clear hierarchy
- **Color Scheme**: Black, white, and gray palette with accent colors
- **Spacing**: Consistent padding and margins
- **Hover States**: Interactive elements with smooth transitions
- **Responsive Grid**: Adapts to different screen sizes
- **Icons**: Lucide icons for modern UI elements

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

You can customize the website by:

1. **Colors**: Update Tailwind classes in components
2. **Products**: Modify product arrays in `NewArrivals.tsx` and `TopSelling.tsx`
3. **Testimonials**: Update testimonials array in `Testimonials.tsx`
4. **Brands**: Change brand names in `Hero.tsx`
5. **Categories**: Modify styles in `BrowseByStyle.tsx`

## 📄 License

This project is created for educational purposes.

## 👤 Author

Created as part of EJP-12 Next.js Task

---

Built with ❤️ using Next.js and Tailwind CSS
