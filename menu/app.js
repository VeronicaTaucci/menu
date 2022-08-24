const express = require('express'); 
const app = express(); 
let port = 3000

let db = require('./models/database'); //instance of database connection 



app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 

app.set('view engine', 'ejs')
app.use(require('./routes/index'))
app.use(require('./routes/newDish'))

//? using '.then' to get data from db you can use queries
// db.query('SELECT * FROM categories')
//     .then(results => { //[{},{},{}] - each object is a record in db
//     console.log(results)
// })

//? using async
const categories = async () => { 
    let results = await db.query('SELECT * FROM categories')
    //? results.forEach(category => {
    //     console.log(category.name)
    // });

    //? for (let i = 0; i < results.length; i++){
    //     console.log(results[i].name)
    // }

    for (let category of results) {
        console.log(category.name)
    }

}
// categories()


//! insert to db
const insertCategory = async (categoryName) => { 
    //? not secure
    // let results = await db.result(`INSERT INTO categories VALUES(DEFAULT, '${categoryName}' )`)
    // console.log(results)

    //? sanitize the results
    let results = await db.result(`INSERT INTO categories VALUES(DEFAULT, $1 )`,[categoryName])
 }
// insertCategory('Moldovian')
app.listen(port, () => { 
    console.log(`listening on port: ${port}`)
})
