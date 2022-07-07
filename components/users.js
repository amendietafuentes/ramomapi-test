import { calculateAntiquity, getClientsDetails } from "./getTotalAntiquity.js";

const getUsers = async(users) => {

    const HTMLContent = document.querySelector("#app");
    HTMLContent.setAttribute("class", "container-fluid pt-5");

    const container = document.createElement("div");
    container.setAttribute("class", "table-responsive pt-5");

    const table = document.createElement("table");
    table.setAttribute("class", "table table-striped table-responsive table-dark");

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.appendChild(tr);

    const thName = document.createElement("th");
    const txtNodeThName = document.createTextNode("Nombe");
    thName.setAttribute("scope", "col");
    thName.appendChild(txtNodeThName);

    const thLastName = document.createElement("th");
    const txtNodeThLastName = document.createTextNode("Apellido");
    thLastName.setAttribute("scope", "col");
    thLastName.appendChild(txtNodeThLastName);

    const thEmail = document.createElement("th");
    const txtNodeThEmail = document.createTextNode("Email");
    thEmail.setAttribute("scope", "col");
    thEmail.appendChild(txtNodeThEmail);

    const thActions = document.createElement("th");
    const txtNodeThActions = document.createTextNode("Acciones");
    thActions.setAttribute("scope", "col");
    thActions.setAttribute("class", "text-center");
    thActions.appendChild(txtNodeThActions);

    tr.appendChild(thName);
    tr.appendChild(thLastName);
    tr.appendChild(thEmail);
    tr.appendChild(thActions);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    users.forEach(user => {

        //console.log(user)

        const trUser = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.innerHTML = user.first;
        const tdLastName = document.createElement("td");
        tdLastName.innerHTML = user.last;
        const tdEmail = document.createElement("td");
        tdEmail.innerHTML = user.email;

        const tdActions = document.createElement("td");
        tdActions.setAttribute("class", "d-flex justify-content-center");

        const btnDetails = document.createElement("button");
        btnDetails.setAttribute("type", "button");
        btnDetails.setAttribute("data-bs-toggle", "modal");
        btnDetails.setAttribute("data-bs-target", "#clientsDetailsModal");
        btnDetails.setAttribute("class", "btn btn-outline-success m-2");
        btnDetails.addEventListener("click", function() { getClientsDetails(user.address, user.balance, user.created) }, false);
        const txtBtnDetails = document.createTextNode("Ver detalles");
        btnDetails.appendChild(txtBtnDetails);

        const btnAntiquity = document.createElement("button");
        btnAntiquity.setAttribute("type", "button");
        btnAntiquity.setAttribute("data-bs-toggle", "modal");
        btnAntiquity.setAttribute("data-bs-target", "#antiquityModal");
        btnAntiquity.setAttribute("class", "btn btn-outline-success m-2 total-antiquity");
        btnAntiquity.addEventListener("click", function() { calculateAntiquity(`${user.created}`) }, false);
        const txtBtnAntiquity = document.createTextNode("Ver antiguedad");
        btnAntiquity.appendChild(txtBtnAntiquity);

        tdActions.appendChild(btnDetails);
        tdActions.appendChild(btnAntiquity);

        trUser.appendChild(tdName);
        trUser.appendChild(tdLastName);
        trUser.appendChild(tdEmail);
        trUser.appendChild(tdActions);
        tbody.appendChild(trUser);

    });

    table.appendChild(tbody);
    container.appendChild(table);

    HTMLContent.appendChild(container);

}

export { getUsers }