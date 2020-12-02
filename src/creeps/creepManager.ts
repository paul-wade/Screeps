import { HarvesterStates,Harvester } from "./harvester/harvester";
import { CreepType } from "./CreepType";
export class CreepManager {

  constructor() {
    console.log("CreepMananger constructed.");
        this.loadCreeps();
    }
  allCreeps = Game.creeps;
  creepCount = Object.keys(Game.creeps).length;

  loadCreeps(): void {

    var harvesters: Harvester[] = [];
    for (const key in this.allCreeps) {
      console.log("forloop");
      if (this.allCreeps.hasOwnProperty(key)) {
        let creep = this.allCreeps[key] as Harvester;
        console.log(JSON.stringify(creep));
      }
    }
    if (harvesters.length < 5) {
      this.createHarvester();
    }
  }



  createHarvester(): void {
    var harvesterName = "Harvester_" + this.creepCount;
    Game.spawns["Spawn1"].spawnCreep(Harvester.createBody, harvesterName);
    }


    harvestersGoToWork(): void {

    }
}
