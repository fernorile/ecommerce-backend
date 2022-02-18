var express = require (`express`);
var app = express();

app.listen(3000, () => {console.log(`servidor esta corriendo`);
});

app.get(`/hello`, function(req, res){
    res.send(`hello world`);
});



