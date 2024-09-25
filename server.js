const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;


// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve Pre-book Now.html when accessing the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Pre-book now.html'));
});

// Handle form submission
app.post('/prebook', (req, res) => {
    try {
        const formData = req.body;
        console.log('Form Data:', formData);
        // Processing code here
        res.send('Thank you for pre-booking!');
    } catch (error) {
        res.status(500).send('Server error occurred: ' + error.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
