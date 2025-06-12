// models/loan.js
module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define('Loan', {
      borrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      branchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      principalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      interestMethod: {
        type: DataTypes.ENUM('flat', 'reducing'),
        allowNull: false,
      },
      durationMonths: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    });
  
    Loan.associate = (models) => {
      Loan.belongsTo(models.Borrower, { foreignKey: 'borrowerId' });
      Loan.belongsTo(models.Branch, { foreignKey: 'branchId' });
      Loan.hasMany(models.LoanRepayment, { foreignKey: 'loanId' });
      Loan.hasMany(models.LoanPayment, { foreignKey: 'loanId' });
    };
  
    return Loan;
  };