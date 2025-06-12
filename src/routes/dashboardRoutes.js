// ─── backend/src/routes/dashboardRoutes.js ────────────────────────────

const express             = require('express');
const router              = express.Router();
const authenticateToken   = require('../middleware/authMiddleware');
const authorize           = require('../middleware/roleMiddleware');
const dashboardController = require('../controllers/dashboardController');

// GET  /api/dashboard/summary
router.get(
  '/summary',
  authenticateToken,
  authorize(),                // any logged-in user
  dashboardController.getDashboardSummary
);

// GET  /api/dashboard/defaulters
router.get(
  '/defaulters',
  authenticateToken,
  authorize(),
  dashboardController.getDefaulters
);

module.exports = router;
