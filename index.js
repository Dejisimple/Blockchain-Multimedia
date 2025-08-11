// Root entry point for Google Cloud Build
// This file starts the backend server

// Load environment variables
require('dotenv').config();

// Start the backend server
require('./backend/src/index.js');
