import { runApp } from '../app.js';

const getHeader = async() => {

    const filter = true;

    const HTMLHeader = document.querySelector("#header");

    const containerHeader = document.createElement("div");
    containerHeader.setAttribute('class', 'container pt-5');

    const rowHeader = document.createElement("div");
    rowHeader.setAttribute('class', 'row');

    const colHeaderTitle = document.createElement("div");
    colHeaderTitle.setAttribute('class', 'col-sm-12 col-md-6 title-block');

    const h1 = document.createElement("h1");
    const textNodeh1 = document.createTextNode("Clientes");
    h1.setAttribute('class', 'title-content');

    const colHeaderFilter = document.createElement("div");
    colHeaderFilter.setAttribute('class', 'col-sm-12 col-md-6 filter-block pt-2');

    const button = document.createElement("button");
    const textNodeBtn = document.createTextNode("Clientes Gold");
    button.setAttribute('class', 'btn btn-md btn-warning');
    button.addEventListener("click", function() { runApp(filter) });

    h1.appendChild(textNodeh1);
    button.appendChild(textNodeBtn);
    containerHeader.appendChild(rowHeader);
    rowHeader.appendChild(colHeaderTitle);
    rowHeader.appendChild(colHeaderFilter);
    colHeaderTitle.appendChild(h1);
    colHeaderFilter.appendChild(button);

    HTMLHeader.appendChild(containerHeader);

}

export { getHeader };