const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const LoginService = require('./services/login-service');
const SessionService = require('./services/session-service');
let title = "Anna's blog"
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

const postList = [ 
    {
        author : 'admin',
        date: '2020.03.14',
        title: 'How to post',
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
        author : 'user',
        date: '2020.02.14',
        title: 'How to post',
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
        author : 'user3',
        date: '2020.01.14',
        title: 'How to post',
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
];

app.get('/', (req,res) => {
    res.render('postlist', {
        title: title,
        posts: postList
    });
});

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