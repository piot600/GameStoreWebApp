const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/game', gameController.getAllGames);
router.get('/game/:id', gameController.getGameById);
router.post('/gameadd', gameController.addGame);
router.put('/gameupdate/:id', gameController.updateGame);
router.delete('/game/delete/:id', gameController.deleteGame);

module.exports = router;
