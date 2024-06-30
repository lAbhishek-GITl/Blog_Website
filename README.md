_**Slug**_
___________
A slug is a part of a URL that identifies a particular page on a website in a form readable by users. It's typically derived from the title of the page or article, ensuring that the URL is descriptive and easy to read.

**Why Use a Slug?**
____________________
**1. SEO (Search Engine Optimization) :** Descriptive URLs can improve search engine rankings and make the content more discoverable.
**2. User-Friendly URLs :** Slugs make URLs easier to read and understand for users. Instead of seeing a complex string of characters, users see a meaningful path in the URL.
**3. Uniqueness :** Slugs help in uniquely identifying resources. Even if titles are the same, unique slugs differentiate them.


Slug: Transforms titles into URL-friendly formats, improving SEO and readability, and ensuring uniqueness.

_**Sanitized HTML**_
____________________
Sanitized HTML refers to HTML that has been cleaned to remove potentially harmful code. This process is essential for preventing Cross-Site Scripting (XSS) attacks, where attackers inject malicious scripts into web pages viewed by others.

**Why Sanitize HTML?**
______________________
**1. Security :** Sanitizing HTML ensures that any content provided by users does not contain malicious code that could execute in the browser and harm other users or compromise data.
**2. Data Integrity :** It ensures that only safe, clean HTML is stored and displayed, maintaining the integrity of the web page's content.
**3. User Trust :** By preventing XSS attacks, it helps maintain user trust in the website's safety and reliability.

Sanitized HTML: Converts Markdown to HTML and cleans it to prevent security vulnerabilities like XSS attacks, ensuring the safety and integrity of the content displayed on your website.
____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
**Dependencies**
_________________

**1. dompurify :** A DOM-only XSS sanitizer for HTML, MathML, and SVG.

**2. ejs :** Embedded JavaScript templating. Used to render HTML pages.

**3. express :** A web framework for Node.js.

**4. jsdom :** A JavaScript implementation of various web standards, used to create a simulated browser environment.

**5. marked :** A library to convert Markdown to HTML.

**6. method-override :** Middleware to use HTTP verbs like PUT or DELETE in places where the client doesn’t support it.

**7. mongoose :** An ODM (Object Data Modeling) library for MongoDB and Node.js.

**8. slugify :** A library to create URL-friendly slugs from strings.

**9. nodemon :** A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.


**COMMANDS**

npm install dompurify

npm install ejs

npm install express

npm install jsdom

npm install marked

npm install method-override

npm install mongoose

npm install slugify

npm install nodemon --save-dev

npm run blogwebsite
