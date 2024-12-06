// console.log('ami backend theke ashchi');

const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const userRouter = require("./controllers/userRouter")
const app = express()

// middleware 
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', userRouter)
// app.get('/', function (req, res) {

  //  res.send('Hello World')
  // res.json({
  //   message: 'Hello People'
  // })
// })
// app.get er bhitore route er duita part thake. ekta hocche initial part ('/'), arekta hocche controller part function(req, res)
// app.get hocche ami front end theke data gulake get korte parbo 
// function e duita parameter boshe. req(request) ar res(response). 
// req hocche front end theke jei data ta backend e ashe oita 
// ar jokhon backend theke jei data ta  front end e pathabo tokhon res.json korbo
// jokhon res.send korbo tokhon string send korbo. 
// jokhon res.json korbo tokhon object er bhitore property pass korbo 
// toh front end er data back end e nite hoile cors error dibe. jar jonno duita option ase. ekta hocche package use kora. arekta hocche.
// Cors er kaaj hocche front end ar backend er connection allow kore 
// arekta jinish hocche backend shudhu json bujhe kintu html tags (h1,p) bujhe na.
// express.urlencoded hocche securityr move. ulta palta spam ba hack korte parbe na easily
app.listen(8000, ()=>{
    // console.log(chalk.blue('server is running on port 8000'));
    console.log(chalk.bgGreen('server is running on port 8000'));
})
// app.listen hocche amader bujhacche kon port e kaaj korbe. ekhon react er shathe kaj korle react er by default. Kintu gatsby er khetre tokhon abar 3000 er port e run korte hoy
// js er jekono inbuilt function jante chaile ctrl + space dite hoy. jemon Array.push er moto 
// environment variables hocche ekta secret file. jemon chatting application er shathe fb jemne connect korsi. oi secret fie onek important. ar emon secret jaygay rakbo jate ami baade keo access pabe na. Eta kaokei deya jay na. emon env file create korbo.

// method jegula use korbo 
//get
//set(update)
//delete
//post


