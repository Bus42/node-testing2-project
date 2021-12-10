require('dotenv').config();
const express = require('express');
const colors = require('colors');
const app = express();


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(colors.america(`*** Server started on port ${port} ***`));
});
