// REQUETE GET

const getCameras = async function () {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);
        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}

// REQUETE POST 
function post(url, jsonBody) {
    const Promise = new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type","application/json");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 201) {
                    resolve(JSON.parse(this.responseText));                  
                }else {
                    reject(request.status);
                }
            }
        }
    }
}