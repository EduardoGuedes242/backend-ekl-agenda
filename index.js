const express = require('express');
const usuarioRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/usuarios', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
