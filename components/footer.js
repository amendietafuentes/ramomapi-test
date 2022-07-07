const getFooter = async() => {

    const p = document.createElement('p');
    p.setAttribute('class', 'text-center pt-5 pb-5');
    const footerText = document.createTextNode('Development by Arnulfo Mendieta.');
    p.appendChild(footerText);
    const HTMLFooter = document.querySelector('#footer');
    HTMLFooter.appendChild(p);

}

export { getFooter }