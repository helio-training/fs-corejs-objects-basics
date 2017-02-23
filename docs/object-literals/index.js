// export out the FACTIONS object below
export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};




// define your Optimus Prime object below
export const OptimusPrime = {
  name: 'Optimus Prime',
  faction: FACTIONS.Autobots,
  power: 1000,

  greet() {
    return `Hi, I'm ${this.name}`;
  }
};



// don't forget to include the greet() function!





// define your Megatron object below

export const Megatron = {
  name: 'Megatron',
  faction: FACTIONS.Decepticons,
  power: 1000,

  greet() {
    return `Hi, I'm ${this.name}`;
  }
};




// Megatron also has a greet method