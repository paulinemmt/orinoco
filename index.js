// REQUETES HTTP
//Envoie de la requête HTTP de type GET à l'API 
//Récupération des données au format JSON
// function getCamera(){
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState = XMLHttpRequest.DONE && this.status == 200){
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};
request.open("GET","http://localhost:3000/api/cameras");
request.send();
console.log(request);


//CREATION DES CARDS POUR AFFICHER LES DIFFERENTES CAMERAS
function cardCreation (){

// Création de la div parente
// Ajout des classes 
    let divParent = document.createElement("div");
    const main = document.getElementById("main");
    main.appendChild(divParent);
    divParent.classList.add("card","col","col-4-lg","m-3","pt-3");


// Création des élements images et div avec la classe card body, enfants de la divParent 
// Ajout des classes
    let imageCamera = document.createElement("img");
    divParent.appendChild(imageCamera);
    imageCamera.classList.add("card-image-top","photo");

    let divCardBody = document.createElement("div");
    divParent.appendChild(divCardBody);
    divCardBody.classList.add("card-body");


// Création des éléments enfants de la div CardBody
// Ajout des classes
    let titleCamera = document.createElement("h3");
    divCardBody.appendChild(titleCamera);
    titleCamera.classList.add("card-title","title");

    let descriptionCamera = document.createElement("p");
    divCardBody.appendChild(descriptionCamera);
    descriptionCamera.classList.add("description");

    let priceCamera = document.createElement("p");
    divCardBody.appendChild(priceCamera);
    priceCamera.classList.add("price");

    // Lien vers la page produit
    let linkProduct = document.createElement("a");
    divCardBody.appendChild(linkProduct);
        // Création du bouton 
        let buttonBuy = document.createElement("button");
        linkProduct.appendChild(buttonBuy);
        buttonBuy.classList.add("btn", "btn-warning");
        // Ajout texte au bouton
        buttonBuy.textContent = "Voir";
}


// Appel de la fonction
cardCreation();

// // BOUCLE CREER UNE CARD POUR CHAQUE I DU TABLEAU DE L API
// for (let i = 0, i < cameraArray.lenghts, )