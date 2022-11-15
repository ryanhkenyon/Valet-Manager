const url = 'http://localhost:9999/get/location';
let options = {
    method:'GET',
    headers: {
        'Content-Type': 'application/json'
    }

};

export default async function userRegister(data) {
    options.body = JSON.stringify(data);
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        return error;
    }
}