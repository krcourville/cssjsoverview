# A Mild Mannered Uber-basic Intro to CSS & JS

## Introduction
The following text employs the *learn by doing* technique to provide a very brief demo of CSS and JavaScript and how these technologies might be useful in any web page.  Each section ends with a couple of exercises for you to try and a reference to W3 Schools where you can learn more by doing. For comparison, we will look at styles and document structure in MS Word and then dig a little bit into HTML, CSS, and JavaScript.  

To illustrate a real-world example, we will be enhancing the *Friender* application.  Friender came about because we have too many friends and needed a tool to help keep track of them.

## Requirements
All source code demonstrated here can be created and be viewed with any text editor, however, most browsers require that a web page be served by a web server for JavaScript to run.  As a result, all code is hosted on jsbin.com where you can play with HTML, JavaScript, and CSS without need for any software other than a web browser.  Otherwise, for the first section, you will need MS Word.

## Styling in MS Word
To help illustrate the usefulness of styles and document structure, let's try a simple example with a MS Word document.  Follow these steps to examine how styles work in a Word document (Note: These steps were tested against Word 2010):

1. Open [CheckOutMyStyle.docx](CheckOutMyStyle.docx?raw=true)
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

You just spent a month preparing a 150 page estimate for your manager.  Everything looks great, except that the  client now requires all documents to use APA format.  When typing the document, you simply bolded every header.  How are you going to fix this easily?  If you had classified the elements of your document into logical components, such as title, paragraphs, and headings, you would not be breaking a sweat right now.

By identifying and classifying the common components of your document, you can apply consistent, maintainable formatting across many documents or a single documents.

### Exercises
 1. Modify the Header 2 style to be italicized, underlined, and indented.
 2. Create a dynamic Table of Contents page using the Headers.

	
##Structuring Your Content with HTML
Discussing CSS and JavaScript without a minimal understanding of HTML is near impossible.  HTML, Hyper Text Markup Language, is used in practically every web page you visit.  No matter what web server (Apache, IIS, Tomcat, ASP.NET, Ruby on Rails, JSP) you choose to use, the final output to your web browser will generally be HTML.

To see HTML in action, open the Friender page here: [http://jsbin.com/zavut/1/edit](http://jsbin.com/zavut/1/edit).  You should see the HTML on left and resulting page on the right.

HTML documents are composed of a tree containing various *nodes*.  This tree of nodes forms a DOM (Document Object Model) that can be referenced by CSS and JavaScript.  Tags, Attributes, and Text are the most common nodes. Here are some examples:

 * Tags consist of text enclosed in angle brackets: `<html></html>`, `<body></body>`, and `<p>`.  Notice that some tags have matching open and close tags.  The close tag is the same as the opening tag except with a slash.
 * Attributes are surrounded with matching single or double quotes within the opening tag like this: `<p class="this_is_an_attribute">`.
 * Text nodes can be found between the opening and closing tags like so:  `<p>This is a text node within a p tags!</p>`

Similar to Word, HTML allows you to classify components of your document.  You can use `<h1> <h2> ...` for different header levels, `<p>` for paragraphs, `<ol>` for an ordered list, and `<li>` for list items.  The *class* attribute is a special attribute used to further classify tags.  In the [Friender](http://jsbin.com/zavut/1/edit) page, notice how class is used to identify `<a>` tags that will delete something.

The `<a>` tag is used to create links on web pages to other web pages and resources.  The *a* stands for *anchor*, based on the concept that they anchor web addresses to text.  Consider this link: `<a href="http://www.google.com">Google It!</a>`.  The *href* attribute specifies the web address of the link, and the text between the open and close tag form what is the displayed in a web browser.

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

##Styling Your Content with CSS
Just like styles in MS Word, CSS, Cascading Style Sheets, is used to separate document structure from style.  A well-planned CSS file can be re-used across any number of pages in a site or across many web sites on different servers.  You can establish your company's entire brand in a single file (or use several files for maintainability and then join them for the final product). 

###Scenario
Effective immediately, all Friender pages must meet the following specifications:

- All text will be displayed in the font *Arial*.
- All text is displayed with a yellow on dark blue background.
- All header tags are centered on the page.

###Implementation
1. Go to [http://jsbin.com/zavut/1/edit](http://jsbin.com/zavut/1/edit)
2. Ensure the CSS tab is open.
3. Add this text:

		body{
		  color:yellow;
		  background-color: darkblue;
		  font-family: Arial;
		}

4. Notice that all nodes in the Output have inherited the style applied to *body*. There is an exception, however.  The links are not yellow.  This is because each web browser has its own default styles which are overriding your specified style.  Below the body style, add this style:

		a{
		 color:yellow;
		}

5. Finally, add this style below the anchor style.

		h1,h2,h3,h4,h5,h6{
		 text-align:center;
		}

In the code above, we created some basic CSS using this syntax:

	selector { attribute1 : value1; }

A selector identifies which nodes to apply a style to, and there are many ways to select document nodes.

Try adding these styles:

	/* make all delete links look like they're not allowed */
	a.action-delete{ 
	  cursor:not-allowed;  
	}
	/* change the style for delete links when the mouse is overhead */
	a.action-delete:hover{
	  color:red;
	  font-weight:bold;
	}

The first style selects all links with a class of *action-delete* and applies a cursor style.  And the next style targets the same links but only when the mouse is placed over them.  Also notice that `/* stuff goes here */` can be used to place comments in style sheets.

There is much more to CSS. A word of caution, some styles are not implemented consistently across devices, browsers, and versions of browsers.  Depending on your audience, you may need to test across many web browsers and/or devices.

### Further Learning
[http://www.csszengarden.com/](http://www.csszengarden.com/)
[http://www.w3schools.com/css/](http://www.w3schools.com/css/)

### Exercises
1. Add a style that makes all links bold.
2. Add a 3 pixel dashed border to the body. Refer to [http://www.w3schools.com/cssref/pr_border.asp](CSS Border Property)

##Improving the User Experience with JavaScript
After using Friender for some time, we have found that maintaining all of these friends is too much work.  To alleviate this issue, we will not implement the *Unfriend* feature. First, we'll look at how this would be accomplished via normal static HTML pages and then improve the work flow with JavaScript.

###Unfriending **without** JavaScript
Here is how the work flow would work without JavaScript.  All links in the jsbin pages below are non-functional and are provided for demonstration purposes only.  You will need to browse to each page to simulate the click.

1. From the base application page, click *Unfriend* -> [http://jsbin.com/runoj](http://jsbin.com/runoj)
2. To help avoid accidentally unfriending someone, provide a confirmation -> [http://jsbin.com/boliwe/4](http://jsbin.com/boliwe/4). Also notice this page uses a form tag with a *DELETE* method attribute.  Any data modification should **never** occur through a simple link or default web *GET* method attribute.  This is particularly important on public web sites where crawlers like Google follow all links, and, as a result, would removed all of your friends.
3. Finally, we offer a confirmation page to indicate a successful unfriending. [http://jsbin.com/fazen/1](http://jsbin.com/fazen/1).  
4. Not show here. But what happens when unfriending fails?  In a purely static HTML world, we would need to create an maintain another page.

###Unfriending **with** JavaScript
Now, let's use JavaScript and attempt to improve the unfriending experience.  

Here's your starting point: [http://jsbin.com/puruf/7/edit](http://jsbin.com/puruf/7/edit).  Open the JavaScript tab and add in the following code blocks sequentially to the jsbin.  Upon completion, the output tab should handle unfriending without full page postbacks.   JavaScript is a complex general purpose programming language, and much of this code may be confusing.  For the moment, try to relate what is happening on the screen with the code provided.  The provided comments should offer some help.  JavaScript comments can start with two backslashes `// my comment`, or you can use `/* type comments here */` for multi-line commenting just like CSS.

1. First, we need to reference all links classified as *action-unfriend*.

		var unfriendlinks = document.getElementsByClassName('action-unfriend');

2. Now that we have the links, loop through them all and bind a function to handle clicking on those links.

		// When clicking these links
		// call the onUnFriendClick function
		for( var i = 0; i < unfriendlinks.length; i++){
			var unfriendlink = unfriendlinks[i];  
			unfriendlink.addEventListener('click', onUnfriendClick);
		}

3. And here is the onUnfriendClick implementation to actually remove the friend from your list.  

		function onUnfriendClick(e){
			e.preventDefault();    
			//
			// Reference some nodes for re-use.
			//
			// NOTES: 
			// 'this' refers to the clicked element,
			// the anchor tag in this case.  
			// Siblings are nodes on the same level
			// with the same parent in the DOM.. very 
			// similar to most modern families 
			var nodes = {
				link : this,
				text : this.nextSibling,
				listItem : this.parentNode,
				list : this.parentNode.parentNode
			};	  
			var isSure = confirm(
				'Unfriending' + 
				this.nextSibling.textContent + 
				'. Click OK to continue.'
			);
			if( isSure ){
				// Normally, here you would interact with 
				// a service to perform the unfriending
				// against a data store.
				// For now,  we'll just remove the containing
				// li element.
				//
				// memory leaks may occur if you don't
				// remove event bindings
				nodes.link.removeEventListener('click', onUnfriendClick);
				//
				// access the parent list and remove the list item
				nodes.list.removeChild(nodes.listItem);
			}
		}

At this point, you should be able to unfriend all of your cumbersome friends with ease.  How does this user experience compare to the previous implementation?

###Further Learning
[http://www.w3schools.com/js/](http://www.w3schools.com/js/)

###Exercises

1. In addition to the friend name being displayed, we would like to provide feedback on the list item that would be affected.  Modify onUnfriendClick() to style the target list item with *line-through*.  Then, if the unfriending is canceled, remove the line-through style.

2. This code can be greatly simplified using jQuery.  Re-factor the code to use jQuery for managing bindings and DOM manipulation.

##Conclusion
Hopefully, this basic introduction has served to illustrate the value of supplementing HTML with CSS and JavaScript.  Mastering these topics will increase the maintainability and usability of your web applications.  JavaScript use, in particular, has increase greatly in recent years.  Not only can JavaScript more easily unfriend your friends, but it can also...

- store them in a JavaScript database: [http://www.mongodb.org/](http://www.mongodb.org/)
- serve them up with through JavaScript-based web api: [http://nodejs.org/](http://nodejs.org/)
- share them with others via a mobile application interface: [http://phonegap.com/](http://phonegap.com/)

If you want to learn more about HTML, CSS, and/or JS, take a look at these web sites:

- [w3schools.com](http://www.w3schools.com/): reference and learn-by-doing exercises (Free!)
- [code school](https://www.codeschool.com/): Videos, learn-by-doing exercises, and progress tracking (Monthly paid subscription with some free courses)
- [pluralsight](http://pluralsight.com/training): Videos (Monthly paid subscription, a trial is available)