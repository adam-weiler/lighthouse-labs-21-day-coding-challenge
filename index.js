function powerOn() { //Sets ship object's powerOn property to true. (Day #1)
  ship.powerOn = true;
}

function countModules() { //Counts number of items in the availableModules array. (Day #2)
  console.log (`Count modules: ${availableModules.length}`);
  return availableModules.length;
}

function countEssential() { //Counts number of items in the availableModules array with the essential flag. (Day #3)
  console.log (`Count essential: ${availableModules.filter(record => record.essential).length}`);
  return availableModules.filter(record => record.essential).length;
}

function loadModule(index) { //Uses index to find module in the availableModules, enables the module, and adds it to ship modules array. (Days #4, #5, #6, #8)
  console.log (`Loading module index: ${index}`);
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
  console.log(ship)
}

function findModuleIndex(moduleName) { //Takes a moduleName and returns the index of that module from the availableModules array. (Days #4, #5, #6, #8)
  for (let x = 0; x < countModules(); x++) {
    if ((availableModules[x].name === moduleName) && availableModules[x].essential) {
      console.log (`Find module '${moduleName}': ${x}`);
      return x;
    }
  }
}

function resetLARRY() { //Call the LARRY.quack method 10 times to reset Larry. (Day #7)
  for (let x=0; x<10; x++) {
    LARRY.quack();
  }
  console.log(`Larry is now reset.`);
}

function setMessage() { //Sets radio object's message property to the JSON version of the navigation object. (Day #9)
  radio.message = JSON.stringify(navigation);
}

function activateBeacon() { //Set radio object's beacon property to true. (Day #10)
  radio.beacon = true;
}

powerOn(); //Sets ship.powerOn to true. Day #1.
//countModules(); Counts number of items in availableModules. Day #2.
countEssential(); //Counts number of items with the Essential flag. Day #3.
loadModule(findModuleIndex("life-support")); //Enables life support and adds to ship's modules array. Day #4.
loadModule(findModuleIndex("propulsion")); //Enables propulsion and adds to ship's modules array. Day #5.
loadModule(findModuleIndex("navigation")); //Enables navigation and adds to ship's modules array. Day #6
resetLARRY(); //Reset Larry. Day #7.
loadModule(findModuleIndex("communication")); //Enables communication and adds to ship's modules array. Day #8
setMessage(); //Sets radio.message to JSON version of navigation. Day #9
activateBeacon(); //Sets radio.beacon to true. Day #10
