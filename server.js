const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Pre-book now.html'));
});


app.post('/prebook', (req, res) => {
    try {
        const formData = req.body;
        console.log('Form Data:', formData);
        
        res.send('Thank you for pre-booking!');
    } catch (error) {
        res.status(500).send('Server error occurred: ' + error.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
