// backend/src/app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const startCronJobs = require('./utils/cronJobs');

const app = express();

// ✅ FIXED: CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://lms-frontend-johsta.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman) or from whitelisted domains
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('❌ CORS Not Allowed From: ' + origin));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ⬇️ All routes
app.use('/api/auth',        require('./routes/authRoutes'));
app.use('/api/users',       require('./routes/userRoutes'));
app.use('/api/loans',       require('./routes/loanRoutes'));
app.use('/api/branches',    require('./routes/branchRoutes'));
app.use('/api/borrowers',   require('./routes/borrowerRoutes'));
app.use('/api/payments',    require('./routes/paymentRoutes'));
app.use('/api/dashboard',   require('./routes/dashboardRoutes'));
app.use('/api/defaulters',  require('./routes/defaulterRoutes'));
app.use('/api/export',      require('./routes/exportRoutes'));

// 🔁 Cron Jobs
startCronJobs();

// ✅ API Health Check
app.get('/', (req, res) => {
  res.send('🟢 Loan Management API is running');
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
