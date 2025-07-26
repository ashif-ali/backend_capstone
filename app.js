import dotenv from 'dotenv';
import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send('Hello, World from Express!');
})



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000}`);
});