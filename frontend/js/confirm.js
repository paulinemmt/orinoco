// Confirmation de la commande


function addConfirmationText(){
    const confirmationId = localStorage.getItem("orderConfirmation");
    const totalPrice = localStorage.getItem("totalPriceOrder");
    const confirmation = document.getElementById("confirmation");
    const messageConfirmation = document.createElement("p");
    const confirmationPrice = document.createElement("p");

    messageConfirmation.innerHTML = "Merci pour votre commande n° " + confirmationId;
    confirmationPrice.innerHTML = "Prix total :" + totalPrice + "$";

    // confirmation.appendChild(messageConfirmation);
    // confirmation.appendChild(confirmationPrice);
}

