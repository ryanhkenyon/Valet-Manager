let options = {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'  
    }
};

export default async function getValetLocations(data) {
    const url = 'http://localhost:9999/post/valets/locations/' + data.valetId;
    options.body = data;
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