// backend/src/controllers/dashboardController.js
const { Loan, User, LoanRepayment } = require('../../models');
const { Op } = require('sequelize');
const moment = require('moment');

exports.getDashboardSummary = async (req, res) => {
  try {
    const totalLoans = await Loan.count();
    const totalAmount = await Loan.sum('amount');
    const totalDefaulters = await LoanRepayment.count({
      where: {
        status: 'overdue'
      }
    });

    res.json({
      totalLoans,
      totalAmount,
      totalDefaulters
    });
  } catch (err) {
    console.error('Dashboard summary error:', err);
    res.status(500).json({ error: 'Failed to fetch dashboard summary.' });
  }
};

exports.getDefaulters = async (req, res) => {
  try {
    const defaulters = await LoanRepayment.findAll({
      where: {
        status: 'overdue'
      },
      include: [
        {
          model: Loan,
          as: 'loan',
          include: [{ model: User, as: 'user' }]
        }
      ],
      order: [['dueDate', 'ASC']]
    });

    const formatted = defaulters.map(d => ({
      id: d.id,
      loanId: d.loan.id,
      borrowerName: d.loan.user.name,
      dueDate: d.dueDate,
      status: d.status
    }));

    res.json(formatted);
  } catch (err) {
    console.error('Get defaulters error:', err);
    res.status(500).json({ error: 'Failed to fetch defaulters.' });
  }
};
