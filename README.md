CSS & JS Overview
===========================

Introduction
------------
CSS is an acronym for "Cascading Style Sheets" and is used to separate content from styling.  Consistent styling of documents can improve readability and allow for style reuse (AKA *less work*). JavaScript enables web pages,
which are normally static, to exhibit dynamic behavior.  In the following text, you will receive a very brief introduction and demo of CSS and JavaScript and how this technologies might be useful. 

Getting Started
---------------
This tutorial is intended for Windows users.  Though, all source code is viewable with any text editor, more understanding is likely to be gained by downloading the code and using a web server.  Use these steps to get a web server going:

1. **Either Install Git and clone the source, or download the zip file and extract it locally.**  There are many ways to accomplish this step, nevertheless, the source is found here: [https://github.com/krcourville/cssjsoverview](https://github.com/krcourville/cssjsoverview).  You'll find links for *Clone in Desktop* and *Download Zip* on the right sidebar.
2. **Get a web server running.** Again, this can be accomplished in several ways, but here's one way:
	1. Install node.js from [http://nodejs.org/](http://nodejs.org/)
	2. Open a command prompt and change to the directory in which this document exists.
	3. Enter `npm install` This installs connect and its dependencies
	4. Enter `node server` This start the server
	5. Verify that you can browse to [http://localhost:4000/friender.html](http://localhost:4000/friender.html)

Styling, a Quick Demo for MS Office Users
-----------------------------------------
To help illustrate the usefulness of styles, before we try to understand an HTML document, let's try a simple example with a MS Word document.  Follow these steps for a demo  (Note: These steps were tested against Word 2010):

1. Open [CheckOutMyStyle.docx](CheckOutMyStyle.docx)
2. This document uses 4 styles. See if you can identify them:
	- Normal
	- Title
	- Heading 1
	- Heading 2
3. If you haven't noticed, clicking different areas will select the corresponding style in Word's *Home* menu strip. Try clicking on a title, the headings, and a paragraph.
4. Now change the level 1 and 2 headings to be consistent with APA.
	1. In the *Home* menu strip, right-click **Heading 1** and select **Modify**.
	2. Click the **Center Text** button then **Ok**
	3. Now right-click **Heading 2** and select **Modify**.	
4. Scroll through the document.  All level 1 headings should be centered.

With the previous exercise in mind, consider the following scenario:  

You just spent a month preparing a 150 page estimate for your manager.  Everything looks great, except that the  client now requires all documents to use APA format.  When typing the document, you simply bolded every header.  How are you going to fix this easily?  If you had grouped the elements of your document into logical components, such as title, paragraphs, and headings, you would not be breaking a sweat right now.

	
HTML
----
When talking about web pages, to understand the usefulness of CSS or JavaScript, you must first understand HTML.  HTML, Hyper Text Markup Language, is used in practically every web page you visit.  No matter what web server (Apache, IIS, Tomcat) or technology (ASP.NET, Ruby on Rails, JSP) you use, the final output to your web browser will generally be HTML.

To see HTML in action, open [friender.html](friender.html), right-click in you web browser window and select **View Source**

HTML documents primarily consist of various *nodes*.  Tags (AKA elements), Attributes, and Text are the most common. Here's some examples:

 * Tags are text enclosed in angle brackets: `<html></html>`, `<body></body>`, and `<p>`.  
 * Attributes are surrounded with matching single or double quotes within the opening tag like this: `<p class="this_is_an_attribute">`.
 * Text nodes can be found between the opening and closing tags like so:  `<p>This is a text node between p tags!</p>`

Similar to Word, HTML allows you to classify components of your document.  You can use `<h1> <h2> ...` for different header levels, `<p>` for paragraphs, `<ol>` for an ordered list, and `<li>` for list items.

An HTML document forms a tree data structure. Compare the friender.html source to this outline and see if you can identify the type of node each line is:

* html
	- body
		- h1
			- Friender
		- p
			- This application will help keep track of all of your friends.
		- ol
			- li
				- a
					- href
					- class
					- Unfriend
				- Joe Schmoe

 HTML documents are commonly referenced via DOM, Document Object Model.  Keep this in mind as you delve deeper into the JavaScript and CSS topics below.

 For more information and instruction on HTML, refer to [http://www.w3schools.com/html/](http://www.w3schools.com/html/). W3 Schools provides free/interactive tutorials.

Adding Some Style
-----------------
TODO

Making it Interactive
---------------------
TODO

Conclusion
----------
TODO