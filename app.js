const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
// middleware
// serving the static files 
// front end
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log("listening on the port: "+PORT);
});
