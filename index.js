const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv= require('dotenv');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',require('./routes/routes'))
app.get('/', (req, res) => res.send("Paymate will be available soon"));

app.listen(port, () => {
    console.log(`bKash payment server is available on port ${port}`);
});
