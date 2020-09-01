// REQUETES HTTP
//Envoie de la requête HTTP de type GET à l'API 
//Récupération des données au format JSON
var request = new XMLHttpRequest();
console.log(request);
request.open("GET","http://localhost:3000/api/cameras");
request.responseType='json';
request.send();


//On récupère le tableau sous le nom d'une variable
request.onload = function() {
    var cameras = request.response;
    console.log(cameras);


//ALGORYTHME :
// POUR CHAQUE élément du tableau 
// ON CREE une card
// et ON REMPLI les champs avec ce qui correspond


//CREATION DES CARDS POUR AFFICHER LES DIFFERENTES CAMERAS
// CREATION D'UNE BOUCLE
for (let i = 0; i < cameras.length; i++){

    function cardCreation (cameras){

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
// Ajout du texte
    let titleCamera = document.createElement("h3");
    divCardBody.appendChild(titleCamera);
    titleCamera.classList.add("card-title","title");
    titleCamera.textContent = cameras[i].name;

    let descriptionCamera = document.createElement("p");
    divCardBody.appendChild(descriptionCamera);
    descriptionCamera.classList.add("description");
    descriptionCamera.textContent = cameras[i].description;

    let priceCamera = document.createElement("p");
    divCardBody.appendChild(priceCamera);
    priceCamera.classList.add("price");
    pricenCamera.textContent = cameras[i].price;

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
}
}

// Appel de la fonction
// cardCreation();

// // BOUCLE CREER UNE CARD POUR CHAQUE I DU TABLEAU DE L API
// for (let i = 0, i < cameraArray.lenghts, )}