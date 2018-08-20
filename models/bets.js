module.exports = function(sequelize, DataTypes) {
  var Bets = sequelize.define("Bets", {
    over_win: DataTypes.STRING,
    under_lose: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    event: DataTypes.STRING,
    end_date: DataTypes.DATEONLY,
    winner: DataTypes.STRING,
    is_paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Bets;
};
