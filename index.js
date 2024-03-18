//1 import json-server
const jsonServer= require('json-server')

//2 create a server using json server
const mediaPlayerServer = jsonServer.create()

//3 setup path for the server
const router = jsonServer.router("db.json")

//4 return middleware used by json server
const middleware= jsonServer.defaults() //json->js conversion

//5 setup port number
const port= 4000 || process.env.port

//6 use middleware and router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//7 to listen server server for resolving requests from client
mediaPlayerServer.listen(port,()=>{
    console.log('Listening to port'+port);
})