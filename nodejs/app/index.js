const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
});

const app = express();

app.get('/', async (req, res) => {
    const name = req.query.name || 'Pedro';
    return connection.query(`INSERT INTO people (name) VALUES ('${name}')`, () => {
        return connection.query(`SELECT name FROM people`, (_, rows) => {
            if (_) throw _;
            const names = rows.map(({ name }) => name);
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                ${names.join(',\n')}
            `);
        });
    });
});

const port = 3000;
app.listen(port, () => console.log(`Running on port ${port}...`));
