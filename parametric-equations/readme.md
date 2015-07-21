[Jaanga]( http://jaanga.github.io/ ) &raquo; [algeSurf Read Me]( http://jaanga.github.io/algesurf/ ) &raquo;  
[Parametric Equations Read Me]( http://jaanga.github.io/algesurf/parametric-equations/ )
===
<span style=display:none; >[View as web page]( http://jaanga.github.io/algesurf/parametric-equations/ "View file as a web page." ) </span>
<input type=button value='View file as source code on GitHub' onclick=window.location.href='https://github.com/jaanga/algesurf/tree/gh-pages/parametric-equations'; />

<iframe src="http://jaanga.github.io/algesurf/parametric-equations/latest/" width=100% height=500px class='overview' ></iframe>

_Parametric Equations - Latest_ / [Full Screen]( http://jaanga.github.io/algesurf/parametric-equations/latest/ )


Blog post: [AlgeSurf Parametric Equations: Math in 3D - fast, pretty and easy](http://www.jaanga.com/2014/07/algesurf-parametric-equations-math-in.html )

## Concept

### Mission  
<!-- a statement of a rationale, applicable now as well as in the future -->
Part of the AlgeSurf effort to make the visualization of mathematic equations faster, simpler and easier

### Vision  
<!--  a descriptive picture of a desired future state -->
To visualize math and physics in entirely new ways

## Apps

[Parametric Equations Browser R5]( http://jaanga.github.io/algesurf/parametric-equations/r5/algesurf-parametric-equations-ui-r5.html )  

[Parametric Equations Browser R5 API ]( http://jaanga.github.io/algesurf/parametric-equations/r5/algesurf-parametric-equations-api-r5.html )  

[Parametric Equations Browser R4]( http://jaanga.github.io/algesurf/parametric-equations/latest/ )  



## Features
<!-- and benefits -->
Features include the following:

* Loads randomly selected equation and material at start-up and whenever you click the title
* Reads, parses and displays remote Three.js HTML files
* Real-time 3D pan, rotate and zoom
* Access to full complement of materials, reflections, lights, shade and shadows
* Update geometry parameters in real-time
* Topple a variety of parameters wireframe, face & vertex normals
* Select background colors
* Experiment with over 170 parametric equations
* Many thanks to [Jürgen Meier]( http://www.3d-meier.de/ )...

There are two aspects to this effort:

1. The equation files - each containing the code for a single equation and everything need to provide a simple view of the equation.  
2. The browser/viewer/enhancer - adds run-time editing and display options to the basic equation files


## Road Map

* 2015-02-14 ~ Put all the equations in a single file?
* 2015-02-14 ~ Add background radio buttons
* 2015-02-14 ~ Add light controls
* 2015-02-14 ~ Add material editor
* 2015-02-14 Add finder page: lists all the files in compacts single screen with small iframe preview
* 2014 Save changes back to HTML/JSON file
* 2014 Add categories to each equation file



## Issues / Bugs

* IE & FF: background gradient a no-show
* IE & FF: menu accordion (HTML5 <details>) no show
* Auto rotate does not always toggle properly


## Project Links

Jaanga is a [GitHub]( http://github.com) [organization account]( https://help.github.com/articles/what-s-the-difference-between-user-and-organization-accounts ) and has multiple owners and admins. 
All Jaanga scripts are [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ).
Scripts are hosted on GitHub and are viewable as web pages, as described in the 'Read Me' files and as source code.

The three ways of looking at the AlgeSurf PE scripts:

1. [Equation Browser]( http://jaanga.github.io/algesurf/parametric-equations/latest/ )  
2. [Read Me]( http://jaanga.github.io/algesurf/parametric-equations/ "view the files as apps." ) <input value="<< You are now probably here." size=28 style="font:bold 12pt monospace;border-width:0;" >   
3. [Source Code]( https://github.com/jaanga/algesurf/tree/gh-pages/parametric-equations "View the files as source code." ) <scan style=display:none ><< You are now probably here.</scan>  


## System Requirements

In order to run the script you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/)
WebGL is the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins. 

Generally this means a computer with an Intel Core i5 processor or better with an external GPU such as one made by Nvidia. 
Successful use of the script on a phone or tablet is highly unlikely. 
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.
 
The script is currently being built and tested with the Google Chrome browser. 
Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.


## Copyright and License

copyright &copy; 2014 Jaanga authors ~ 
All work herein is under the [MIT License]( http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md )

This repository contains files that are at an early and volatile stage. Not all licensing requirements may have been fully met let alone identified. It is the intension of the authors to play fair and all such requirements will either be met or the feature in question will turned off.


## Change Log

2015-02-15 ~ Theo

* 2015-02-14 ~ Add display of the equation
* 2015-02-14 ~ Add the Jurgen Meier sources
* 2014 Permalinks for equation files and materials
* 2015-02-14 ~ Add start with random equation and material
* 2015-02-14 ~ Add wireframe, face and vertex helpers

2015-02-14 ~ Theo

* Add the sliders
* Materials work OK
* Add the toggles

* Improve handling and cataloguing of materials << road map item completed

2015-02-13 ~ Theo

* PE 4 starting to look good
* Built a script that builds an equations menu from the file names
* Built a script that builds a materials menu
* Add toggleGradient
* Add toggleRotate
* Many updates to Read Me
* Add u,v sliders



2014-07-17 ~ Theo

Materials is such a work in progress. I have not yet completed the required 10,000 hours. Not by a long shot/


2014 ? ~ Theo

* Create R4 folders and files

2014-07-17 ~ Theo

* Translate folder and file names to English
* Center each object in screen
* Add slider bars that update coefficients in real-time
* Add links to source to each file

2014-07-03 ~ Theo

* Add twenty more equations
* Add build-menu.js
* Minor fixes to meier-request...


2014-07-02 ~ Theo

* First Commit

2014-06-16 ~ Theo

* Add max-height to menu: forces scrollbars when menu taller than the screen

R2

2014-06-11 ~ Theo

* All updates from SoundViz brought over
* a number of fixes to JAMA. passes jsHint
* fixes to parametric equations
* Add a default for 'd' in lights
* Using JATH.selectedObject most everywhere
* Added SoundViz prefs to JAPR


2014-06-10 ~ Theo

* Tabs toggle both child divs and separate divs
* When menu display is toggled, tbs revert to the previous display state  
* Lights now jali-lights.js 




