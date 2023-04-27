const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

connection.connect();

// Função para criar a tabela people caso não exista
function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    )
  `;

  connection.query(sql, (error) => {
    if (error) throw error;
    console.log('Tabela people criada ou já existente');
  });
}

// Função para inserir nomes de exemplo no banco de dados
function seedDatabase() {
  const names = ['Alquipo', 'Analia', 'Arthur', 'Quipinho'];

  names.forEach((name) => {
    const sql = `INSERT IGNORE INTO people(name) VALUES ('${name}')`;
    connection.query(sql, (error) => {
      if (error) throw error;
      console.log(`Usuário ${name} adicionado`);

    });
  });
}

app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (error, results) => {
    if (error) throw error;

    let names = '<ul>';
    results.forEach(row => {
      names += `<li>${row.name}</li>`;
    });
    names += '</ul>';

    res.send(`<h1>Full Cycle Rocks!</h1>${names}`);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
  createTable(); // Chama a função createTable ao iniciar a aplicação
  seedDatabase(); // Chama a função seedDatabase ao iniciar a aplicação
});
