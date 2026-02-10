const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const postsRouter = require("./routers/post");

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
