const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Datos desde el servidor', timestamp: new Date() });
});

app.listen(port, () => {
    console.log(`Servidor Node.js en http://localhost:${port}`);
})