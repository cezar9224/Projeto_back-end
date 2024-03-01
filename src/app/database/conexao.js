import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'euamojesus',
    database: 'bdcopa'
})

conexao.connect()

/**
 * 
 * @param {string} sql 
 * @param {string=id | [selecao, id]} valores 
 * @param {string} mensagemReject 
 * @returns 
 */

export const consulta = (sql, valores ="", mensagemReject) => {
        return new Promise((resolve, reject )=> {
        conexao.query(sql, valores, (erro,resultado )=>{
        if (erro) return reject ('Não foi Possivel Cadastrar')

        const row = JSON.parse(JSON.stringify(resultado))
        return resolve (row)
     })  
  })   
}

export default conexao