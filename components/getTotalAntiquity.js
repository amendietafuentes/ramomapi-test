import { validateBalance } from "../utils/validateBalance.js";

const calculateAntiquity = (antiquity) => {

    // Parsing antiquity created
    const createdAntiquity = new Date(`${antiquity}`);
    const createdAntiquityYear = createdAntiquity.getFullYear();

    // Get a current year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Calculate antiquity years
    const antiquityYears = currentYear - createdAntiquityYear;

    document.getElementById("antiquity-body").innerHTML = `El cliente tiene <strong>${antiquityYears}</strong> año(s) de antiguedad`;

}

const getClientsDetails = (address, balance, created) => {

    if (address && balance && created) {

        const balanceToValidate = validateBalance(balance);

        document.getElementById("details-clients-body").innerHTML = `<p class="address pt-2 pb-2">Dirección: ${address}</p><p class="balance pt-2 pb-2">Balance: <span class="current-balance p-2">${balance}</span></p><p class="created pt-2 pb-2">Fecha de creación: ${created}</p)>`;

        const currentBalance = document.querySelector(".current-balance");

        if (balanceToValidate > 1500.00) {

            currentBalance.style.background = "green";
            currentBalance.style.fontWeight = "bold";
            currentBalance.style.color = "white";

        } else {

            currentBalance.style.background = "blue";
            currentBalance.style.color = "white";

        }

    }

}

export { calculateAntiquity, getClientsDetails }