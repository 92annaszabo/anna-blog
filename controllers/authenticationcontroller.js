const admin = {
    username : 'admin',
    password : 'admin'
}

module.exports = {
    getLogin(req,res) { // /:name változónév url-ben változó paraméterként megadhatom: debuggerban a paramsban és a path-ban meg fogom találni az url-ben beadott értéket
        const error = req.query.error;
        if(error) {
            const errorMessage = 'Error: invalid credentials'
            res.render('login', {
                errorMessage: errorMessage
            });
        }
        else {
            res.render('login')
        }
        
    },

    postLogin(req,res) {
        const userdata = req.body;
        if(userdata.username == admin.username && userdata.password == admin.password){
            res.redirect('admin')
        }
        else {
            res.redirect('login?error=credentials')
        }
    },

    getLogout(req,res){
        res.redirect('login');
    }
}