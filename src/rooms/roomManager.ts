import { Harvester } from "creeps/harvester/harvester";
import { HarvesterMemory } from "memory/harvesterMemory";
export class RoomManager{

    roomName:string = ""
    room: Room;
    Harvesters: Harvester[] = [];
    constructor(roomName:string) {
        //Load all rooms and setup mem
        this.roomName = roomName;
        this.room = Game.rooms[this.roomName];
        this.LoadCreeps();
    }

    LoadCreeps():void {
        for (const creepName in Game.creeps) {
            var creep: Creep = Game.creeps[creepName];
            if (typeof (creep.memory) === typeof (HarvesterMemory)) {
                this.Harvesters.push(creep as Harvester);
            }
        }
    }

}
