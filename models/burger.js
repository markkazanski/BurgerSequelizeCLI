module.exports = function(){
    var Burger = sequelize.define("burgers", { //burgers is TABLE name
        // Name
        burger_name:{ 
          type: Sequelize.STRING
        },
        // is it eaten
        devoured: { 
          type: Sequelize.BOOLEAN,
          defaultValue: 0
        }
      });
      return Burger;
}