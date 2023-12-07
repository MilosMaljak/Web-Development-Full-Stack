import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

let tasks = []
app.get("/", (req, res) =>{
    res.render("index.ejs", {tasks: tasks});
});


app.post("/add", (req, res) =>{
    var newItem = req.body.todos;
    tasks.push(newItem);
    res.redirect("/")

})

app.post("/delete", (req, res) => {
    const taskToDelete = req.body.todoTask;
    tasks = tasks.filter(task => task !== taskToDelete);
    res.redirect("/");
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });