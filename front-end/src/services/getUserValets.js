let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'  
    }
    
}

export default function getUserValets(data){
    console.log(data, 'cmon')
    const url = "http://localhost:9999/get/valet/" + data.id;
    console.log(data);
    options.body = JSON.stringify(data)
    return fetch(url,options)
            .then(response => {
                console.log(response)
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}