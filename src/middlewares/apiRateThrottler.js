const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

// Rate limiting middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Request throttling middleware
const apiSpeedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 5, // allow 50 requests per windowMs, then start delaying responses
  delayMs: (delayAfter) => delayAfter * 10, // delay is calculated based on delayAfter
});

module.exports = {
  apiLimiter,
  apiSpeedLimiter,
};
