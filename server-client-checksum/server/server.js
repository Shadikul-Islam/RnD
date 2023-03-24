const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const app = express();

const PORT = process.argv[2] || 3000;

app.get('/', (req, res) => {
  const data = crypto.randomBytes(1024); // Generate 1KB random data
  const filename = `file_${Date.now()}.txt`;
  const filepath = `/serverdata/${filename}`;

  // Write the data to a file in the server volume
  fs.writeFile(filepath, data, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal server error');
    }

    // Send the file to the client
    const stream = fs.createReadStream(filepath);
    const hash = crypto.createHash('md5');

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      const checksum = hash.digest('hex');
      res.set({
        'Content-Disposition': `attachment; filename=${filename}`,
        'Checksum': checksum,
      });
      stream.pipe(res);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
