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

  for (let x = 1; x <= 12; x++) {
    console.log(x);
    signal = checkSignal();
    
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
  console.log(`calibrateX() - signal: ${signal}`);
}


powerOn(); //Sets ship.powerOn to true. Day #1.
//countModules(); Counts number of items in availableModules. Day #2.
countEssential(); //Counts number of items with the Essential flag. Day #3.
loadModule(findModuleIndex("life-support")); //Enables life support and adds to ship's modules array. Day #4.
loadModule(findModuleIndex("propulsion")); //Enables propulsion and adds to ship's modules array. Day #5.
loadModule(findModuleIndex("navigation")); //Enables navigation and adds to ship's modules array. Day #6.
resetLARRY(); //Reset Larry. Day #7.
loadModule(findModuleIndex("communication")); //Enables communication and adds to ship's modules array. Day #8.
setMessage(); //Sets radio's message to JSON version of navigation. Day #9.
activateBeacon(); //Sets radio's beacon to true. Day #10.
//setFrequency(); //Sets radio's frequency to average of two numbers. Day #11
//initialize(); //Sets navigation's x, y, and z values to 0. Day #12
calibrateX(); //Sets navigation's x value from the invisible checkSignal function. Day #13
