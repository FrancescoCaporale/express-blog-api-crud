function index(req, res) {
    res.send("Lista dei post");
}

function show(req, res) {
    res.send("Dettaglio del post " + req.params.id);
}

function store(req, res) {
    res.send("Creazione di un nuovo post");
}

function update(req, res) {
    res.send("Modifica del post " + req.params.id);
}

function destroy(req, res) {
    res.send("Cancellazione del post " + req.params.id);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};