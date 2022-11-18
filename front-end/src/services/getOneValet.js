let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    
}

export default function getOneValet(data){
    console.log(data)
    const url = "http://localhost:9999/post/valet/getOne";
    options.body = data;
    console.log(options)
    return fetch(url,options)
            .then(response => {
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}