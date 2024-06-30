// Import the Express framework, which will be used to create the web server.
const express = require('express')

// Import the articleRouter from the 'routes/articles' file. This will handle routes related to articles.
const articleRouter = require("./routes/articles")

// Import the Article model from the 'models/article' file. This will be used to interact with the articles collection in the MongoDB database.
const Article = require('./models/article')

// Import Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model your application data.
const mongoose = require('mongoose')

// Import the method-override middleware, which allows you to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
const methodOverride = require('method-override')

// Create an instance of an Express application.
const app = express()


// Connect to the MongoDB database named 'BlogDatabase' running on the local machine.
mongoose.connect('mongodb://localhost/BlogDatabase')

// Set the view engine to 'ejs' (Embedded JavaScript), which will be used to render HTML pages with dynamic data.
app.set('view engine', 'ejs')

// Use the built-in Express middleware to parse URL-encoded bodies (form submissions). The 'extended: false' option ensures that the querystring library is used for parsing.
app.use(express.urlencoded({extended: false}))

// Use method-override middleware to support PUT and DELETE requests. It looks for a query parameter called '_method' and uses its value to override the HTTP method.
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    // Define a route handler for the root URL ('/'). It fetches all articles from the database and sorts them in descending order by the 'createdAt' field.
    const articles = await Article.find().sort({ createdAt: 'desc' })

    // Render the 'index' view in the 'articles' folder, passing the fetched articles as data to be displayed.
    res.render('articles/index', { articles: articles })
})

// Use the articleRouter for any routes starting with '/articles'. This delegates the handling of these routes to the articleRouter.
app.use("/articles", articleRouter)

// Start the server and have it listen on port 3000 for incoming connections.
app.listen(3000)
