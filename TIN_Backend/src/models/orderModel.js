const db = require('../config/db');

const Order = {
    getAllOrders: (callback) => {
        const sql = "SELECT * FROM orders";
        db.query(sql, callback);
    },

    getOrderById: (id, callback) => {
        const sql = `SELECT o.orderID, o.order_date, u.userID, u.login, u.email, g.gameID, g.title, g.price FROM orders o INNER JOIN user u ON o.userID = u.userID INNER JOIN game g ON o.gameID = g.gameID WHERE o.orderID=?`;
        db.query(sql, [id], callback);
    },

    addOrder: (orderData, callback) => {
        const sql = "INSERT INTO `orders` (`order_date`, `userID`, `gameID`) VALUES (?);";
        db.query(sql, [orderData], callback);
    },

    updateOrder: (id, orderData, callback) => {
        const sql = "UPDATE orders set `order_date`=?, `gameID`=?, `userID`=? WHERE orderID = ?";
        db.query(sql, [...orderData, id], callback);
    },

    deleteOrder: (id, callback) => {
        const sql = "DELETE FROM orders WHERE orderID = ?";
        db.query(sql, [id], callback)
    }
}

module.exports = Order;