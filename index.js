function powerOn() { //Sets ship object's powerOn property to true. (Day #1)
  ship.powerOn = true;
  console.log (`ship.powerOn() - ship.powerOn: ${ship.powerOn} \n`);
}

function countModules() { //Counts number of items in the availableModules array. (Day #2)
  // console.log (`countModules() - returns: ${availableModules.length}`);
  return availableModules.length;
}

function countEssential() { //Counts number of items in the availableModules array with the essential flag. (Day #3)
  console.log (`countEssential() - returns: ${availableModules.filter(record => record.essential).length} \n`);
  return availableModules.filter(record => record.essential).length;
}

function loadModule(index) { //Uses index to find module in the availableModules, enables the module, and adds it to ship modules array. (Days #4, #5, #6, #8)
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
  console.log (`--loadModule() - index: ${index} - availableModules[index].enabled: ${availableModules[index].enabled} - ship.modules: `);
  console.log(ship.modules);
}

function findModuleIndex(moduleName) { //Takes a moduleName and returns the index of that module from the availableModules array. (Days #4, #5, #6, #8)
  let modulesCount = countModules();
  
  for (let x = 0; x < modulesCount; x++) {
    if (availableModules[x].name === moduleName) {
      console.log (`findModuleIndex() - moduleName: '${moduleName}' -- x: ${x}`);
      return x;
    }
  }
}

function resetLARRY() { //Call the LARRY.quack method 10 times to reset Larry. (Day #7)
  console.log(`resetLarry() \n`);
  for (let x = 0; x < 10; x++) {
    LARRY.quack();
  }
}

function setMessage() { //Sets radio object's message property to the JSON version of the navigation object. (Day #9)
  radio.message = JSON.stringify(navigation);
  console.log (`setMessage() - radio.message: ${radio.message} \n`);
}

function activateBeacon() { //Set radio object's beacon property to true. (Day #10)
  radio.beacon = true;
  console.log (`activateBeacon() - radio.beacon: ${radio.beacon} \n`);
}

function setFrequency() { //Sets radio object's frequency property to the average of low and high values. (Day #11)
  radio.frequency = (radio.range.low + radio.range.high) / 2;
  console.log(`setFrequency() - radio.frequency: ${radio.frequency}`);
}

function initialize() { //Sets each of the navigation object's properties to 0. (Day #12)
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
  console.log (`initialize() - navigation.x: ${navigation.x} - navigation.y: ${navigation.y} navigation.z: ${navigation.z}`);
}

function calibrateX() { //Sets the navigation object's x property to a value stored in invisible checkSignal function. (Day #13)
  let signal;

  for (let i = 1; i <= 12; i++) {
    console.log(`Current Iteration: ` + i);
    signal = checkSignal();
    
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
  console.log(`calibrateX() - signal: ${signal}`);
}

function calibrateY() { //Sets the navigation object's y property to a value stored in invisible checkSignal function. (Day #14)
  let signal;

  for (let i = 1; i <= 60; i++) {
    console.log(`Current Iteration: ` + i);
    signal = checkSignal();
    
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
  console.log(`calibrateY() - signal: ${signal}`);
}

function calibrateZ() { //Sets the navigation object's z property to a value stored in invisible checkSignal function. (Day #14)
  let signal;

  for (let i = 1; i <= 60; i++) {
    console.log(`Current Iteration: ` + i);
    signal = checkSignal();
    
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
  console.log(`calibrateZ() - signal: ${signal}`);
}

function calibrate() { //Calibrates the navigation object by calling the x, y, z functions. (Day #15)
  calibrateX(); //Sets navigation's x value from the invisible checkSignal function. Day #13
  calibrateY(); //Sets navigation's y value from the invisible checkSignal function. Day #14
  calibrateZ(); //Sets navigation's z value from the invisible checkSignal function. Day #14
}


function setSpeed(speed) { //Tries to set the navigation object's speed to a positive number. (Day #16)
  let s = parseInt(speed);
  
  if (s >= 0) {
      navigation.speed = s;
  }
}

function activateAntenna() { //Activate the ship object's property antenna, the antenna object's property active to true.(Day #17)
  ship.antenna.active = true;
}

function sendBroadcast() { // (Day #18)
  console.log(`sendBroadcast() \n`);
  for (let i = 1; i <= 100; i++) {
    broadcast();
  }
}

function configureBroadcast() { // (Day #19)
  setFrequency(); //Sets radio's frequency to average of two numbers. Day #11.
  activateAntenna(); //Sets ship's antenna's active to true. Day #17.
  sendBroadcast(); //Day #18.
}

function decodeMessage(message) { // (Day #20)
  return message.replace(/4/g, 'a').replace(/3/g, 'e').replace(/1/g, 'i').replace(/0/g, 'o').replace(/2/g, 'u').replace(/5/g, 'y');
}

function returnToEarth() {
  console.log(`returnToEarth() \n`);
  let broadcast_x = broadcast('x');
  let broadcast_y = broadcast('y');
  let broadcast_z = broadcast('z');
  
  navigation.x = parseInt(decodeMessage(broadcast_x), 16);
  navigation.y = parseInt(decodeMessage(broadcast_y), 16);
  navigation.z = parseInt(decodeMessage(broadcast_z), 16);
}


powerOn(); //Sets ship.powerOn to true. Day #1.
// countModules(); Counts number of items in availableModules. Day #2.
countEssential(); //Counts number of items with the Essential flag. Day #3.
loadModule(findModuleIndex("life-support")); //Enables life support and adds to ship's modules array. Day #4.
loadModule(findModuleIndex("propulsion")); //Enables propulsion and adds to ship's modules array. Day #5.
loadModule(findModuleIndex("navigation")); //Enables navigation and adds to ship's modules array. Day #6.
resetLARRY(); //Reset Larry. Day #7.
loadModule(findModuleIndex("communication")); //Enables communication and adds to ship's modules array. Day #8.
setMessage(); //Sets radio's message to JSON version of navigation. Day #9.
activateBeacon(); //Sets radio's beacon to true. Day #10.
// initialize(); //Sets navigation's x, y, and z values to 0. Day #12.
// calibrateX(); //Sets navigation's x value from the invisible checkSignal function. Day #13.
// calibrateY(); //Sets navigation's y value from the invisible checkSignal function. Day #14.
// calibrateZ(); //Sets navigation's z value from the invisible checkSignal function. Day #14.
// calibrate(); //Sets navigation's x, y, and z values by calling their individual functions. Day #15.
// setSpeed("42 string"); //Sets navigation's speed to a positive number. Day #16.
// activateAntenna(); //Sets ship's antenna's active to true. Day #17.
// sendBroadcast(); // Day #18.
configureBroadcast(); // Day #19.
// decodeMessage("th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."); // Day #20.
returnToEarth();
