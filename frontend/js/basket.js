// Creer le panier
const getBasket = async function () {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);

            // Récupérer le bon objet dans l'api
            let basketContent = JSON.parse(localStorage.getItem("basketContent")) || {};
            console.log(basketContent);
            //console.log(basketContent[1].idCamera);
            // console.log(cameras[1]._id);

            for(i = 0; i < basketContent.length; i++){
                let itemCamera = cameras.find(cameras => cameras['_id'] == basketContent[i].idCamera);
                console.log(itemCamera);
            
            //         for(i = 0; i < basketContent.length; i++){
            // let itemCamera = cameras.find(cameras => cameras['_id'] == idCamera[i]);
            // console.log(itemCamera);

            // Creer une ligne par article

            let mainBasket = document.getElementById('basket-content');
            console.log(mainBasket)
            mainBasket.classList.add("my-3");

            let divBasket = document.createElement('div');
            mainBasket.appendChild(divBasket);
            divBasket.classList.add("d-flex", "flex-row", "justify-content-between","my-2", "px-1", "bold");

            let nameCamera = document.createElement('p');
           divBasket.appendChild(nameCamera);
            nameCamera.textContent = itemCamera.name;

            let lenseCamera = document.createElement('p');
            divBasket.appendChild(lenseCamera);
            lenseCamera.textContent = basketContent[i].selectedLenses;

            let priceCamera = document.createElement('p');
            divBasket.appendChild(priceCamera);
            priceCamera.textContent = itemCamera.price;

            let totalPrice = document.getElementById('total-price');
console.log(totalPrice)
let priceFinalCamera = itemCamera.price;
console.log(priceFinalCamera)
total = total + itemCamera.price
console.log(total)
totalPrice.textContent = "Prix total : " + total + "$"
            }
        
// Prix total de la commande
// let totalPrice = document.getElementById('total-price');
// console.log(totalPrice)
// let total = 0;
// for (i = 0 ; i < itemCamera.lenght ; i++){
// total = total + itemCamera[i].price
// totalPrice.textContent = "Prix total : " + total + "$"}

        // for(i = 0; i < basketContent.length; i++){
        //     let itemCamera = cameras.find(cameras => cameras['_id'] == idCamera[i]);
        //     console.log(itemCamera);
        //     // Creer une ligne par article

        //     let mainBasket = document.getElementById('basket-content');
        //     console.log(mainBasket)
        //     let nameCamera = document.createElement('p');
        //     mainBasket.appendChild(nameCamera);
        //     nameCamera.textContent = itemCamera.name;

        // }

                    
    } else {
        console.error('Retour du serveur : ', response.status)
    }
}
 catch (e) {
    console.log(e);
}
}
getBasket();


// Supprimer le contenu du panier
let divButtonClear = document.getElementById('button-clear-basket');
let buttonClearBasket = document.createElement("button");
divButtonClear.appendChild(buttonClearBasket);
buttonClearBasket.classList.add("btn", "btn-warning", "block-right");
// Ajout texte au bouton
buttonClearBasket.textContent = "Vider le panier";


console.log(buttonClearBasket);


buttonClearBasket.addEventListener('click', function () {
    localStorage.removeItem('basketContent');
})







// // Formulaire
// let dataForm =

// const postForm = async function (dataForm) {
//     try {
//         let response = await fetch("http://localhost:3000/api/cameras", {
//             method: 'POST',
//             headers:{

//                 'content-type': 'application/json'
//             } ,
//             body: ,


//         });
//         if (response.ok) {
//             let data = await response.json();
//             console.log(data);
//         } else {
//             console.error('Retour du serveur : ', response.status)
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// postForm()

// // Validation de la commande, et récupération d'un ID
// let buttonValidation = document.getElementById('btn-validation');
// console.log('buttonValidation');
// buttonValidation.addEventListener('click', function(

// ))



