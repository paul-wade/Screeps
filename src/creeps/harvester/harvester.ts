import { inherits, isDeepStrictEqual } from "util";

export class Harvester extends Creep {
    run():  void {

    }
}
export enum HarvesterStates {
    idle = 0,
    harvesting = 1,
    transporting = 2,
    transfering = 3
}
export class HarvesterMemory {
    public currentState: HarvesterStates = 0;
}
