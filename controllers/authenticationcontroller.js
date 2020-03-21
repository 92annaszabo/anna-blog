const LoginService = require('../services/login-service');
const SessionService = require('../services/session-service');
const AUTH_COOKIE = 'authcookie'

module.exports = {
    getLogin(req,res) { // /:name változónév url-ben változó paraméterként megadhatom: debuggerban a paramsban és a path-ban meg fogom találni az url-ben beadott értéket
        const error = req.query.error;
        const loggedout = req.query.loggedout;
        if(error) {
            const errorMessage = 'Error: invalid credentials'
            res.render('login', {
                errorMessage: errorMessage
            });
        }
        if(loggedout){
            const loggedOutMessage = 'Logout successful'
            res.render('login', {
                loggedOutMessage: loggedOutMessage
            });
        }
        else {
            res.render('login');
        }
        
    },

    async postLogin(req,res) {
        const userdata = req.body;
        const loginService = new LoginService(); //megnézi, hogy létezik-e a user
        const sessionService = new SessionService(); // regisztrál a userhez egy sessiont (user-sessionid)

        const user = await loginService.getAuthenticatedUser(userdata.username, userdata.password)
        
        if(user){
            const session = sessionService.registerSession(user);
            res.cookie('authcookie', session.id);
            res.redirect('admin');
        }
        else {
            res.redirect('login?error=credentials');
        }
                
    },

    getLogout(req,res){
        const sessionService = new SessionService();
        res.clearCookie(AUTH_COOKIE) 
        sessionService.deleteSession(req.session.id) 
        res.redirect('login?loggedout=true');
    }
}