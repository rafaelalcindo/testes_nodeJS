var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

    var connection = dbConnection();

    app.get('/noticias', function(req, res){  

        var select_noticias = "select * from noticias";
        connection.query(select_noticias, function(error, result){
            //res.send(result);
            res.render("noticias/noticias", {noticias: result});
        });        
        //res.render("noticias/noticias");
    });
};

