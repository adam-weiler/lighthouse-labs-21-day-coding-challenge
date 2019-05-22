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

  You don't need to define the ship variable in the evaluator since it already exists in the system. You can view it's properties by clicking the *Show Global Objects* link <below>.
</details>

<details>
  <summary>Hint</summary>
  
  This challenge is about creating a *Function* and working with an *Object Property* in JavaScript.

  *On Functions:*

  How to define functions in JavaScript
  CodeCademy tutorial on Functions

  *On Object Properties*

  Digital Ocean's tutorial on modifying object properties.

  You can set values in JavaScript using a single equals sign."

  *Example of Global objects available*

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

  * Learn about Looping
  
  * You can also check out CodeCademy
</details>



#### Challenge #4
<details>
  <summary>Instructions</summary>
  
  "DANGER QUACK DANGER QUACK!"

  LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, you need to load them into the ship's systems.

  Write a function called **loadModule()**. It needs to take a parameter, called index. Your function should be set up like this:

  **function loadModule(index) { }**

  When **loadModule()** gets the index number of a module, it should do the following:

  * Access the right module by using the **index** parameter. Remember how to access particular items in an array? If not, **this resource** might help you
  
  * Check if the module's essential flag is set to **true**. If it isn't, **return null**;
  
  * Set the modules enabled flag to **true**
  
  * Load the corresponding module from the **availableModules** array into the ship’s modules property (which is also an array).
  
  "ALMOST THERE" quacks LARRY. The modules still aren't loading it seems. You realize you need to get the index from somewhere, so you decide to write another function called **loopModule()** that will loop over the **availableModules** array and find the module with the name *life-support* to get its index. Once you have the right index, use your **loadModule()** function to load the *life-support* module. Don't forget, you'll need to call your **loopModule()** function for it to run
</details>

<details>
  <summary>Hint</summary>
  
  Oh my gosh, there's a few steps here. First, you need to make a new function. We've done that a few times now. Then you need to get that function to do three things:

  1. Find the module by its index and check if it's essential flag is set to true
  
  1. Set its **enabled** property to **true** (Remember setting object properties from challenge #1?)
  
  1. Add that module to the ship's **modules** array.
  
  The first steps are easy, because you just need to access the **availableModules** array with the index, using the [] notation and use a conditional to check if it's an essential module.

  For the second step, use the same strategy you used to turn the power on in Challenge #1. The last step uses a method called **.push()**. You can read up on how array pushing works **here**.

  Also, don't forget to use your **loopModule()** function to find the index of the **life-support** module. You'll need to pass this index as a parameter to your your **loadModule()** function to activate it!
</details>




#### Challenge #5
<details>
  <summary>Instructions</summary>
  
  "BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

  You realize that you can re-use your code from before, but this time you should do what all good programmers do: modularize your code.

  Rename your **loopModule()** function to **findModuleIndex()**. Update your function to take in a name that you’re looking for, and return the index of that module in the **availableModules** array, before loading it into the ship. It should look like this to start:

  **function findModuleIndex(name) { }**
  
  Use your new **findModuleIndex()** function to find the "propulsion" module and then load it into the ship's system.

  Don't forget: you still need to load the **life-support** module!
</details>

<details>
  <summary>Hint</summary>
  
  The good news here is that if you succeeded at the last challenge, you've got all the logic you need to do this one.

  Remember the work you did to find the **life-support** module's index? This time around, instead of writing **life-support** directly inside of your function, you'll want to update it so it can take the name of any module.

  Don't forget that you still need to pass the results of **findModuleIndex()** to your **loadModule()** function

  Hint: Make sure you are building on top of the last challenge.
</details>



#### Challenge #6
<details>
  <summary>Instructions</summary>
  
  "NAVIGATION SYSTEM needed," LARRY tells you. Navigation is important - you can't move through space without it!

  Use your already-defined methods and load in the "navigation" module. It's pretty simple once you have the functions to do it, and LARRY's eyes are finally easing from red back to normal.
</details>

<details>
  <summary>Hint</summary>
  
  Great news, you have the ability to find a module's index. We need the navigation module's index, and then we want to load that module in, by index.
</details>



#### Challenge #7
<details>
  <summary>Instructions</summary>
  
  You look over at LARRY, expecting him to quack out his next prompt, but it seems LARRY is now the one malfunctioning! You open up the manual, and find the section on LARRY. Apparently, loading modules can sometimes cause LARRY to get stuck in an infinite loop.

  You can fix him, you'll just need to write some code! Write and call a function called **resetLARRY()** which will prompt LARRY to quack ten times so he breaks out of his loop.

  There is a function called **LARRY.quack()** that you can use in your code.
</details>

<details>
  <summary>Hint</summary>
  
  Okay, the hint here is that we have given you the method you need to make Larry quack. You just need to make a loop. This loop needs to run ten times, calling the **LARRY.quack()** method we've given you. Here is the material on loops again on **Digital Ocean**.
</details>



#### Challenge #8
<details>
  <summary>Instructions</summary>
  
  The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.

  "COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent!

  Luckily, you've got the code for this. Load the module called *communication* using **findModuleIndex()** and **loadModule()** from before.

  But wait, your manual says that there are only *three* essential modules: **navigation**, **propulsion**, and **life-support**. Is **communication** essential too? LARRY seems to think so.

  Update your **loadModule()** function so if any of the modules that LARRY requires you to load are not essential, you override the system and set the essential property to true before loading the module. The function should now look like **function loadModule(index){...}**

  Once you've done that, use your functions from the previous challenges to load the *communication* module
</details>

<details>
  <summary>Hint</summary>
  
  You have most of the code in place to complete this challenge already. But we recommend using a conditional statement in your **loadModule()** function that will set the **essential** flag to true. You can read more about if else statements and how to implement them **here**
</details>



#### Challenge #9
<details>
  <summary>Instructions</summary>
  
  "QUAAAACK radio beacon not sending!" Now that LARRY is reset, he can't help but point out all the things wrong with the ship. The radio beacon is important - it’s the part of the ship that relays messages to Earth about your location and welfare. Resetting it is a two-stage process: first you need to set the message. The message needs to contain the current state of the **navigation** object.

  This is where you learn about something called JSON. JSON stands for JavaScript Object Notation, and it allows us to express an entire JS object as a string. There’s a built-in function in JavaScript that will take in an object and turn it into JSON. That function is **JSON.stringify()** - if you pass your object to that function as a parameter, it turns into a string.

  You need to write a function called **setMessage()**. This function should set the **message** property on the **radio** object to be the JSON version of the **navigation** object. Don't forget you need to call your **setMessage()** function.
</details>

<details>
  <summary>Hint</summary>
  
  Looks like we've got to make a couple of steps now to get going. You can **read the docs** here on how to turn a JavaScript object into a string using **JSON.stringify**. There are some good examples there for you.

  Think about the order of things you need to do:

  Make a new function called **setMessage()**
  Within that function, you need to access the **message** property of the **radio** object (Remember you can do this using the '.' operator)
  Then you need to make sure you are setting **message** property to the *JSON* version of the **navigation** object
</details>




#### Challenge #10
<details>
  <summary>Instructions</summary>
  
  "Beacon not sending!" LARRY is still blaring, and it’s time for step two: activate the beacon.

  You check out the radio object, and see that it has a 'beacon' property. Now that the message is set, write a function called **activateBeacon()** which will set the **beacon** property to **true**.
</details>

<details>
  <summary>Hint</summary>
  
  This should be a cake walk now for you. Write a new method, and use that method to change an object property.
</details>




#### Challenge #11
<details>
  <summary>Instructions</summary>
  
  "Beacon active!" LARRY sounds as pleased as a robot can be. In fact, you spot the faintest hint of smile on his robot duck bill.

  "Calibration QUACK complete! Now start RADIO! NEED to use the RADIO! QUACK QUACK!"

  LARRY's prompt sends you back to the ship's manual, where you find an entire section about the radio. You notice that the radio has a feature you missed before, the range! Your particular radio has a range of 88 to 108 MHz, much like the FM radio in your car back on Earth. There's a note in the manual that says that the radio should be tuned to the same frequency as the lower end plus the upper end, and that total divided by two.

  Write a function called setFrequency() that will set the frequency property on the radio object using the above formula.

  Be careful because not all radios will have the same range, so make sure your code is reuseable. Instead of coding the numbers directly into your equation use dot notation to access them from the radio object, which you can see by clicking the Show Global Objects link above.
</details>

<details>
  <summary>Hint</summary>
  
  So we are building a new function, something we've done almost a dozen times now. That part should be easy. And we're setting a property on an object again. Honestly, this is a lot of what you do in programming.

  This time, you're going to have to do some math. A lot of people think that programming is about math, but we've done ten challenges without having to really do any. In this case, take the top end of the frequencies, and the bottom end and add them together. That number divided by two is the number you need to set the radio frequency to.

  Here is a tutorial on Math operators from Digital Ocean.

  The range property is also an object. Remember that the sub-properties of objects can be accessed by chaining together the dot or bracket notation
</details>







#### Challenge #12
<details>
  <summary>Instructions</summary>
  
  "QUACK! Navigation system offline!" blares LARRY. "Initialization sequence broken!"

  You quickly check the documentation for the navigation system and find out that the nav system's initialization sequence needs three values, because you are in three-dimensional space. It needs an X, Y, and Z value.

  Your next task is to write a function called initialize() which will set the x, y, and z values correctly to start off at 0 in the navigation system. For example, the navigation system's x value is navigation.x.

  Don't worry about calling your initialize() function, this one runs automatically
</details>

<details>
  <summary>Hint</summary>
  
  More functions, more property setting. If you look at the current values on the navigation module, they are definitely not set correctly. Let's get them all set to 0.
</details>







#### Challenge #13
<details>
  <summary>Instructions</summary>
  
  Great job resetting the navigation system! You're off to a good start, and you'll surely be back in contact with Earth in no time!

  "Navigation system not calibrated! Three calibrations needed! QUAAACK!" There goes LARRY again, trying to help. Another browse through the nav system's documentation shows that each axis (x, y, and z) needs to be calibrated, and each requires a different calibration. Looks like you'll be writing plenty of JavaScript for this!

  To start, let's focus on calibrating just the x-axis. The x-axis has 12 possible settings and you'll need to write some code to find the right one. Start by writing a function called calibrateX(). There are a lot of steps involved in this one, luckily your manual has great documentation instructing that your function needs to:

  Loop from 1 - 12
  Call the built-in checkSignal() function each time, and assign the result to a variable called signal
  Make sure your signal variable is not undefined
  If the value is defined, set the navigation object's x property to that value
  Break out of the loop!
  Don't forget to call your calibrateX() function to activate it!
</details>

<details>
  <summary>Hint</summary>
  
  There are a few pieces that need to be put together to accomplish this challenge. Fortunately most of them are concepts we already know! You're going to want start by writing a for loop or a while loop that loops 12 times.

  This is another case where the function you need to use inside yours has already been built for you. Each time you run your loop, call checkSignal(). You should assign the result of this function to a variable, it should look something like this var response = doSomething()

  The checkSignal() function returns a value that is either a number or undefined. Since you're looking for a number you'll need to check to make sure the result of checkSignal() is not undefined. Here is a resource that can help guide you on how to check if a value is not undefined.
</details>





#### Challenge #14
<details>
  <summary>Instructions</summary>
  
  "X Calibrated!" LARRY quacks happily. "Y and Z need calibration now! QUACK!"

  Let's write calibrateY() and calibrateZ(). The manual says you'll need to loop from 1 to 60, and again you have to call checkSignal() each time.
</details>

<details>
  <summary>Hint</summary>
  
  Take everything you did for the last challenge and re-do it for Y and Z, but don't forget to increase the for loop size and to call the calibrateX, calibrateY and calibrateZ functions in order!
</details>






#### Challenge #15
<details>
  <summary>Instructions</summary>
  
  "One-step calibration needed," LARRY quacks. The last page of the calibration manual says that for proper calibration, you need to write a function called calibrate() which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. The good news is, you’ve already done the hard part. Write one function called calibrate() which will call your other three functions in it, one after the other.

You don't need call the calibrate() function yourself, but don't forget to remove the other calibrateX, calibrateY and calibrateZ calls you already wrote
</details>

<details>
  <summary>Hint</summary>
  
  It doesn't matter which order you call calibrateX(), calibrateY(), and calibrateZ(), but you must do all three of them inside the calibrate() method.

  This is a process we call 'abstraction' and 'automation'. Writing a function that calls other functions we have already written allows us to automate several steps we've built. You've already written the three calibration functions, call them one after the other.
</details>






#### Challenge #16
<details>
  <summary>Instructions</summary>
  
  "QUACK propulsion module needs to make us go!" LARRY points his bill at the ship’s command center, where the navigation system speed is set to "raaaaid".

  That clearly isn't correct - speed needs to be a non-negative integer.

  Write a function called setSpeed(speed) which will take in a string as a parameter, and set the speed in the navigation object (see globals above) to an integer.

  Luckily the propulsion module lets us know the speed it needs to be set at, so you don't need to call this function yourself
</details>

<details>
  <summary>Hint</summary>
  
  Make sure your function won't allow the speed to be negative. If a negative number is passed, it should leave the speed as is.

  Remember that when you build the setSpeed() function it is taking a parameter. You also need to remember that the given parameter is in the form of a string (behind the scenes, calling the function looks like setSpeed("12")), and you must convert it to an integer. Luckily JavaScript has another handy built-in method called parseInt() for this
</details>






#### Challenge #17
<details>
  <summary>Instructions</summary>
  
  "QUACK time to set the ship antenna to active." The ship has a pretty rich configuration object, with the power and modules and a nested object for the antenna's status.

Write a function called activateAntenna() which will set the active property on the antenna to true. You’ve worked with object sub-properties before when you set the radio frequency (you can see the ship object in the Global Objects list above), remember how to access them?

Your antenna is a bit out of date, so it doesn't activate automatically. Make sure to call your function to activate it!
</details>

<details>
  <summary>Hint</summary>
  
  So this looks just like another property setting on an object. But this object is inside another object. In this case, the outer object has a property on it, and the value of that property is an object. You can chain property lookups. Just a reminder, Digital Ocean has a great tutorial on Adding and Modifying object properties.
</details>





#### Challenge #18
<details>
  <summary>Instructions</summary>
  
  "Antenna active! Broadcast function enabled!" LARRY announces triumphantly.

  Now that the power is back on, you should try the radio by sending out a beacon message so Earth knows where you are.

  Create a new function called sendBroadcast(). In this function you'll need to write a loop to call the newly-enabled broadcast() function 100 times - you want to make sure Earth gets the message! Don't worry what broadcast() does; it's built into the ship's computer.

  When you're ready to send your broadcast out, be sure to call your sendBroadcast() function
</details>

<details>
  <summary>Hint</summary>
  
  Another function we've provided for you! We here at the SpaceshipCompany™ are really helpful after all. Write a loop that runs 100 times, and calls broadcast() each time.
</details>






#### Challenge #19
<details>
  <summary>Instructions</summary>
  
  Wait a second! It looks like your message isn't making it all the way to Earth. Another look at the radio manual and you realize you must configure the radio before sending your broadcast. Write and call a function called configureBroadcast() which will get the broadcast to Earth.

  Your function will need to follow a precise order:

  set the frequency on the radio
  set the antenna to active
  send your announcement
  You've already written all the code to complete this challenge with a few minor tweaks you'll be phoning home in no time. Unfortunately this requires manual configuration, so you'll need to call your configureBroadcast() function to kick things off

  PS. Remember to disable your previous frequency, antenna and announcement function calls as they were out of order!
</details>

<details>
  <summary>Hint</summary>
  
  Do you remember when you wrote the calibrate() method that automated and abstracted your three individual calibration functions? This is very much the same. Call the function to set the radio frequency, to send your broadcast 100 times, and set the antenna to active. Make sure you do them in the right order!

  Make sure you aren't calling these functions more than once. Check the rest of your code to be sure
</details>








#### Challenge #20
<details>
  <summary>Instructions</summary>
  
  Success! Earth has received your message and it looks like they are trying to send something back in return

  "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l." This message chatters out of the radio.

  After staring at the message for a while, you aren't quite sure what they are trying to say.

  "VOWELS ERROR!" LARRY tells you. VOWELS ERROR? What is that? "My QUACK current operating system cannot process vowels, so I've replaced them all with numbers".

  Write a function called decodeMessage(message). This function takes in a coded message and changes all the numbers back to their respective vowels before returning the newly decoded message.

  This function is much more complicated than what you have had to build until now, and there are multiple ways you could solve this, so you head to your manual to see what it says about decoding messages. The manual suggests you should read about:

  Splitting a string into an array of characters using message.split(''). Read more here
  Joining an array of characters back into a string using message.join(''). Read more here
  Take a look at the hints if you need more help

  Your decoder is automatic, so no need to call this function
</details>

<details>
  <summary>Hint</summary>
  
  Start by determining which numbers need to be replaced by which letters

  Once you've determined that. There are a few ways you can decode the message from Earth. One solution would be to:

  Split the message into an array of characters using the message.split('') method
  Loop through each character in the array and if the character is a stringified number (remember to compare to "0" instead of 0), set it to the corresponding vowel. You can read about If/Else If/Else statements if you need help
  Join the array of characters back into a string and return your newly decoded message

  PS. if you want to be cheeky, you can also checkout JavaScript's handy built in .replace() method that searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. You can find out more about it here
</details>







#### Challenge #21
<details>
  <summary>Instructions</summary>
  
  "Let's QUACK head for home!" LARRY states anxiously. However, you realize quickly that the x, y and z coordinates you've set in your navigation object won't get you precisely to Earth. You need to confirm with your home base before resetting the nagivation's x, y and z coordinates. It looks like you'll need to write a function called returnToEarth(). This function is a bit complicated, so you ask LARRY to walk you through it. LARRY responds, quacking that your function should:

  Call the built-in broadcast() function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.
  Store the response from each broadcast() call in it's own variable (The broadcast() function returns a coded-message from Earth with the correct coordinate to return home in HEX! Check out the hints for more on this)
  Decode the returned message using the decodeMessage() function you wrote earlier
  Change the decoded hex-coordinate to an integer using parseInt()
  Set each of the navigation object's x, y and z parameters to the integer coordinates
  Call your returnToEarth() and head for home. "QUACK" shouts LARRY one final time "That's one small step for ducks and a giant leap for duck-kind." Mission complete.
</details>

<details>
  <summary>Hint</summary>
  
  You need ask LARRY for more guidance on this one, it's a lot of steps to go through. Luckily LARRY is happy to help in the hints below!

  To get started, you'll need to make three individual calls to the broadcast() function like so:

  broadcast("x")
  broadcast("y")
  broadcast("z")
  You'll need to save the response from each of these calls into it's own variable, that you can then pass to your decodeMessage() function

  Don't forget the response from broadcast() is a hexidecimal! You'll need to pass it through parseInt() like so parseInt(decodedmessage, base) with a second parameter as shown. You'll want to Google hex base parseInt to determine what number to pass as the base

  And after all of that, set the navigation objects coordinates, and head back down to Earth!
</details>





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
