const Order = require('../models/orderModel');

exports.getAllOrders = (req, res) => {
    Order.getAllOrders((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.getOrderById = (req, res) => {
    Order.getOrderById(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.addOrder = (req, res) => {
    const orderData = [
        req.body.order_date,
        req.body.userID,
        req.body.gameID
    ];
    Order.addOrder(orderData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.updateOrder = (req, res) => {
    const orderData = [
        req.body.order_date,
        req.body.gameID,
        req.body.userID
    ];
    Order.updateOrder(req.params.id, orderData, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.deleteOrder = (req, res) => {
    Order.deleteOrder(req.params.id, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};
