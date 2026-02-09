const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/post");

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
