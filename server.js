const http = require('http');
const app = require('./app');

app.listen(3000, () => {
    console.log('Listening on port: 3000');
});




// /*const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port)*/