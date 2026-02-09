const posts = require("../data/posts");

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    res.json(post);
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