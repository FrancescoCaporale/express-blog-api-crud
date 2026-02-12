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
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };;
    posts.push(newPost);

    res.status(201).json(newPost);
}

function update(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    res.send("Modifica del post " + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    posts.splice(posts.indexOf(post), 1);

    console.log(posts);

    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};