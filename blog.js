const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const authenticationController = require('./controllers/authenticationcontroller');
const adminPageController = require('./controllers/adminpagecontroller');
const postController = require('./controllers/postcontroller');
const LoginService = require('./services/login-service');
const SessionService = require('./services/session-service');

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const hbshelpers = require("handlebars-helpers");
// const multihelpers = hbshelpers();
app.engine('handlebars', handlebars({
    // helpers: multihelpers,
    // extname: 'handlebars',
    // defaultView: 'default',
    // layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));



app.get('/', postController.getPosts);

app.get('/login', authenticationController.getLogin);
app.post('/login', authenticationController.postLogin);
app.get('/logout', authenticationController.getLogout);

app.get('/admin', adminPageController.renderAdminPage);


// // NE LEGYENEK LEBEGŐ FUNCTIONÖK--> KISZERVEZEME GY CALSSBA  ASERVICESBE 
// //function authenticate(username, password) {
// //     console.log(username, password,users)
// //     users.find(usr => usr.username == username && usr.password == password)
// // }



// app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/login', (req, res) => {
//     const loginService = new LoginService();
//     const sessionService = new SessionService();
//     //1. user adatok ellenőrzése
//     const user = loginService.getAuthenticatedUser(req.body.username, req.body.password);
//     if (!user) {
//         res.send('User not found'); return
//     }
//     else res.send('User found');

//     //2. user session létrehozása ha az adatok validak voltak

//     const session = sessionService.registerSession(user);
//     console.log(session)
//     res.cookie('sessid', session.id);
//     //3. átirányítás
//     res.redirect('/admin')
// });

// // app.get('/admin', authMiddleware, (req, res) => {
// //     res.send('hello admin')
// // })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));