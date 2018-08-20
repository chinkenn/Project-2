module.exports = function(sequelize, DataTypes) {
    var Balance = sequelize.define("Balance", {
      user: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      is_paid: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      event: DataTypes.STRING
    });
    return Balance;
  };