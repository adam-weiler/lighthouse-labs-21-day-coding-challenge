function powerOn() { //Sets ship object's powerOn property to true.
  ship.powerOn = true;
}

function countModules() { //Counts number of items in the availableModules array.
  return availableModules.length;
}

function countEssential() { //Counts number of items in the availableModules array with the essential flag.
  return availableModules.filter(record => record.essential).length;
}
