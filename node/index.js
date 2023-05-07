const express = require('express')
const app = express()
const port = 3000 
const config = 
{
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(nome) values('Bruno')`
connection.query(sql)


app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (error, results) => {
      if (error) {
        console.error('Erro ao executar a query:', error);
        return;
      }
      // Renderiza a página HTML com o resultado da query
      res.send(`
        <html>
          <head>
            <title>Full cycle</title>
          </head>
          <body>
            <h1 style="text-align:center">Full Cycle Rocks!!</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  
                </tr>
              </thead>
              <tbody>
                ${results.map(row => `
                  <tr>
                    <td> ${row.id} - </td>
                    <td> ${row.nome}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `);
    });
  });
app.listen(port,()=>{
    console.log('rodando na porta' + port)
})
