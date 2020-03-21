const AUTH_COOKIE = 'authcookie';
const SessionService = require('../services/session-service');
const sessionService = new SessionService();

module.exports = {
    authMiddleware(req, res, next) {
        const authCookie = req.cookies[AUTH_COOKIE] // (1)
        console.log(`Authentication cookie: ${authCookie}`)
    
        const session = sessionService.checkAuthcookie(authCookie);
        
        if (!session) {
            res.status(401).send('Login required')
            return
        }
        
        req.session = session
        next();
    }
}