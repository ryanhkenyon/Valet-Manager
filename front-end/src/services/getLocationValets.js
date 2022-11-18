let options = {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'  
    }
};

export default async function getLocationValets(data) {
    const url = 'http://localhost:9999/post/location/valets/' + data.locationId;
    options.body = JSON.stringify(data)
    console.log(data)
    return fetch(url,options)
            .then(response => {
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });
}