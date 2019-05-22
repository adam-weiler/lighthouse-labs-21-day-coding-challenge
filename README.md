# Lighthouse Labs 21 Day Coding Challenge
https://coding-challenge.lighthouselabs.ca

### Challenges

#### Challenge #1
<details>
  <summary>Instructions</summary>
  You are the captain of the exploratory vessel, the ISS Lighthouse, on a mission to explore the galaxy. Just as you depart the solar system, you encounter a gigantic space bug, which knocks you off course! Now you're lost in space, your radio and navigation are out, and it's up to you to work with your computer to get things going again.

  Fortunately, your ship enabled your LARRY (Language-Aware Repair Robot of the Year), when the systems went offline. For some reason, the engineers who created LARRY made him duck-shaped, but he is very good at doing exactly what he is told to do. He has a terminal on his back that lets you use JavaScript to make changes to the ship.

  Your job as captain of the ISS Lighthouse is to use your JavaScript skills to talk to LARRY and get your ship back in working order! You've got 21 days to fix the navigation and radio before the command centre back on Earth gets worried and launches another ship to come looking for you.

  "POWER OFF!" quacks LARRY. That sounds like a big problem! You should probably get the power back on, otherwise things are not going to go very well for you in the depths of uncharted space! Unfortunately, the manual for your ship is hard to read in the dark.

  "Ship's powerOn property set to false!" LARRY exclaims. "MUST CHANGE VALUE! QUACK!" Okay, that sounds pretty serious. Fortunately, you remember from orientation that there are things called "properties" in JavaScript. You access properties using the '.' operator. With just the light from LARRY's terminal, you need to write a function called **powerOn()** which will change the 'powerOn' property of the 'ship' object. If that's set to 'false', changing it to 'true' should get things going.

  You don't need to define the ship variable in the evaluator since it already exists in the system. You can view it's properties by clicking the **Show Global Objects** link above.
</details>

<details>
  <summary>Hint</summary>
  This challenge is about creating a Function and working with an Object Property in JavaScript.

  On Functions:

  How to define functions in JavaScript
  CodeCademy tutorial on Functions

  On Object Properties

  Digital Ocean's tutorial on modifying object properties.

  You can set values in JavaScript using a single equals sign."

  Example of Global objects available

  Look for the "Show Global Objects" link right before the challenge number on this page.
</details>

#### Challenge #2
<details>
  <summary>Instructions</summary>
  The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red, and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"

  What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.

  You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the **availableModules** array. Each module is an object, with four properties:

  * the **name** of the module is a string

  * the **size** of the module is an integer

  * the **enabled** and **essential** properties are booleans
  
  Start off by finding out how many modules there are. Make a function called **countModules** to reveal how many modules there are to choose from.
</details>

<details>
  <summary>Hint</summary>
  While there's a lot of information about the module here, the simple challenge is to find out how many modules there are. They're stored in an array, and what we need is to find out how long the array is. Check out these resources:

  Here are some Digital Ocean tutorials on Understanding Arrays in JavaScript
  You can also work with arrays on CodeCademy
  Khan Academy also has some good exercises that you can do here
</details>

#### Challenge #3
<details>
  <summary>Instructions</summary>
  "QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

  Use your JavaScript skills to write a function called **countEssential()** which will count how many modules from the **availableModules** array have the **essential** flag set to **true**.
</details>

<details>
  <summary>Hint</summary>
  This is a bit more complex. We need to loop through the **availableModules** array, and count how many of the modules have the **essential** flag set to **true**. Before you write your loop, you'll probably want to make a new variable to keep track of the number of essential modules as you count them

  Here's some resources on looping:

  Learn about Looping
  You can also check out CodeCademy
</details>

#### Challenge #4
<details>
  <summary>Instructions</summary>
  "DANGER QUACK DANGER QUACK!"

  LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, you need to load them into the ship's systems.

  Write a function called **loadModule()**. It needs to take a parameter, called index. Your function should be set up like this:

  **function loadModule(index) { }**

  When **loadModule()** gets the index number of a module, it should do the following:

  Access the right module by using the **index** parameter. Remember how to access particular items in an array? If not, this resource might help you
  Check if the module's essential flag is set to true. If it isn't, **return null**;
  Set the modules enabled flag to **true**
  Load the corresponding module from the **availableModule**s array into the ship’s modules property (which is also an array).
  "ALMOST THERE" quacks LARRY. The modules still aren't loading it seems. You realize you need to get the index from somewhere, so you decide to write another function called **loopModule()** that will loop over the **availableModules** array and find the module with the name life-support to get its index. Once you have the right index, use your **loadModule()** function to load the **life-support** module. Don't forget, you'll need to call your **loopModule()** function for it to run
</details>

<details>
  <summary>Hint</summary>
  Oh my gosh, there's a few steps here. First, you need to make a new function. We've done that a few times now. Then you need to get that function to do three things:

  Find the module by its index and check if it's essential flag is set to true
  Set its **enabled** property to **true** (Remember setting object properties from challenge #1?)
  Add that module to the ship's **modules** array.
  The first steps are easy, because you just need to access the **availableModules** array with the index, using the [] notation and use a conditional to check if it's an essential module.

  For the second step, use the same strategy you used to turn the power on in Challenge #1. The last step uses a method called **.push()**. You can read up on how array pushing works here.

  Also, don't forget to use your **loopModule()** function to find the index of the **life-support** module. You'll need to pass this index as a parameter to your your **loadModule()** function to activate it!
</details>

#### Challenge #5
"BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

You can re-use your code from before, but this time you should do what all good programmers do: modularize your code. Write a function called findModuleIndex() which will take in a name that you’re looking for, and return the index of that module in the availableModules array. Remember: it has to have the essential flag, too!

Use your findModuleIndex function to find the "propulsion" module and then load it into the ship's system.

#### Challenge #6
"NAVIGATION SYSTEM needed," LARRY tells you. Navigation is important - you can't move through space without it!

Use your already-defined methods and load in the "navigation" module. It's pretty simple once you have the functions to do it, and LARRY's eyes are finally easing from red back to normal.

#### Challenge #7
You look over at LARRY, expecting him to quack out his next prompt, but it seems LARRY is now the one malfunctioning! You open up the manual, and find the section on LARRY. Apparently, loading modules can sometimes cause LARRY to get stuck in an infinite loop.

You can fix him, you'll just need to write some code! Write and call a function called resetLARRY() which will prompt LARRY to quack ten times so he breaks out of his loop.

There is a function called LARRY.quack() that you can use in your code.

#### Challenge #8
The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.

"COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent! Luckily, you've got the code for this. Load the module called "communication" using findModuleIndex() and loadModule() from before.




#### Global Objects
<details>
  <summary>Global Objects</summary>
  There are a few objects you're going to be working with and their initial values. This is only a subset of them, to give you a idea of what they look like. You can see below that they're all messed up:

    var navigation = {
      x: -2,
      y: 4,
      z: 7,
      speed: "raaaaid"
    };

    var ship = {
      powerOn: false,
      modules: [],
      antenna: {
        active: false
      }
    };

    var radio = {
      range: {
        low: 88,
        high: 108,
      },
      frequency: 0,
      message: "Bugs are cool.",
      beacon: false
    };
</details>


