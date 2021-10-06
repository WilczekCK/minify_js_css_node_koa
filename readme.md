Tool for minifying CSS and JS files
==================================

<h2>Must have:</h2>
<ul>
    <li> Node version >= 14.18.0 </li> 
    <li> Working terminal </li>
    <li> Of course, Install all dependencies! (npm i) </li>
</ul>


<h2>How it works?</h2>

<p>Compile CSS with <a href="https://cssnano.co/">NanoCSS</a></p>
<p>Compile JS with <a href="https://terser.org/">Terser</a></p>

<ol>
<li> Insert a .zip package ( <b>with directory inside, which use the same name, zip should contain directory first, inside it all files</b> ) into the root directory. </li>
<li> Edit the <b>files_to_compile.json</b> in <b>assets</b> directory, provide files which should be minified (WARNING, DO NOT ADD .js or .css ending!)</li>
<li> Get into the directory using terminal </li>
<li> Use command: 
    npm run bundle [name_of_package]
    ex. npm run bundle myscript 
</li>
<li> Wait, it will compile [name_of_package]_minified.zip package</li>
<li> DONE</li>
</ol>

<h2>CHANGELOG</h2>
<ul>
    <li>06.10.2021 -> Minify CSS/JS</li>
</ul>

    
