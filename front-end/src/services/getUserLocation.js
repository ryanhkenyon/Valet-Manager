const url = "http://localhost:9999/get/location/user";
let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'  
    }
   
}

export default function getUserLocation(data){
    //console.log(data);
    options.body = JSON.stringify(data)
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