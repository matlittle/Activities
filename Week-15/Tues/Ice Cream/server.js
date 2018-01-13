const app = require("express")();
const exphbs = require("express-handlebars");
const PORT = 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];

app.get("/icecream/:name", (req, res) => {
    const name = req.params.name;

    const found = icecreams.find((el) => {
        return el.name === name;
    });
    
    console.log(found);

    res.render("single-ic", found);
});

app.get("/icecreams", (req, res) => {
    res.render("all-ic", {ics: icecreams});
});


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

