// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('admin', 'staff'),
        defaultValue: 'staff',
      },
      branchId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
  
    User.associate = (models) => {
      User.belongsTo(models.Branch, { foreignKey: 'branchId' });
    };
  
    return User;
  };