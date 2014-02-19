# CSS & JS Overview

## Introduction
In the following text, you will learn by doing and receive a very brief introduction and demo of CSS and JavaScript and how these technologies might be useful in any web page. For comparison, we will look at styles and document structure in MS Word and then dig a little bit into HTML, CSS, and JavaScript.

## Getting Started
All source code demonstrated here can be created and be viewed with any text editor, however, most browsers require that a web page be served by a web server for JavaScript to run.  As a result, all code is hosted on jsbin.com where you can play with HTML, JavaScript, and CSS without need for any software other than a web browser.

## Styling in MS Word
To help illustrate the usefulness of styles and document structure, let's try a simple example with a MS Word document.  Follow these steps to examine how styles work in a Word document (Note: These steps were tested against Word 2010):

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

By identifying and classifying the common components of your document, you can apply consistent, maintainable formatting across many documents or a single documents.

### Exercises
 1. Modify the Header 2 style to be italicized, underlined, and indented.
 2. Create a dynamic Table of Contents page using the Headers.

	
HTML
----
Discussing CSS and JavaScript without a minimal understanding of HTML is near impossible.  HTML, Hyper Text Markup Language, is used in practically every web page you visit.  No matter what web server (Apache, IIS, Tomcat) or technology (ASP.NET, Ruby on Rails, JSP) you use, the final output to your web browser will generally be HTML.

To see HTML in action, open the Friender Base page here: [http://jsbin.com/zavut/](http://jsbin.com/zavut/).  You should see the HTML on left and resulting page on the right.

HTML documents are composed of a tree containing various *nodes*.  This tree of nodes forms a DOM (Document Object Model) that can be references by CSS and JavaScript.  Tags, Attributes, and Text are the most common nodes. Here's some examples:

 * Tags consist of text enclosed in angle brackets: `<html></html>`, `<body></body>`, and `<p>`.  Notice that some tags have an open and close tags.  The close tag is the same as the opening tag except with a slash.
 * Attributes are surrounded with matching single or double quotes within the opening tag like this: `<p class="this_is_an_attribute">`.
 * Text nodes can be found between the opening and closing tags like so:  `<p>This is a text node within a p tags!</p>`

Similar to Word, HTML allows you to classify components of your document.  You can use `<h1> <h2> ...` for different header levels, `<p>` for paragraphs, `<ol>` for an ordered list, and `<li>` for list items.  The *class* attribute is a special attribute used to further classify elements.  In the [http://jsbin.com/zavut/](Friender) page, notice how class is used to identify links that will delete something.

Another important tag is `<a>`, which creates links on web pages to other web pages and resources.  The *a* stands for *anchor*.  Consider this link: `<a href="http://www.google.com">Google It!</a>`.  The *href* attribute specifies the web address of the link, and the text between the open and close tag form what is the displayed in a web browser.

### Further Learning
[http://www.w3schools.com/html/](http://www.w3schools.com/html/)

###Exercises
1. Compare the friender.html source to this outline and identify the type of node each line is:
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
2. Use an HTML tag to bold the word *all* in the first paragraph.  Refer to [http://www.w3schools.com/tags/tag_b.asp](http://www.w3schools.com/tags/tag_b.asp).

##Adding Some Style
Just like styles in MS Word, CSS, Cascading Style Sheets, is used to separate document structure from style.  A well-planned CSS file can be re-used across any number of pages in a site or across many web sites on different servers.  You can establish your company's entire brand in a single file (or use several files for maintainability and then join them for the final product). 

###Scenario
Effective immediately, all Friender pages must meet the following specifications:

- All text will be displayed in the font *Arial*.
- All text is displayed with a yellow on dark blue background.
- All header tags are centered on the page.

###Implementation
1. Go to [http://jsbin.com/zavut/](http://jsbin.com/zavut/)
2. Ensure the CSS tab is open.
3. Add this text:

		```
		body{
		  color:yellow;
		  background-color: darkblue;
		  font-family: Arial;
		}
		```

4. Notice that all nodes in the Output have inherited the style applied to *body*. There is an exception, however.  The links are not yellow.  This is because each web browser has its own default styles which are overriding your specified style.  Below the body style, add this style:

		```
		a{
		 color:yellow;
		}
		```  

5. Finally, add this style below the anchor style.

		```
		h1,h2,h3,h4,h5,h6{
		 text-align:center;
		}
		```

In the code above, we created some basic CSS using this syntax:

		```
		selector { attribute1 : value1; }
		```
A selector identifies which nodes to apply a style to, and there are many ways to select document nodes.

Try adding these styles:
```
/* make all delete links look like they're not allowed */
a.action-delete{ 
  cursor:not-allowed;  
}
/* change the style for delete links when the mouse is overhead */
a.action-delete:hover{
  color:red;
  font-weight:bold;
}
```
The first style selects all links with a class of *action-delete* and applies a cursor style.  And the next style targets the same links but only when the mouse is placed over them.  Also notice that `/* stuff goes here */` can be used to place comments in style sheets.

There is much more to CSS. And, as a word of caution, some styles are not implemented consistently across different web browsers and version of web browsers.  Depending on your audience, you may need to test across many web browsers.

### Further Learning
[http://www.w3schools.com/css/](http://www.w3schools.com/css/)

### Exercises
1. Add a style that makes all links bold.
2. Add a 3 pixel dashed border to the body. Refer to [http://www.w3schools.com/cssref/pr_border.asp](CSS Border Property)

##Making it Interactive
Now comes the time to make Friender do something with those *unfriend* links.  You know, because, two friends are getting hard to maintain. First, let's look at how this would be accomplished via normal static HTML pages.

###Unfriending without JavaScript
1. From the base application page, click *Unfriend* -> [http://jsbin.com/runoj/2](http://jsbin.com/runoj/2)
2. It's possible to accidentally unfriend somone or click on the wrong unfriend link.As a result, let's offer a confirmation before performing the delete -> [http://jsbin.com/boliwe/2](http://jsbin.com/boliwe/2). Also notice this page uses a form tag with a *DELETE* method attribute.  Any data modification should **never** occur through a simple link or default web *GET* method attribute.  This is particularly important on public web sites where crawlers like Google follow all links, and, as a result, would removed all of your friends.
3. Finally, we offer a confirmation to indicate the action was successful. [http://jsbin.com/fazen/1](http://jsbin.com/fazen/1).  In a purely static HTML world, we would need to offer a *failed* page as well.  Can we improve on the work flow for this simple task?

###Unfriending with JavaScript
In the following steps, we'll use JavaScript to make Unfriending occur within a single HTML page.

1. Here's your starting point: [http://jsbin.com/puruf/1/edit](http://jsbin.com/puruf/1/edit)
2. We need to reference all links classified as *action-unfriend*.  Add this line into the JavasScript tab.
			```
			var unfriendlinks = document.getElementsByClassName('action-unfriend');
			```
3. Now that we have the links, loop through them all and bind a function to handle clicks.

			```
			for( var i = 0; i < unfriendlinks.length; i++){
			  var unfriendlink = unfriendlinks[i];  
			  unfriendlink.addEventListener('click', onUnfriendClick);
			}
			```


##Conclusion
TODO