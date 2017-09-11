module.exports = function(sequelize, DataTypes) {
  var hotdog = sequelize.define("hotdog", {
      hotdog_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false
      }
  },{
    timestamps: false
  });
  return hotdog;
}
