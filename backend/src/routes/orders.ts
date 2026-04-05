import express from 'express';
import { getUserOrders, createOrder, getOrderDetails } from '../controllers/orderController';

const router = express.Router();

// GET user orders
router.get('/user-orders', getUserOrders);

// POST create an order
router.post('/create-order', createOrder);

// GET order details
router.get('/order-details/:id', getOrderDetails);

export default router;