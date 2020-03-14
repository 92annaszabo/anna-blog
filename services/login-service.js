const users = [
    {
        username: 'admin',
        password: 'admin'
    }
]

module.exports = class LoginService {
    getAuthenticatedUser(username, password) {
        console.log(username, password,users)
        return users.find(usr => usr.username == username && usr.password == password)
    }
}