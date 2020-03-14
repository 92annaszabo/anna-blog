let sessionCount = 0
let sessions= []
module.exports = class SessionService {
    
    registerSession(user){
        sessionCount++;
        sessions.push({id: sessionCount, user})
    }
}