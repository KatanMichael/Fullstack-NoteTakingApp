import fetch from 'unfetch'

class Client
{

    getAllUsers()
    {
        return fetch('http://localhost:8080/api/user');
    }

    chackEmailAndPassword(email,password)
    {
        let requset = 
        {
            email,
            password
        }

        return fetch("http://localhost:8080/api/user/login", 
        {
            headers : {
                'Content-Type': 'application/json'
                
            },
            method : 'POST',
            body : JSON.stringify(requset)
        })
    }

    getNotesByUserId(userId)
    {
        return fetch('http://localhost:8080/api/notes/?userId='+userId);
    }

}



export default Client