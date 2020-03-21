const userDAO = require('../dao/userDao');



module.exports = class LoginService {
    async getAuthenticatedUser(username, password) {
        const user = await userDAO.getUser(username,password)
        console.log(`user is ${user}`) // ez itt már undefined
        return user
        // return new Promise((resolve, reject)=> {
        //     const user = userDAO.getUser(username,password);
        //     if(user) resolve(user)
        //     else reject()
        // }).catch()

        // .then((data) => {
        //     console.log(`this is the data from loginservice ${data}`);
        //     return data
        // })
        // console.log(username, password,users)
        // return users.find(usr => usr.username == username && usr.password == password)
    }
}