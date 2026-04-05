import { Request, Response } from 'express';
import Order from '../models/Order';

// Create Order
export const createOrder = async (req: Request, res: Response) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Get User Orders
export const getUserOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user orders', error });
    }
};

// Get Order Details
export const getOrderDetails = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order details', error });
    }
};