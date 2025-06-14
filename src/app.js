// backend/src/app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const startCronJobs = require('./utils/cronJobs');

const app = express();

// ─────────────────────────────────────────────────────────────
// ✅ CORS Configuration (Allow local dev + Render frontend)
const allowedOrigins = [
  'http://localhost:5173',                              // Local dev
  'https://lms-frontend-johsta.onrender.com'            // Your deployed frontend URL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin'));
    }
  },
  credentials: true
}));

// ─────────────────────────────────────────────────────────────
// Middleware
app.use(express.json());

// ─────────────────────────────────────────────────────────────
// Routes
app.use('/api/auth',        require('./routes/authRoutes'));
app.use('/api/users',       require('./routes/userRoutes'));
app.use('/api/loans',       require('./routes/loanRoutes'));
app.use('/api/branches',    require('./routes/branchRoutes'));
app.use('/api/borrowers',   require('./routes/borrowerRoutes'));
app.use('/api/payments',    require('./routes/paymentRoutes'));
app.use('/api/dashboard',   require('./routes/dashboardRoutes'));
app.use('/api/defaulters',  require('./routes/defaulterRoutes'));
app.use('/api/export',      require('./routes/exportRoutes'));

// ─────────────────────────────────────────────────────────────
// Health check endpoint
app.get('/', (req, res) => {
  res.send('🟢 Loan Management API is running');
});

// ─────────────────────────────────────────────────────────────
// Start cron jobs
startCronJobs();

// ─────────────────────────────────────────────────────────────
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
