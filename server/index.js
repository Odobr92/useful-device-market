require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const sequelize = require('./db')
const PORT = process.env.PORT || 5000;
const model = require('./models/models');
const app = express();
const cors = require('cors');
const router = require('./routes/index');
const errorMiddelware = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
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