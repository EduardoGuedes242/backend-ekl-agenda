const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./src/routes/userRoutes');
const tenantRoutes = require('./src/routes/tenantRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const userCompanyRoutes = require('./src/routes/userCompanyRoutes');
const serviceRoutes = require('./src/routes/serviceRoutes');

const app = express();
const PORT = 3000;
const VERSION_API  = 'v1';

app.use(cors());
app.use(express.json());

app.use(`/${VERSION_API}/user`, usuarioRoutes);
app.use(`/${VERSION_API}/tenant`, tenantRoutes);
app.use(`/${VERSION_API}/company`, companyRoutes);
app.use(`/${VERSION_API}/user-company`, userCompanyRoutes);
app.use(`/${VERSION_API}/services`, serviceRoutes);

const listaRotas = [
    'user',
    'tenant',
    'company',
    'user-company',
    'services'
    ]

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    for (let index = 0; index < listaRotas.length; index++) {
        console.log(`possiveis rotas: http://localhost:${PORT}/${VERSION_API}/${listaRotas[index]}`);
    }
   
});
