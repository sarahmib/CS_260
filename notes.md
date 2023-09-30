ssh -i ~/keys/production.pem ubuntu@53.104.2.123  
Example command to remote shell into the website server  

54.164.218.68  
^^ IP address  

# HTML
Elements are represented with enclosing tags. Closing tags will have a /. For example, these tags will make a paragraph `<p></p>`  

```
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
The html tags represent the top level structure. the head element has metadata about the page as well as the page title (what you see on tabs in the browser). The body represents content structure. The main represents the main content structure as opposed to headers, footers, asides, and navigation content

Every HTML element may have attributes that describe the details of that element. The `id` attribute gives the element a unique ID to distinguish it from others. The `class` attribute designates it as being part of a larger class. Attributes are written inside the element tag with a name and optional value in single or double quotes  
`<p id="hello" class="greeting">Hello world</p>`

A hyperlink is done with an `a` element that has an href attribute (hyperlink reference)  
`<a href="https://byu.edu">Go to the Y</a>`  

HTML defines a header that tells the browser the type and version of the document. Always include this at the top of an HTML file  
`<!DOCTYPE html>`  

element	      meaning
html	        The page container
head	        Header information
title	        Title of the page
meta	        Metadata for the page such as character set or viewport settings
script	      JavaScript reference. Either a external reference, or inline
include	      External content reference
body	        The entire content body of the page
header	      Header of the main content
footer	      Footer of the main content
nav	          Navigational inputs
main	        Main content of the page
section	      A section of the main content
aside	        Aside content from the main content
div	          A block division of content
span	        An inline span of content
h<1-9>	      Text heading. From h1, the highest level, down to h9, the lowest level
p	            A paragraph of text
b	            Bring attention
table	        Table
tr	          Table row
th	          Table header
td	          Table data
ol,ul	        Ordered or unordered list
li	          List item
a	            Anchor the text to a hyperlink
img	          Graphical image reference
dialog	      Interactive component such as a confirmation
form	        A collection of user input
input	        User input field
audio         Audio content
video	        Video content
svg	          Scalable vector graphic content
iframe	      Inline frame of another HTML page

Comments start with `<!--` and end with `-->`

HTML reserves a few characters for format definition. `>`, for example. To just type the character itself, you have to use entity syntax

Character	  Entity
&	          &amp;
<	          &lt;
>	          &gt;
"	          &quot;
'	          &apos;

Entity syntax can represent any unicode character

Web server will display the index.html file by default, so it's common to name the main HTML file for the web app you're making index.html

```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```
nav represents a section of page whose purpose is to provide navigation links


Block element - meant to be a distinct block within the flow of the content structure (ex. `<p>`)
Inline element - in line with the content flow of a block element (ex. `<b>`)

`img src="pic_trulli.jpg" alt="Italian Trulli">`
^^how to put in images
Images have two required attributes: the source, and the alt (the text that shows up when you scroll over it)

The style attribute can style width and height, or you can use the width/height attributes
`<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">`
`<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`

Elements for accepting user input data

Element	    Meaning	                              Example
form	      Input container and submission	      <form action="form.html" method="post">
fieldset	  Labeled input grouping	              <fieldset> ... </fieldset>
input	      Multiple types of user input	        <input type="" />
select	    Selection dropdown	                  <select><option>1</option></select>
optgroup	  Grouped selection dropdown	          <optgroup><option>1</option></optgroup>
option	    Selection option	                    <option selected>option2</option>
textarea	  Multiline text input	                <textarea></textarea>
label	      Individual input label	              <label for="range">Range: </label>
output	    Output of input	                      <output for="range">0</output>
meter	      Display value with a known range	    <meter min="0" max="100" value="50"></meter>

The main purpose of the form element is to submit the value of the input it contains. With advancements in JavaScript, it's become less vital, but is often still used as a container

```
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```

The submit button sends this data to the server `ta-id=Some+text` by combining textarea's name attribute with whatever is input in the textarea

Types of the input element, done with the `type` attribute

Type	          Meaning
text	          Single line textual value
password	      Obscured password
email	          Email address
tel	            Telephone number
url	            URL address
number	        Numerical value
checkbox	      Inclusive selection
radio	          Exclusive selection
range	          Range limited number
date	          Year, month, day
datetime-local	Date and time
month	          Year, month
week	          Week of year
color	          Color
file	          Local file
submit	        button to trigger form submission

Example of a checked radio button `<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />`

Most input elements share common attributes

Attribute	    Meaning
name	        The name of the input. This is submitted as the name of the input if used in a form
disabled	    Disables the ability for the user to interact with the input
value        	The initial value of the input
required    	Signifies that a value is required in order to be valid

Many input elements have validation built in -- for example, an input with the url attribute won't accept something that's not a url
You can specify the required attribute
The `pattern` attribute exists on `text`, `search`, `url`, `tel`, `email`, and `password` inputs. When present, the pattern attribute provides a regular expression that must match for the input to be considered as valid.

Also have validation built into JS. Good display also uses CSS to help users visualize validity

`value` is another attribute that can be added to the element input with the type color that changes the default input color from black. Use hexidecimal notation

HTML media elements are `img`, `video`, `audio`, `svg`, and `canvas`. The first three are references to an external file, but svg and canvas contain code to render a visual images that can be animated

All elements that link to external media have a required reference attribute

Images:
`<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />`

Audio:
`<audio controls src="testAudio.mp3"></audio>`
The `controls` attribute allows the user to control audio playback
The `autoplay` attribute automatically plays the audio as soon as the file loads
The `loop` attribute plays the audio over and over

Video:
```<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>```
Can use the same `controls` and `autoplay` attributes as you can with `audio`. May need to include the `crossorigin="anonymous"` if you're requesting files from a domain that's not the one serving your content

SVG (scalable vector graphics)
```
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```

The `canvas` element facilitates drawing and 2D animation
HTML is fairly simple, but actually drawing on the canvas requires JS
```
<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```
