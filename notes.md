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

element	      meaning <br>
html	        The page container<br>
head	        Header information<br>
title	        Title of the page<br>
meta	        Metadata for the page such as character set or viewport settings<br>
script	      JavaScript reference. Either a external reference, or inline<br>
include	      External content reference<br>
body	        The entire content body of the page<br>
header	      Header of the main content<br>
footer	      Footer of the main content<br>
nav	          Navigational inputs<br>
main	        Main content of the page<br>
section	      A section of the main content<br>
aside	        Aside content from the main content<br>
div	          A block division of content<br>
span	        An inline span of content<br>
h<1-9>	      Text heading. From h1, the highest level, down to h9, the lowest level<br>
p	            A paragraph of text<br>
b	            Bring attention<br>
table	        Table<br>
tr	          Table row<br>
th	          Table header<br>
td	          Table data<br>
ol,ul	        Ordered or unordered list<br>
li	          List item<br>
a	            Anchor the text to a hyperlink<br>
img	          Graphical image reference<br>
dialog	      Interactive component such as a confirmation<br>
form	        A collection of user input<br>
input	        User input field<br>
audio         Audio content<br>
video	        Video content<br>
svg	          Scalable vector graphic content<br>
iframe	      Inline frame of another HTML page<br>

Comments start with `<!--` and end with `-->`

HTML reserves a few characters for format definition. `>`, for example. To just type the character itself, you have to use entity syntax

Character	  Entity<br>
&	          &amp;<br>
<	          &lt;<br>
>	          &gt;<br>
"	          &quot;<br>
'	          &apos;<br>

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

Element	    Meaning	                              Example<br>
form	      Input container and submission	      <form action="form.html" method="post"><br>
fieldset	  Labeled input grouping	              <fieldset> ... </fieldset><br>
input	      Multiple types of user input	        <input type="" /><br>
select	    Selection dropdown	                  <select><option>1</option></select><br>
optgroup	  Grouped selection dropdown	          <optgroup><option>1</option></optgroup><br>
option	    Selection option	                    <option selected>option2</option><br>
textarea	  Multiline text input	                <textarea></textarea><br>
label	      Individual input label	              <label for="range">Range: </label><br>
output	    Output of input	                      <output for="range">0</output><br>
meter	      Display value with a known range	    <meter min="0" max="100" value="50"></meter><br>

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

Type	          Meaning<br>
text	          Single line textual value<br>
password	      Obscured password<br>
email	          Email address<br>
tel	            Telephone number<br>
url	            URL address<br>
number	        Numerical value<br>
checkbox	      Inclusive selection<br>
radio	          Exclusive selection<br>
range	          Range limited number<br>
date	          Year, month, day<br>
datetime-local	Date and time<br>
month	          Year, month<br>
week	          Week of year<br>
color	          Color<br>
file	          Local file<br>
submit	        button to trigger form submission<br>

Example of a checked radio button `<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />`

Most input elements share common attributes

Attribute	    Meaning  <br>
name	        The name of the input. This is submitted as the name of the input if used in a form  <br>
disabled	    Disables the ability for the user to interact with the input  <br>
value        	The initial value of the input  <br>
required    	Signifies that a value is required in order to be valid  <br>

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
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

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

CSS defines rules - selectors apply the rule to a certain thing, which is followed by a declaration that determines what value a property has -- for example, `color:green` has both the property (color) and the value (green).

```
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
^^this rule applies these properties to the paragraph element of HTML

associating CSS with HTML can be done directly using the `style` attribute of an HTML element, or you can use the style element itself to write a rule
finally, you can use HTML `link` to link to an external CSS document that contains the rules
`<link rel="stylesheet" href="styles.css" />`

Any definition at a lower level will override one at a higher level. Style explicitly defined on the element will override span which will override p which will override body

CSS defines everything as boxes. Defining styles defines a box on the page. Then, there's content, padding, border, and margin, from the inside to the outside. Padding does background color. Border is the border. Margin defines the area around the box. Width and height of an element is defined by the width and height of the content box

You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.

```
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```
Example of styling

Combinators
```
section h2 {
  color: #004400;
}
```
for example, this changes h2 headings, but only ones contained within section tags

Combinator	        Meaning	                      Example	        Description<br>
Descendant	        A list of descendants	        body section	  Any section that is a descendant of a body<br>
Child	              A list of direct children	    section > p	    Any p that is a direct child of a section<br>
General sibling	    A list of siblings	          p ~ div	        Any p that has a div sibling<br>
Adjacent sibling	  A list of adjacent sibling	  p + div         Any p that has an adjacent div sibling<br>

ex.
```
h2 ~ p {
  padding-left: 0.5em;
}
```
increase whitespace padding to the left of sibling paragraphs

Apply to a class
```
p.summary {
  font-weight: bold;
}
```
This will apply to a paragraph with the class summary

Apply based on ID
```
#physics {
  border-left: solid 1em purple;
}
```

Apply based on attributes (applies to everything with a certain attribute)
```
p[class='summary'] {
  color: red;
}
```

Pseudo selector
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.
```
section:hover {
  border-left: solid 1em purple;
}
```

Property	          Value	                              Example	              Discussion<br>
background-color	  color	                               red	                Fill the background color<br>
border	            color width style                  	#fad solid medium	    Sets the border using shorthand where any or all of the                                                                                    values may be provided<br>
border-radius	      unit	                              50%	                  The size of the border radius<br>
box-shadow	        x-offset y-offset blu-radius color	2px 2px 2px gray	    Creates a shadow<br>
columns	            number	                            3                     Number of textual columns<br>
column-rule	        color width style	                  solid thin black	    Sets the border used between columns using border shorthand<br>
color	              color	                              rgb(128, 0, 0)	      Sets the text color<br>
cursor	            type	                              grab	                Sets the cursor to display when hovering over the element<br>
display	            type	                              none	                Defines how to display the element and its children<br>
filter	            filter-function	                    grayscale(30%)	      Applies a visual filter<br>
float	              direction	                          right	                Places the element to the left or right in the flow<br>
flex			                                                                    Flex layout. Used for responsive design<br>
font	              family size style	                  Arial 1.2em bold	    Defines the text font using shorthand<br>
grid			                                                                    Grid layout. Used for responsive design<br>
height	            unit	                              .25em	                Sets the height of the box<br>
margin	            unit	                              5px 5px 0 0	          Sets the margin spacing<br>
max-[width/height]	unit	                              20%	                  Restricts the width or height to no more than the unit<br>
min-[width/height]	unit	                              10vh	                Restricts the width or height to no less than the unit<br>
opacity	            number	                            .9	                  Sets how opaque the element is<br>
overflow	          [visible/hidden/scroll/auto]	      scroll	              Defines what happens when the content does not fix in its                                                                                  box<br>
position	          [static/relative/absolute/sticky]	  absolute	            Defines how the element is positioned in the document<br>
padding	            unit	                              1em 2em	              Sets the padding spacing<br>
left	              unit	                              10rem	                The horizontal value of a positioned element<br>
text-align	        [start/end/center/justify]	        end	                  Defines how the text is aligned in the element<br>
top	                unit	                              50px	                The vertical value of a positioned element<br>
transform	          transform-function	                rotate(0.5turn)	      Applies a transformation to the element<br>
width	              unit	                              25vmin	              Sets the width of the box<br>
z-index	            number	                            100	                  Controls the positioning of the element on the z axis<br>

Units
Unit	  Description<br>
px	    The number of pixels<br>
pt	    The number of points (1/72 of an inch)<br>
in	    The number of inches<br>
cm    	The number of centimeters<br>
%	      A percentage of the parent element<br>
em	    A multiplier of the width of the letter m in the parent's font<br>
rem    	A multiplier of the width of the letter m in the root's font<br>
ex	    A multiplier of the height of the element's font<br>
vw	    A percentage of the viewport's width<br>
vh	    A percentage of the viewport's height<br>
vmin  	A percentage of the viewport's smaller dimension<br>
vmax	  A percentage of the viewport's larger dimension<br>

Colors
Method	      Example	                      Description<br>
keyword	      red	                          A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)<br>
RGB           hex	#00FFAA22 or #0FA2	      Red, green, and blue as a hexadecimal number, with an optional alpha opacity<br>
RGB function	rgb(128, 255, 128, 0.5)	      Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha                                                   opacity percentage<br>
HSL	          hsl(180, 30%, 90%, 0.5)	      Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the                                                365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and                                                      light is how bright the color is.<br>

CSS fonts
4 major font families: serif, sans-serif, fixed, and symbol

for custom fonts, import them and they'll be hosted on your server
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

or if you want to use open source fonts from, for example, Google, just import the link and the CSS will generate in
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

CSS to animate

Specify that you're animating certain elements with animation-name that will be used to determine the keyframes
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```

Just need to define keypoints -- not everything that happens during the animation
```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```

This will make it bounce out a little bigger than its final size by making that happen 95% of the way through the animation
```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

CSS display property
Allows you to change how the HTML elements appear in a browser

Value	  Meaning
none  	Don't display this element. The element still exists, but the browser will not render it.<br>
block  	Display this element with a width that fills its parent element. A p or div element has block display by default.<br>
inline	Display this element with a width that is only as big as its content. A b or span element has inline display by default.<br>
flex	  Display this element's children in a flexible orientation.<br>
grid	  Display this element's children in a grid orientation.<br>

This initial HTML
```
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```

Changes a lot in appearance when we add CSS
```
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

Put this in the `head` of your HTML so scaling down stuff doesn't get messy
`<meta name="viewport" content="width=device-width,initial-scale=1" />`

Float
`float` can be used to wrap text. As an example, here's an aside element that has text that wraps around it

```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

`@media` detects the size and orientation of the device and can change the CSS to accomadate it
```
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

Grids
the original HTML
```
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
and the CSS for a grid
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```

https://codepen.io/leesjensen/pen/JjZavjW
^^major Bootstrap functionality

`*` will apply the thing you want to everything in the document
For example, 
```
* {
  font-family: sans-serif
}
```
will make all the text sans serif

### JavaScript
console.log() is JS's built-in function that outputs stuff to the debugger console
Function ex in JS
```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
```

The console object in JS is useful for debugging

create formatted messages in the console `console.log('hello %s', 'world');`
can specify CSS declarations to style the log box `console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');`

To see how long a piece of code is, us `time` and `timeEnd`. It'll output the amount of time between the two were called
```
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

see how many times a block of code was called
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```

Insert JS into HTML either by using the script src attribute or by including it directly in the `<script>` HTML element

index.js
```
function sayHello() {
  console.log('hello');
}
```

index.html
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
Declare variables using `let` or `const`

JS primitive types
Type	    Meaning
Null	    The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
Boolean	  True or false.
Number	  A 64 bit signed number.
BigInt	  A number of arbitrary magnitude.
String	  A textual sequence of characters.
Symbol	  A unique value.

JS doesn't force you to define a variable before using it, so it's possible to have undefined variables

JS object types
Type	    Use	                                                                                      Example
Object	  A collection of properties represented by name value pairs. Values can be of any type.	  {a:3, b:'fish'}
Function	An object that has the ability to be called.	                                            function a() {}
Date	    Calendar dates and times.	                                                                new Date('1995-12-17')
Array	    An ordered sequence of any type.	                                                        [3, 'fish']
Map	      A collection of key value pairs that support efficient lookups.	                          new Map()
JSON	    A lightweight data-interchange format used to share information across programs.	        {"a":3, "b":"fish"}

=== is equality
!== is inequality

Weakly typed - the variable has a type, but that type can be changed when the variable is assigned something else

`if` `else` and `else if` are supported in JS
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
The ternary operator provides a shortened if/else syntax
`a === 1 ? console.log(1) : console.log('not 1');`

&&, ||, and ! all supported

Supported loop types: `for`, `for in`, `for of`, `while`, `do while`, and `switch`

`for in` vs `for of`

`for in` iterates over an iterable's *property names*
```
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```
for arrays, that is the array index, so it will not return the element in the index itself

'for of' iterates over an iterable's *values*
```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

strings with `"` or `'` are just regular strings, and ``` defines a string literal that might contain JS that's concatenated into the string
```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```

String functions
Function	      Meaning
length	        The number of characters in the string
indexOf()	      The starting index of a given substring
split()	        Split the string into an array on the given delimiter string
startsWith()	  True if the string has a given prefix
endsWith()	    True if the string has a given suffix
toLowerCase()	  Converts all characters to lowercase

JS functions
```
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```
Return type is automatically inferred by the assignment of the value to the parameter

Caller can choose what parameters to provide when calling a function, so some parameters may be undefined
```
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```
Can define functions anonymouslty

```
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

Functions can be created within functions

Arrow syntax like in Dart is also in JS
Arrow functions can't be used for constructors or iterator generators

Return with arrow
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

array functions
Function	  Meaning	                                                      Example
push	      Add an item to the end of the array	                          a.push(4)
pop	        Remove an item from the end of the array	                    x = a.pop()
slice	      Return a sub-array	                                          a.slice(1,-1)
sort	      Run a function to sort an array in place	                    a.sort((a,b) => b-a)
values	    Creates an iterator for use with a for of loop	              for (i of a.values()) {...}
find	      Find the first item satisfied by a test function	            a.find(i => i < 2)
forEach	    Run a function on each array item	                            a.forEach(console.log)
reduce	    Run a function to reduce each array item to a single item	    a.reduce((a, c) => a + c)
map	        Run a function to map an array to a new array	                a.map(i => i+i)
filter	    Run a function to remove items	                              a.filter(i => i%2)
every	      Run a function to test if all items match	                    a.every(i => i < 3)
some	      Run a function to test if any items match	                    a.some(i => 1 < 1)

Convert to and from JSON using `JSON.parse` and `JSON.stringify`
