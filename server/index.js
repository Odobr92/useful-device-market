require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 5000;
const model = require('./models/models');
const app = express();
const cors = require('cors');
const router = require('./routes/index');
const errorMiddelware = require('./middleware/ErrorHandlingMiddleware');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorMiddelware); //Используем в конце

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    }
    catch (e){
        console.log(e.message)
    }
}

start();