var express = require('express');
var app = express();


app.use(express.static(__dirname + "/views"))
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running ${port}`));