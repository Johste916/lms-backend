// backend/src/app.js
require('dotenv').config();       // 1️⃣ Load .env
const express       = require('express');
const cors          = require('cors');
const startCronJobs = require('./utils/cronJobs');

const app = express();

// ─── Middleware ─────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Route Modules ───────────────────────────────────────
const authRoutes      = require('./routes/authRoutes');
const userRoutes      = require('./routes/userRoutes');
const loanRoutes      = require('./routes/loanRoutes');
const branchRoutes    = require('./routes/branchRoutes');
const borrowerRoutes  = require('./routes/borrowerRoutes');
const paymentRoutes   = require('./routes/paymentRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const defaulterRoutes = require('./routes/defaulterRoutes');
const exportRoutes    = require('./routes/exportRoutes');  // ✅ Only here once!

// ─── Public / Auth ───────────────────────────────────────
app.use('/api/auth', authRoutes);

// ─── Protected Resources ─────────────────────────────────
app.use('/api/users',      userRoutes);
app.use('/api/loans',      loanRoutes);
app.use('/api/branches',   branchRoutes);
app.use('/api/borrowers',  borrowerRoutes);
app.use('/api/payments',   paymentRoutes);
app.use('/api/dashboard',  dashboardRoutes);
app.use('/api/defaulters', defaulterRoutes);
app.use('/api/export',     exportRoutes);  // ✅ No need for "/export" outside "api"

// ─── Health Check ────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('🟢 Loan Management API is running');
});

// ─── Start Cron Jobs ─────────────────────────────────────
startCronJobs();

// ─── Launch Server ───────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
