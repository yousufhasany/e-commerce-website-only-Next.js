const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with real database in production)
let products = [
  { id: 1, title: 'T-shirt with Tape Details', shortDescription: 'Comfortable cotton t-shirt', fullDescription: 'High-quality cotton t-shirt with unique tape details', price: 120, category: 'casual', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', createdAt: new Date() },
  { id: 2, title: 'Polo with Tipping Details', shortDescription: 'Classic polo shirt', fullDescription: 'Premium polo shirt with tipping details', price: 180, category: 'casual', imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop', createdAt: new Date() },
  { id: 3, title: 'Black Striped T-shirt', shortDescription: 'Stylish striped t-shirt', fullDescription: 'Modern black striped t-shirt for any occasion', price: 120, category: 'casual', imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', createdAt: new Date() },
];

let nextId = 4;

// Routes

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// POST create new product
app.post('/api/products', (req, res) => {
  const { title, shortDescription, fullDescription, price, category, imageUrl } = req.body;
  
  if (!title || !shortDescription || !fullDescription || !price || !category) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newProduct = {
    id: nextId++,
    title,
    shortDescription,
    fullDescription,
    price: parseFloat(price),
    category,
    imageUrl: imageUrl || 'https://via.placeholder.com/300x400?text=Product',
    createdAt: new Date()
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { title, shortDescription, fullDescription, price, category, imageUrl } = req.body;
  
  products[productIndex] = {
    ...products[productIndex],
    title: title || products[productIndex].title,
    shortDescription: shortDescription || products[productIndex].shortDescription,
    fullDescription: fullDescription || products[productIndex].fullDescription,
    price: price ? parseFloat(price) : products[productIndex].price,
    category: category || products[productIndex].category,
    imageUrl: imageUrl || products[productIndex].imageUrl,
    updatedAt: new Date()
  };

  res.json(products[productIndex]);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.json({ message: 'Product deleted successfully', product: deletedProduct[0] });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/products`);
});
