// Root entry point for Google Cloud Build
// This file starts the backend server

console.log('🚀 Starting Blockchain Multimedia Auth System...');
console.log('📋 Environment:', process.env.NODE_ENV || 'development');
console.log('🔌 Port:', process.env.PORT || 5000);

// Load environment variables
try {
  require('dotenv').config();
  console.log('✅ Environment variables loaded');
} catch (error) {
  console.log('⚠️  dotenv not available, using system environment variables');
}

// Start the backend server
try {
  console.log('🔧 Starting backend server...');
  require('./backend/src/index.js');
  console.log('✅ Backend server started successfully');
} catch (error) {
  console.error('❌ Failed to start backend server:', error);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}
