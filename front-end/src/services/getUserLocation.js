let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'  
    }
    
}

export default function getUserLocation(data){
    const url = "http://localhost:9999/get/location/" + data.id;
    options.body = JSON.stringify(data)
    return fetch(url,options)
            .then(response => {
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}