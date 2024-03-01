import express from 'express' 
import router from './routes.js'
// importar o express para o meu script//l


const app = express() //instanciando o express => contrutor //
//const port = 3000 //=> definção de porta logica,//


app.use (express.json()) //Pra indicar o express le body no formato Json, caso esteja em formado. => deste tipo no insominia //
app.use (router)


//Rotas//

export default app // =>estou exportando app.js para fora e indo para o arquivo server.js

//codigo para esculta ativa, a porta, no caso a porta 3000// 
//app.listen(port, () => {
  //console.log(`Servidor rodando na http://localhost:3000 ${port}`)//

// Em seguida eu fiz a separação das rotas e servidor" => por isso criei um novo arquivo na raiz e separei chamado serer//
//CREATE SCHEMA `bdcopa` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;//
