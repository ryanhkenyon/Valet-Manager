let options = {
    method:'DELETE'
    
};

export default async function deleteValet(data) {
    const url = 'http://localhost:9999/delete/valet/' + data.id;
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        return error;
    }
}