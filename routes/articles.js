const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


// Render the 'new' view in the 'articles' folder, passing a new (empty) Article instance as data to the view.
router.get('/new', (req, res)=> {
    res.render('articles/new', { article: new Article })
})


// Find an article by its ID using the 'findById' method.
// Render the 'edit' view in the 'articles' folder, passing the found article as data to the view.
router.get('/edit/:id', async(req, res)=> {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})


// Define a route handler for GET requests to '/:slug'.
// Find an article by its slug using the 'findOne' method.
router.get('/:slug', async(req,res)=>{
    const article = await Article.findOne({slug: req.params.slug})
    if(article==null) res.redirect('/') // If no article is found, redirect to the homepage.
    // Render the 'show' view in the 'articles' folder, passing the found article as data to the view.
    res.render('articles/show', {article: article})
})

// For deleting the article
router.delete('/:id', async(req, res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

// For submission of Form, Connected with form_field, and new
router.post('/', async(req, res, next)=>{
    req.article = new Article()
    next()
}, saveArticle('new'))


// For submission of Form After Editing, Connected with form_field, and new
router.put('/:id', async(req, res, next)=>{
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticle('edit'))


function saveArticle(path){
    return async(req,res)=>{
    let article = req.article
    // Update  the article details
        article.title= req.body.title
        article.description= req.body.description
        article.markdown= req.body.markdown
    

    try{
        article = await article.save()  // Save the article to the database.
        res.redirect(`/articles/${article.slug}`) // If successful, redirect to the article's show page using its slug.
    }
    catch(e){
        // If there is an error, render the appropriate form view ('new' or 'edit') with the article data.
        res.render(`articles/${path}`, {article:article})
    }
}}

module.exports = router
