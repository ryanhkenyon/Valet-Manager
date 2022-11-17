const url = 'http://localhost:9999/post/register';
let options = {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    }

};

export default async function userRegister(data) {
    options.body = JSON.stringify(data);
    return fetch(url,options)
    .then(response => {
        return response.json() 
    }).catch(error=>{
        console.log(error)
        return error;
    })
}