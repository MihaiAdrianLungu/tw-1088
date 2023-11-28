const express = require('express');

const User = require('../database/models/User');
const Order = require('../database/models/Order');
const { handleErrorResponse } = require('../utils');
const app = require('../app/app');

const router = express.Router();

router.get('/', async function(res, res) {
    try {
        const orders = await Order.findAll();

        res.status(200).json({success: true, message: "Orders", data: orders});
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders');
    }
})

router.get('/user', async function(req, res){
    try {
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if(!user) {
            res.status(404).json({ success: false, message: 'User not found', data: {} });
        }
        
        const oders = await Order.findAll({
            where: {
                userId: userId
            }
        })

        return res.status(200).json({ success: true, message: 'Orders found', data: oders })
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders')
    }
})

router.post('/', async function(req, res) {
    try {
        const userId = req.userId;
        const {status, value} = req.body;

        const order = await Order.create({
            status: status,
            value: value,
            userId: userId
        })

        res.status(201).json({success: true, message: "Order created", data: order});
    } catch (error) {
        handleErrorResponse(res, error, 'Error creating order');
    }
})

router.put('/:id', async function(req, res) {
    try {
        const orderId = req.params.id;

        const order = await Order.findByPk(orderId);

        if(!order) {
            res.status(404).json({ success: false, message: 'Order not found', data: {} });
        }

        const updatedOrder = await order.update(req.body);

        return res.status(200).json({ success: true, message: 'Order updated', data: updatedOrder })
    } catch (error) {
        handleErrorResponse(res, error, 'Error updating order');
    }
})

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id;

        const order = await Order.findByPk(id);

        if (!order) {
            res.status(404).json({ success: false, message: 'Order not found', data: {} });
        }

        await order.destroy();

        return res.status(200).json({ success: true, message: 'Order deleted', data: {} })
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving users');
    }
})

module.exports = router;