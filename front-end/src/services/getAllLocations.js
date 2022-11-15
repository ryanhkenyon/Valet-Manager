const url = 'http://localhost:9999/get/location';
let options = {
    method:'GET'

};

export default async function getAllLocations() {
    return fetch(url,options)
            .then(response => {
                //console.log(response)
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });
}