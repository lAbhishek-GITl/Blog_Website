const  mongoose = require('mongoose')

// Import the 'marked' library, which is used to convert Markdown to HTML.
const { marked } = require('marked')

// Import the 'slugify' library, which is used to create URL-friendly slugs from strings.
const slugify = require('slugify')

// Import the 'dompurify' library, which is used to sanitize HTML.
const createDomPurify = require('dompurify')

// Import 'jsdom', which is used to simulate a browser environment in Node.js.
const { JSDOM } = require('jsdom')
// Create a DOMPurify instance using a simulated browser window from jsdom.
const  dompurify = createDomPurify(new JSDOM().window)

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
    },

    markdown:{
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    
    // This will store a URL-friendly version of the article title.
    slug:{
        type: String,
        required: true,
        unique: true
    },

    // This will store the sanitized HTML version of the Markdown content.
    sanitizedHTML:{
        type: String,
        required: true
    }
})

articleSchema.pre('validate', function(next){
    // Before validating the document, if the 'title' field is present, generate a slug from the title using the 'slugify' library.
    // The options { lower: true, strict: true } ensure the slug is lowercase and has no special characters.
    if(this.title){
        this.slug = slugify(this.title, {lower:true, strict: true})
    }


    // Before validating the document, if the 'markdown' field is present, convert the Markdown to HTML using the 'marked' library.
    // Then sanitize the generated HTML to prevent XSS attacks using the 'dompurify' library.
    if(this.markdown){
        this.sanitizedHTML = dompurify.sanitize(marked(this.markdown))
    }

    next()
})

module.exports = mongoose.model('Article', articleSchema)
