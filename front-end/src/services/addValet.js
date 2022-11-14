const url = 'http://localhost:9999/post/valet';
let options = {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    }

};

export default async function addValet(data) {
    options.body = JSON.stringify(data);
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        return error;
    }
}