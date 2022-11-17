let options = {
    method:'DELETE'
    
};

export default async function deleteLocation(data) {
    const url = 'http://localhost:9999/delete/location/' + data.id;
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        return error;
    }
}