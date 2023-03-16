const express = require('express');
const app = express();

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
    res.send(`Hello ${name}, your email address is ${email}`);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
