require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// TODO: Add routes for /api/auth/request-otp, /api/auth/verify-otp, /api/auth/user, /api/auth/logout

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Tamyla Auth Service running on port ${PORT}`);
});
