import { Router } from 'express';

const router = Router();

// Mock data
let products = [];

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET a single product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// POST create a new product
router.post('/', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body }; // Assuming body has all needed fields
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update a product by ID
router.put('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).send('Product not found');
    }
});

// DELETE a product by ID
router.delete('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Product not found');
    }
});

export default router;
