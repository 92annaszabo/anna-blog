const SessionService = require('../services/session-service');
const sessionService = new SessionService();
const { db_get, db_getAll, db_run } = require('../services/db-service');

module.exports = {
    getPosts(req,res){
        const posts = db_getAll("select * from posts");
           
        res.render('postlist', {
            title: title,
            posts: postList
        });
    },
    getNewPost(req, res){
        const error = req.query.error;
        if(error){
            res.render('newpostform', {
                errorMessage: 'Server validation: please write content'
            });
        }
        else {
            res.render('newpostform'), {
                title: 'New Post',
            }
        }
    },

    postNewPost(req, res){
        const user = sessionService.findUser(req.cookies.authcookie)
        const {postTitle, postContent} = req.body;
        if(!postTitle || !postContent){
            res.redirect('/post?error=noContent')

        }
        else {
            today = new Date
            postList[postList.length] = {
                author : user,
                date: today.toLocaleDateString(),
                title: postTitle,
                post: postContent
            }
            res.redirect('/')
        }
       
    }
}

const title = "Anna's blog"
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