

// On récupère l'ID de l'URL
let urlSearch = new URLSearchParams(window.location.search);
console.log(urlSearch);
let idCamera = urlSearch.get('id');
console.log(idCamera);

// On récupère les données de l'API
const getCameras = async function () {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);
            let choosenCamera = cameras[1]._id;
            console.log(choosenCamera)
// POUR L'OBJET CAMERA AYANT L'ID CORRESPONDANT
            // On cré notre page
            // let divParentParent = document.createElement("div");
            // const mainProduct = document.getElementById("main-product");
            // mainProduct.appendChild(divParentParent);
            // divParentParent.classList.add("row-cols-1", "row-cols-md-4", "row-cols-lg-5", "d-flex", "flex-wrap", "justify-content-between", "align-items-between");

            // let divParent = document.createElement("div");
            // divParentParent.appendChild(divParent);
            // divParent.classList.add("card", "col", "m-3", "pt-3");

            // let imageCamera = document.createElement("img");
            // divParent.appendChild(imageCamera);
            // imageCamera.classList.add("card-image-top", "photo", "img-fluid");
            // imageCamera.src = cameras[i].imageUrl;

        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}
getCameras();
// // ALGORITHME :
// // QUAND il y a un click sur un des boutons, 
// // AJOUT de la classe active sur l'article sélectionné

// // Récupérer les éléments un par un dans l'API
// // par paramètre sur l'URL (query.string)


// //Ajout de toutes les caméras
// function productPageCreation (){

//     // Creation de la div parente parente row
//             let divParentParent = document.createElement("div");
//             const mainProduct = document.getElementById("main-product");
//             mainProduct.appendChild(divParentParent);
//             divParentParent.classList.add("row-cols-1", "row-cols-md-4","row-cols-lg-5","d-flex","flex-wrap","justify-content-between","align-items-between");

//     for (let i = 0; i < cameras.length; i++){

//     // Création de la div parente
//     // Ajout des classes 

//         let divParent = document.createElement("div");
//         divParentParent.appendChild(divParent);
//         divParent.classList.add("card","col","m-3","pt-3");


//     // Création des élements images et div avec la classe card body, enfants de la divParent 
//     // Ajout des classes
//         let imageCamera = document.createElement("img");
//         divParent.appendChild(imageCamera);
//         imageCamera.classList.add("card-image-top","photo","img-fluid");
//         imageCamera.src = cameras[i].imageUrl;

//         let divCardBody = document.createElement("div");
//         divParent.appendChild(divCardBody);
//         divCardBody.classList.add("card-body", "text-center", "px-0", "d-flex","flex-column","justify-content-between");


//     // Création des éléments enfants de la div CardBody
//     // Ajout des classes
//     // Ajout du texte
//         let titleCamera = document.createElement("h3");
//         divCardBody.appendChild(titleCamera);
//         titleCamera.classList.add("card-title","title");
//         titleCamera.textContent = cameras[i].name;

//         let descriptionCamera = document.createElement("p");
//         divCardBody.appendChild(descriptionCamera);
//         descriptionCamera.classList.add("description","text-justify");
//         descriptionCamera.textContent = cameras[i].description;


//     // Création d'une div englobant prix et bouton
//         let divLinkPrice = document.createElement("div");
//         divCardBody.appendChild(divLinkPrice);
//         divLinkPrice.classList.add("d-flex", "flex-row","justify-content-between");

//     // Création du prix
//         let priceCamera = document.createElement("p");
//         divLinkPrice.appendChild(priceCamera);
//         priceCamera.classList.add("price", "my-2", "font-weight-bold");
//         priceCamera.textContent = cameras[i].price + ' $';


//         // Lien vers la page produit
//         let linkProduct = document.createElement("a");
//         divLinkPrice.appendChild(linkProduct);
//         linkProduct.href="product.html";
//             // Création du bouton 
//             let buttonBuy = document.createElement("button");
//             linkProduct.appendChild(buttonBuy);
//             buttonBuy.classList.add("btn", "btn-warning", "block-right");
//             // Ajout texte au bouton
//             buttonBuy.textContent = "Voir";
//     }}