import app from './app.js'// => importando a app.js para dentro de server.js//

const port = 3000 // definção de porta logica,//


      app.listen(port, () => {
      console.log(`Servidor rodando na http://localhost:3000 ${port}`)
    })

      

/*CREATE TABLE `bdcopa`.`selecoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `selecao` VARCHAR(20) NOT NULL,
  `grupo` CHAR(1) NOT NULL,
  PRIMARY KEY (`id`));  */

