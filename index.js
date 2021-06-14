const express = require('express');
const PORT = 9000;
const app=express();

app.listen(9000, () =>{
    console.log("Server Started")
});


app.get("/checkDocker", (req,res) =>{
    return res.json({"PORT":PORT});
});



/*
docker build -t node-docker .

docker run -it -p 9000:3000 node-docker

docker run -d -p 9000:3000 node-docker

docker ps
*/