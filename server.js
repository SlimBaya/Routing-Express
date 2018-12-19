const express = require('express')
const app = express()
var path    = require("path");

app.use(time = (req , res , next) => {
    let timeRequest = new Date().getHours()
    console.log(timeRequest)
    if (timeRequest < 8 || timeRequest > 16)
    res.send ("Our office is not open now");
    
    next()
},express.static(__dirname+'/public'))


app.listen(3000, (err) => {
    if (err) console.log("server not ok")
    else console.log("server ok")
})