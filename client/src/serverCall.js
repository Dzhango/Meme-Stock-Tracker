export default async function serverCall(method, headers) {
    const url = "http://localhost:5000/"
    // console.log(JSON.stringify(params));
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
    })
    const data = await response.json();
    return data;
}


