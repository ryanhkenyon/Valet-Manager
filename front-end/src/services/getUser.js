let options = {
  method: "GET",
};

export default function getUser(data) {
  if (typeof data === "string") {
    const url = "http://localhost:9999/api/user/get/" + data;
    return fetch(url, options)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  } else {
    const url = "http://localhost:9999/api/user/get/" + data.creatorId;
    return fetch(url, options)
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}