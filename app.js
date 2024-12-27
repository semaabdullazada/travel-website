const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', async (req, res) => {
    let data = JSON.stringify({ "q": "apple inc" });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://google.serper.dev/search',
        headers: {
            'X-API-KEY': 'c678c26b73a9e85187397d1b167de053f3034d62',
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Məlumatları əldə edərkən səhv baş verdi.');
    }
});

app.listen(port, () => {
    console.log(`API server is running at http://localhost:${port}`);
});

