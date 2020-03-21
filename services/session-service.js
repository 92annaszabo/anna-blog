let sessionCount = 0
let sessions= []

module.exports = class SessionService {
    
    registerSession(user){
        
        sessionCount++;
        const session = {id:sessionCount, user}
        sessions.push(session);
        console.log(sessions)
        return session
    }

    checkAuthcookie(authCookie){
       
        return sessions.find(session => session.id == authCookie);
      
    }

    findUser(authCookie){
        let user
        sessions.forEach(session => {
            if (session.id == authCookie){ 
                user = session.user.username     
            }
        } );
        return user
    }


    deleteSession(id){
        const sessionToBeDeleted = sessions.find(session => session.id == id);
        delete sessions[sessionToBeDeleted];
    }
    
}