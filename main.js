var harvester = require('harvester');
var _ = require('lodash');

var totalcreeps = Object.keys(Game.creeps).length;
var harvesters = _.filter(Game.creeps, {
    memory: { role: 'harvester' }
});
console.log(harvesters);
if (totalcreeps < 4) {
    console.log(Game.spawns['Spawn1'].spawnCreep([MOVE, WORK, CARRY], "Harvester" + totalcreeps, {
        memory: { role: 'harvester' }
    }));
}

//Assign harvester scripts
for (const harv of harvesters) {
    console.log(harv);
    harvester.run(harv);
}