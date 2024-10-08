// lib/cors.js
export const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (use specific domains in production)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
};
