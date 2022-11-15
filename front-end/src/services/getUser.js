
let options = {
    method:"GET",
   
}

export default function getUser(data){
    console.log(data);
    const url = "http://localhost:9999/user/"+data.id;
    console.log(url);
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