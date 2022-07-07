const modalClientDetails = async() => {
    document.getElementById("clientsDetailsModal").innerHTML = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel">Detalles de Clientes</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div id="details-clients-body" class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn btn-outline-success" data-bs-dismiss="modal">Cerrar</button></div></div></div>';
}

export { modalClientDetails }