const express = require('express');
const router = express.Router();
const sinhVienController = require('../controllers/sinhVienController');

router.get('/', sinhVienController.getAll);
router.get('/:id', sinhVienController.getById);
router.post('/', sinhVienController.create);
router.put('/:id', sinhVienController.update);
router.delete('/:id', sinhVienController.remove);

module.exports = router;
