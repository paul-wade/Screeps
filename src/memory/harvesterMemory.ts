import { HarvesterStates } from "../creeps/harvester/harvester";
export class HarvesterMemory {
    public currentState: HarvesterStates = 0;
    targetSource: Source | null | undefined;
}
