// const express = require("express");
// const app = express1();

// app.use(express.json());//Middleware for

// app.get("/", (req, res) => {
// res.send("Hello World");
// });

// app.listen(3000, () => {
// console.log("Server is running on port 3000");
// });


const express=require('express');
const server = express();

server.use(express.json());

let quotes=[
    {  id:1,text:'It work on my machine'},
    {  id:2,text:'I will start learning react tomorrow'}
];

server.get('/quotes',(request,response)=>{
    response.json(quotes);
})

server.post('/quotes', (req, res)=>{
    if(!req?.body?.text){
        res.status(400).send();
    }

})


const db=require('better-sqlite3')('data.db');
db.prepare(
    `CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
        )`
    ).run();

    server.get('/qoutes',(request,reponse)=>{
        const all =db.prepare(SELECT * FROM qoutes).all();
        response.json(all);
    });

    server.post('/quotes',(request,response)=>{
        const{text}=request.body;
        const info =db.prepare(INSERT INTO quotes (text) VALUES(?)).run(text);
        response.status(201).json({id: info.lastInsertRowId,text});
    });



server.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});
