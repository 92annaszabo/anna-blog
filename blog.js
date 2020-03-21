const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;


const authenticationController = require('./controllers/authenticationController');
const adminPageController = require('./controllers/adminPageController');
const postController = require('./controllers/postController');
const authenticationService = require('./middlewares/authenticationService');

authenticationController.sessions = []
app.set('view engine', 'handlebars');

app.use(cookieParser())
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



app.use('/admin', authenticationService.authMiddleware);
app.use('/post', authenticationService.authMiddleware);
app.get('/', postController.getPosts);

app.get('/login', authenticationController.getLogin);
app.post('/login', authenticationController.postLogin);
app.get('/logout', authenticationService.authMiddleware, authenticationController.getLogout);

app.get('/admin', adminPageController.renderAdminPage);

app.get('/post', postController.getNewPost);
app.post('/post', postController.postNewPost);



// // app.get('/admin', authMiddleware, (req, res) => {
// //     res.send('hello admin')
// // })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));