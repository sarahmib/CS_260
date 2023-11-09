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

# JavaScript
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

JS regular expressions
Create a regex using the class constructor, or make a regex literal
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

the `string` class has several functions that accept regex -- `match`, `replace`, `search`, and `split` can all take a regex. `test` returns true if the regex is found in the string

```
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
Rest in JS

Prefixing the last argument of a function with 3 periods is the `rest` syntax. It takes all the rest of the inputs and puts it into an array for you. This is useful when you don't know how many parameters will be passed into the function
```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
This is a function that checks to see if the number `test` is contained within `numbers`

Only the last parameter can be a `rest`

a `spread` does the opposite of `rest`. It takes an iterable like an array and spreads it out into function parameters
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
Exceptions are in JS using the `try catch` and `throw` syntax
`finally` is also supported

```
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```

Fallback
If the normal feature isn't available, it's common to have a fallback feature
```
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```

Destructuring pulls individual items out of an existing larger one

```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Even though it looks like you're declaring an array with `b` and `c`, you're actually destructuring

Combine multiple using `rest` syntax
```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
When destructuring objects, say specifically what you want to take out
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

Default values can also be provided for missing ones

```
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

```
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

can declare with the `object-literal` syntax which allows you to provide the intial composition
```
const obj = {
  a: 3,
  b: 'fish',
};
```
Object static functions
Function	  Meaning
entries	    Returns an array of key value pairs
keys	      Returns an array of keys
values	    Returns an array of values

```
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

Any function that returns an object is a constructor and can be invoked with the `new` operator
```
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Can create methods on the object as part of encapsulation

```function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations.
```
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```
Make properties and functions private with #

Classes can be extended using `extends`. Use `super` to access the superclass

`this`

Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
Object - When this is referenced in an object it refers to the object.

Common JSModules are imported with Node.js. ES modules are modules built into JS

Because modules create a file-based scope for the code they represent, you must explicitly export the objects from one file and then import them into another file

```
export function alertDisplay(msg) {
  alert(msg);
}
```

```
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

From your HTML, you can specify that you are using an ES module by including a type attribute with the value of module in the script element. You can then import and use other modules. This is shown in the example below.

```
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```

If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope. We do this by either attaching an event handler or explicitly adding a function to the global window object. In the example below, we expose the alertDisplay imported module function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler. We also expose the module function by attaching a keypress event.

```
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

If the button is pressed, now the module function will be called

Don't usually have to differentiate between ES scope and global

Document Object Model (DOM) is an object representation of HTML elements that the browser uses to render the display

Browser also exposes the DOM to external code so you can dynamically change the HTML

Browser provides access to DOM through the global variable `document` that points to the root element of the DOM
If you open a browser's debugger console and type `document`, you'll see the DOM for the file that the page is currently rendering

For everything in an HTML document, there's a node in the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.

```
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

ou can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

DOM supports ability to insert, modify, or delete elements. To create an element, first create it on the DOM document, then insert the element by appending it to an existing element on the DOM tree

```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements, call the `removeChild` function on the parent element
```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

If you're injecting HTML, make sure it can't be manipulated by the user. Otherwise it's a way for hackers to get in

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.
`<button onclick='alert("clicked")'>click me</button>`

The browser's localStorage API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded. The user's name will also be available in local storage the next time the same browser is used to access the same website.

In addition to persisting application data between page renderings, localStorage is also used as a cache for when data cannot be obtained from the server. For example, your frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

four main functions with localStorage
Function	Meaning
setItem(name, value)	Sets a named item's value into local storage
getItem(name)	Gets a named item's value from local storage
removeItem(name)	Removes a named item from local storage
clear()	Clears all items in local storage

localStorage must be of type string, boolean, or number. If you want to store an object or array, must store it in JSON and then convert it back with JSON.stringify() and JSON.parse()

Debugging JS
https://github.com/webprogramming260/.github/blob/main/profile/javascript/debuggingJavascript/debuggingJavascript.md


In the following code, what does the link element do?
In the following code,  what does a div tag do?
In the following code, what is the difference between the #title and .grid selector?
  #selects by id
  .selects by class
In the following code, what is the difference between padding and margin?
  Padding - space between the content of an element and its inner border
  Margin - space outside the border of an element
  
Given this HTML and this CSS how will the images be displayed using flex?
Container and Items:
To use Flexbox, you need a parent container and one or more child items within it.
The parent container is designated as a flex container using display: flex or display: inline-flex. This activates the flex layout for its children.

Main and Cross Axis:
In the context of Flexbox, the container has two axes: the main axis and the cross axis.
The main axis is the primary axis along which the items are distributed. It's defined by the flex-direction property, which can be set to row, row-reverse, column, or column-reverse.
The cross axis is perpendicular to the main axis.

Flex Items:
Each child item within the flex container is known as a flex item.
By default, flex items will try to size themselves based on their content, but you can control their behavior using various CSS properties.

Alignment:
Flexbox provides powerful alignment and distribution capabilities for both the main and cross axis.
You can use properties like justify-content and align-items to control alignment along the main and cross axes, respectively.
Additionally, you can fine-tune alignment for individual items using properties like align-self.

Flex Properties:
The flex property is a shorthand for specifying how a flex item grows and shrinks to fit available space. It consists of three values: flex-grow, flex-shrink, and flex-basis.
The flex-grow property controls how much an item grows relative to other items if there's extra space available.
The flex-shrink property controls how much an item shrinks when there's not enough space.
The flex-basis property sets the initial size of the item before distribution.

Ordering:
Flex items can be reordered using the order property, allowing you to change their visual order without altering the source order in the HTML.

Nesting:
You can nest flex containers within other flex containers, creating more complex layouts.

Responsive Design:
Flexbox is particularly useful for creating responsive layouts as items can adjust their size and position based on available space.

When you use the flex property in CSS, it typically consists of three values: flex-grow, flex-shrink, and flex-basis. When you set flex: 0, you are essentially specifying values for these three components. Here's what each component means:

flex-grow: This value controls how much an item can grow if there's extra space available in the flex container. A flex-grow value of 0 means that the item won't grow in relation to other items. It will maintain its initial size, and any extra space will be distributed among the other items that can grow (with a flex-grow value greater than 0).

flex-shrink: This value controls how much an item can shrink if there's not enough space to accommodate all the items. A flex-shrink value of 0 means that the item won't shrink. It will maintain its size even if there's not enough space, potentially causing overflow or overlap with other items.

flex-basis: This value sets the initial size of the flex item before any distribution takes place. A flex-basis value of 0 means that the item starts with a size of 0, but it can grow or shrink based on the flex-grow and flex-shrink values, respectively.

What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
The <span> element in HTML has a default CSS display property value of "inline." This means that by default, a <span> element is displayed inline with the surrounding content, and it doesn't create a line break before or after itself. It essentially takes up as much width as necessary to contain its content and doesn't start on a new line.

How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
```
<!DOCTYPE html>
<html>
<head>
    <title>Image with Hyperlink</title>
</head>
<body>
    <a href="https://www.example.com">
        <img src="your-image-source.jpg" alt="Image Description">
    </a>
</body>
</html>
```
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
content => padding => border => margin

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
```
const element = document.getElementById("myParagraph");
element.textContent = "This paragraph's text has been changed.";
// Select the paragraph element by its id
const paragraph = document.getElementById("myParagraph");

// Change the text color to red
paragraph.style.color = "red";
```

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
```
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend.");
        break;
    default:
        console.log("It's a regular day.");
}
```

What is the correct syntax for creating a javascript object?

Object Literal Notation:

Object literal notation is the most common way to create objects in JavaScript. It involves defining key-value pairs within curly braces {}. Keys (property names) are strings, and values can be any valid JavaScript data type.

```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};
```

Object Constructor:

You can create an object using the Object constructor. This approach is less common than object literal notation.

```
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.isStudent = false;
```

Object with Methods:

You can also create objects that include methods (functions) as properties.

```
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
```

Object with ES6 Shorthand:

In ECMAScript 6 (ES6) and later, you can use shorthand property and method syntax to create objects more concisely.

```
const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};
```

Is is possible to add new properties to javascript objects?
Yes, using dot OR bracket notation

If you want to include JavaScript on an HTML page, which tag do you use?
  `<script src="script.js"></script>`
  
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
  chmod -  Stands for "change mode." It is used to change the permissions of files and directories, allowing you to control who can read, write, or execute them.
  pwd - Current directory
  cd - Change directory
  ls - List directory contents
  vim - text editor for the command line - allows you to create and edit text
  nano - Another text editor, good for simple editing tasks
  mkdir - create new directories or folders
  mv - move something from one directory to another
  rm - delete files
  man - used to access the manual pages for commands, providing detailed documentation and usage information.
  ssh - used to establish secure remote connections to other machines, typically for remote administration or file transfer.
  ps - Stands for "process status." It lists running processes on the system, providing information about their status.
  wget - command-line tool for downloading files from the internet. You can use it to fetch files and web pages.
  sudo - used to run commands with superuser or administrative privileges. It is often required for system-level tasks
Which of the following console command creates a remote shell session?
ssh username@remote_host
Replace username with your remote username and remote_host with the hostname or IP address of the remote server.

Which of the following is true when the -la parameter is specified for the ls console command?
when you use the -la option with ls, it displays a long format listing that includes hidden files and directories. The output will show all files and directories, including those with names starting with a dot. This is particularly useful when you want to see all the contents of a directory, including hidden configuration files, for example.

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  Top level - .com, .org, .click, etc.
  root domain - google.com, lds.org, etc.
  subdomain - whatever.thing.com
Is a web certificate is necessary to use HTTPS.
Yes

Can a DNS A record can point to an IP address or another A record.
Yes, a DNS A record can point to either an IP address or another A record. This is a common DNS configuration used for various purposes, such as load balancing, failover, and creating DNS aliases. Here's an explanation of both scenarios:

A Record Pointing to an IP Address:

The most straightforward use of an A record is to map a domain name to an IP address. This allows users' web browsers to resolve a domain name to a specific server's IP address when they visit a website.
For example, you can create an A record like this:
css
Copy code
example.com.       IN A 192.168.1.100
A Record Pointing to Another A Record (DNS Alias):

An A record can also point to another A record, creating a DNS alias or a round-robin DNS configuration. In this setup, the first A record (alias) points to the second A record (target), which, in turn, points to an IP address. This allows you to change the IP address by updating only the second A record, which is then automatically reflected by the alias A record.
Here's an example:
css
Copy code
alias.example.com. IN A target.example.com.
target.example.com. IN A 192.168.1.100
In this case, the "alias.example.com" A record points to "target.example.com," which, in turn, points to the IP address "192.168.1.100." If the IP address needs to change, you only need to update the "target.example.com" A record.
This type of configuration is often used in scenarios like load balancing, where multiple servers share the same domain name, and the DNS system distributes traffic among them. It's also useful for scenarios where failover is necessary, as it allows for quick changes to the target IP address without needing to update all references to the domain.

Port 443, 80, 22 is reserved for which protocol?
Port 443: Port 443 is reserved for the HTTPS (Hypertext Transfer Protocol Secure) protocol. It is used for secure web communications. When you visit a website that uses "https://" in the URL, your web browser communicates with the server using port 443 to establish a secure and encrypted connection.

Port 80: Port 80 is reserved for the HTTP (Hypertext Transfer Protocol) protocol, which is the standard unsecured protocol for web communication. When you visit a website that uses "http://" in the URL, your web browser communicates with the server using port 80.

Port 22: Port 22 is reserved for the SSH (Secure Shell) protocol. SSH is a network protocol used for secure remote access and secure file transfers. It is commonly used for managing and administering remote servers securely.

What will the following code using Promises output when executed?

Frontend and backend
frontend is the HTML, CSS, and JS files accessed by the browser
The next step in building a full stack web application, is to create our own web service. Our web service will provide the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you don't want your user to be able to see, and communicating with other users. The functionality provided by your web service represents the backend of your application.

Generally the functions provided by a web service are called endpoints, or sometimes APIs. You access the web service endpoints from your frontend JavaScript with the fetch function. In the picture below, the backend web service is not only providing the static files that make up the frontend, but also providing the web service endpoints that the frontend calls to do things like get a user, create a user, or get high scores.

Parts of a URL
Part	        Example	                              Meaning
Scheme	      https	                                The protocol required to ask for the resource. For web applications, this is                                                              usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain name	  byu.edu	                              The domain name that owns the resource represented by the URL.
Port	        3000	                                The port specifies the numbered network port used to connect to the domain server.                                                        Lower number ports are reserved for common internet protocols, higher number                                                            ports can be used for any purpose. The default port is 80 if the scheme is HTTP,                                                        or 443 if the scheme is HTTPS.
Path	        /school/byu/user/8014	                The path to the resource on the domain. The resource does not have to physically                                                          be located on the file system with this path. It can be a logical path                                                                  representing endpoint parameters, a database table, or an object schema.
Parameters	  filter=names&highlight=intro,summary	The parameters represent a list of key value pairs. Usually it provides additional                                                        qualifiers on the resource represented by the path. This might be a filter on the                                                       returned resource or how to highlight the resource. The parameters are also                                                             sometimes called the query string.
Anchor	      summary	                              The anchor usually represents a sub-location in the resource. For HTML pages this                                                         represents a request for the browser to automatically scroll to the element with                                                        an ID that matches the anchor. The anchor is also sometimes called the hash, or                                                         fragment ID.

You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

When connecting to a device on the internet, you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (HTTP, HTTPS, SSH, FTP, etc.) as well as different services (search, documentation, etc.). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device

Port	Protocol
20	  File Transfer Protocol (FTP) for data transfer
22	  Secure Shell (SSH) for connecting to remote devices
25	  Simple Mail Transfer Protocol (SMTP) for sending email
53	  Domain Name System (DNS) for looking up IP addresses
80	  Hypertext Transfer Protocol (HTTP) for web requests
110	  Post Office Protocol (POP3) for retrieving email
123	  Network Time Protocol (NTP) for managing time
161	  Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194	  Internet Relay Chat (IRC) for chatting
443	  HTTP Secure (HTTPS) for secure web requests

HTTP is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol

When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like `curl`

`curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html`

The HTTP request for the above command would look like the following.
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

An HTTP request has this general syntax.
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

The response to the request looks like this
```
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

A response has the following syntax
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
Verbs for HTTP request
Verb	    Meaning
GET	      Get the requested resource. This can represent a request to get a single resource or a resource representing a list of                     resources.
POST	    Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly                 created resource.
PUT	      Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The                 body of the request should contain the updated resource. The body of the response may contain the resulting updated                     resource.
DELETE	  Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	  Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.
  1xx - Informational.
  2xx - Success.
  3xx - Redirect to some other location, or that the previously cached resource is still valid.
  4xx - Client errors. The request is invalid.
  5xx - Server errors. The request cannot be satisfied due to an error on the server.

Code	Text	                Meaning
100	  Continue	            The service is working on the request
200	  Success              	The requested resource was found and returned as appropriate.
201	  Created	              The request was successful and a new resource was created.
204	  No Content          	The request was successful but no resource is returned.
304	  Not Modified	        The cached version of the resource is still valid.
307	  Permanent redirect	  The resource is no longer at the requested location. The new location is specified in the response location                               header.
308	  Temporary redirect	  The resource is temporarily located at a different location. The temporary location is specified in the                                   response location header.
400	  Bad request	          The request was malformed or invalid.
401	  Unauthorized	        The request did not provide a valid authentication token.
403	  Forbidden            	The provided authentication token is not authorized for the resource.
404	  Not found            	An unknown resource was requested.
408	  Request timeout	      The request takes too long.
409	  Conflict            	The provided resource represents an out of date version of the resource.
418	  I'm a teapot	        The service refuses to brew coffee in a teapot.
429	  Too many requests    	The client is making too many requests in too short of a time period.
500	  Internal server error	The server failed to properly process the request.
503  	Service unavailable  	The server is temporarily down. The client should try again with an exponential back off.

HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

Header	                Example	                               Meaning
Authorization	Bearer    bGciOiJIUzI1NiIsI	                     A token that authorized the user making the request.
Accept	                image/*	                               What content format the client accepts. This may include wildcards.
Content-Type	          text/html; charset=utf-8	             The format of the response content. These are described using standard                                                                     MIME types.
Cookie	                SessionID=39s8cgj34; csrftoken=9dck2	 Key value pairs that are generated by the server and stored on the                                                                         client.
Host	                  info.cern.ch	                         The domain name of the server. This is required in all requests.
Origin	                cs260.click	                           Identifies the origin that caused the request. A host may only allow                                                                       requests from specific origins.
Access-Control-
  Allow-Origin	        https://cs260.click	                   Server response of what origins can make a request. This may include a                                                                     wildcard.
Content-Length	        368	                                   The number of bytes contained in the response.
Cache-Control	          public, max-age=604800	               Tells the client how it can cache the response.
User-Agent	            Mozilla/5.0 (Macintosh)	               The client application making the request.

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.

```
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```
The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.
```
HTTP/2 200
Cookie: myAppCookie=tasty
```
This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies; the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

Security:
Security should always be on your mind when you are working with the web. The ability to provide services to a global audience makes the information on the web very valuable, and therefore an attractive target for nefarious parties. When website architecture and browser clients were still in their infancy they allowed JavaScript to make requests from one domain while displaying a website from a different domain. These are called cross-origin requests.

Consider the following example. An attacker sends out an email with a link to a hacker website (byu.iinstructure.com) that is similar to the real course website. Notice the additional i. If the hacker website could request anything from the real website then it could make itself appear and act just like the real education website. All it would have to do is request images, html, and login endpoints from the course's website and display the results on the hacker website. This would give the hacker access to everything the user did.

To combat this problem the Same Origin Policy (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from byu.iinstructure.com for service endpoints that are made to byu.instructure.com would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.

CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.

When you make requests to your own web services you are always on the same origin and so you will not violate the SOP. However, if you want to make requests to a different domain than the one your web application is hosted on, then you need to make sure that domain allows requests as defined by the Access-Control-Allow-Origin header it returns. For example, if I have JavaScript in my web application loaded from cs260.click that makes a fetch request for an image from the website i.picsum.photos the browser will fail the request with an HTTP status code of 403 and an error message that CORS has blocked the request.

That happens because i.picsum.photos does not return an Access-Control-Allow-Origin header. Without a header the browser assumes that all requests must be made from the same origin.

If your web application instead makes a service request to icanhazdadjoke.com to get a joke, that request will succeed because icanhazdadjoke.com returns an Access-Control-Allow-Origin header with a value of * meaning that any origin can make requests to this service.

fetch API
Today, the fetch API is the preferred way to make HTTP requests. The `fetch` function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise `then` function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote.

```
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

Response
```
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```

To do a POST request you populate the options parameter with the HTTP method and headers.
```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

Nodes + packages
https://github.com/webprogramming260/.github/blob/main/profile/webServices/node/node.md

Node package `express` provies support for
  Routing requests for service endpoints
  Manipulating HTTP requests with JSON body content
  Generating HTTP responses
  Using `middleware` to add functionality

How to use `express`
https://github.com/webprogramming260/.github/blob/main/profile/webServices/express/express.md

Web services
https://github.com/webprogramming260/.github/blob/main/profile/webServices/design/design.md
