'use strict';

/** @Middleware
 * This function is being used to Add some security for Express App
 */

let XSSProtection = (req, res, next) => {
    //adding response headers
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Frame-Options', 'deny');
    res.header('X-Content-Type-Options', 'nosniff');
    next();

}

export default XSSProtection;