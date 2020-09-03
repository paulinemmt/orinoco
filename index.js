// REQUETES HTTP
//Envoie de la requête HTTP de type GET à l'API 
//Récupération des données au format JSON

const getCameras = async function () {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);


            // // ALGORITHME :
            // // POUR CHAQUE élément du tableau 
            // // ON CREE une card
            // // et ON REMPLI les champs avec ce qui correspond


            //CREATION DES CARDS POUR AFFICHER LES DIFFERENTES CAMERAS


            // Creation de la div parente parente row
            let divParentParent = document.createElement("div");
            const mainHome = document.getElementById("main-home");
            mainHome.appendChild(divParentParent);
            divParentParent.classList.add("row-cols-1", "row-cols-md-4", "row-cols-lg-5", "d-flex", "flex-wrap", "justify-content-between", "align-items-between");


            //CREATION D'UNE BOUCLE
            for (let i = 0; i < cameras.length; i++) {

                // Création de la div parente
                // Ajout des classes 

                let divParent = document.createElement("div");
                divParentParent.appendChild(divParent);
                divParent.classList.add("card", "col", "m-3", "pt-3");


                // Création des élements images et div avec la classe card body, enfants de la divParent 
                // Ajout des classes
                let imageCamera = document.createElement("img");
                divParent.appendChild(imageCamera);
                imageCamera.classList.add("card-image-top", "photo", "img-fluid");
                imageCamera.src = cameras[i].imageUrl;

                let divCardBody = document.createElement("div");
                divParent.appendChild(divCardBody);
                divCardBody.classList.add("card-body", "text-center", "px-0", "d-flex", "flex-column", "justify-content-between");


                // Création des éléments enfants de la div CardBody
                // Ajout des classes
                // Ajout du texte
                let titleCamera = document.createElement("h3");
                divCardBody.appendChild(titleCamera);
                titleCamera.classList.add("card-title", "title");
                titleCamera.textContent = cameras[i].name;

                let descriptionCamera = document.createElement("p");
                divCardBody.appendChild(descriptionCamera);
                descriptionCamera.classList.add("description", "text-justify");
                descriptionCamera.textContent = cameras[i].description;


                // Création d'une div englobant prix et bouton
                let divLinkPrice = document.createElement("div");
                divCardBody.appendChild(divLinkPrice);
                divLinkPrice.classList.add("d-flex", "flex-row", "justify-content-between");

                // Création du prix
                let priceCamera = document.createElement("p");
                divLinkPrice.appendChild(priceCamera);
                priceCamera.classList.add("price", "my-2", "font-weight-bold");
                priceCamera.textContent = cameras[i].price + ' $';


                // Lien vers la page produit 
                let linkProduct = document.createElement("a");
                divLinkPrice.appendChild(linkProduct);

                // Redirection vers la page produit avec le produit correspondant
                
                // URL du lien
                let url = 'file:///D:/openclassrooms/projet5/orinoco/product.html';
                // // Création d'un objet URL
                let urlObj = new URL(url);
                let idCameras = cameras[i]._id;
                // Ajout du query string ID
                urlObj.searchParams.append("id", idCameras);
                linkProduct.href = urlObj ;

                // Création du bouton 
                let buttonBuy = document.createElement("button");
                linkProduct.appendChild(buttonBuy);
                buttonBuy.classList.add("btn", "btn-warning", "block-right");
                // Ajout texte au bouton
                buttonBuy.textContent = "Voir";
               
                
            }




        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}

getCameras()







