// backend/src/routes/exportRoutes.js

const express           = require('express');
const router            = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const exportCtrl        = require('../controllers/exportController');

// GET /api/export/:format/:range
// Examples:
//   GET /api/export/pdf/today
//   GET /api/export/excel/month
router.get(
  '/:format/:range',
  authenticateToken,
  exportCtrl.exportDefaulters
);

module.exports = router;
