const burger = require("../models/burger.js");
const express = require("express");

const router = express();
const PORT = 3000;

router.get("/", function(result, request){
    request.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      //res.render("index", { burger_data: burgerData });
      console.log(burgerData);
      res.render("index", {burgers: burgerData} );
    });
  });

router.post("/burgers/create", function(req, res){
    burger.add( req.body.burger_name, function(response){
        res.redirect("/");
    });
});

router.put("/burgers/eat/:id", function(req, res){
    burger.eat( req.params.id, function(response){
        console.log(response);
        //res.json(response);
        res.sendStatus(200);
    });
});

router.listen(PORT);

module.exports = router;