import { ErrorMapper } from "utils/ErrorMapper";
import { CreepManager } from "./creeps/creepManager";
// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is - ${Game.time}`);
  const creepManagers: Array<CreepManager> = new Array<CreepManager>();

  //Creep setup
  for (const i in Game.rooms) {
    //Check if room already has a creep mananger
    var existingCreepMananger = creepManagers.find(e => e.room === Game.rooms[i]);
    if (!existingCreepMananger) {
      creepManagers.push(new CreepManager(Game.rooms[i]));
      console.log("Pushed new creep mananger for room: " + Game.rooms[i]);
    }
  }

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
