const express = require('express');
const router = express.Router();

// Placeholder logic until API integration
router.post('/', (req, res) => {
  const { email } = req.body;

  // Mock response
  if (email.includes('@example.com')) {
    res.json({
      breached: true,
      breaches: [
        { name: 'ExampleSite', year: 2021, info: 'Email, password' }
      ]
    });
  } else {
    res.json({ breached: false });
  }
});

module.exports = router;
