const url = 'http://localhost:9999/get/location';
let options = {
    method:'GET',

};

export default async function getLocation(data) {
    return fetch(url,options)
    .then(response => {
        return response.json()
    })
    .catch(error=>{
        console.log(error)
        return error
    })
}