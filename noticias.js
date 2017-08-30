var http = require('http');

// cria um servidor
/*http.createServer(function(req, res){

    res.end("<html><body>Portal de Notícias</body></html>");

}).listen(3000); //fala a porta que será escutada*/

var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de tecnologia</body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body>Notícia de Moda</body></html>");
    }
    else if(categoria == '/beleza'){
        res.end("<html><body>Notícia de Beleza</body></html>");
    }else{
        res.end("<html><body>Página Principal</body></html>");
    }


    res.end("<html><body>Portal de Notícias</body></html>");
});

server.listen(3000);