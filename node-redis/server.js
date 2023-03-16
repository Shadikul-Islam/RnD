const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Sample Form</h1>
                <form method="POST" action="/submit">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br><br>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    // store the data in Redis
    redisClient.hmset('users', [name, email], (err, reply) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while storing the data');
        } else {
            console.log(`Data stored successfully: ${name} - ${email}`);
            res.send('Data stored successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
