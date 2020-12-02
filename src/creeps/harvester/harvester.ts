import { HarvesterMemory } from "memory/harvesterMemory";
import { inherits, isDeepStrictEqual } from "util";
import { IExecute } from "../IExecute";
export class Harvester extends Creep implements IExecute {
    memory: HarvesterMemory = new HarvesterMemory;

    Run(): number {
        this.memory = this.memory as HarvesterMemory;
        if (!this.memory.currentState) {
            this.memory.currentState = HarvesterStates.idle;
        }

        switch (this.memory.currentState) {
            case HarvesterStates.idle: this.FindSomethingTodo();
            case HarvesterStates.movingToHarvest: this.GoToSource();
        }
        return 0;
    }

    public static readonly createBody: BodyPartConstant[] = [
        CARRY,
        MOVE,
        WORK
    ]

    public FindSomethingTodo(): void {
        // check carrying cap
        if (this.store.getFreeCapacity() > 0) {
            //has cap find a source.
            const target = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (target) {
                this.memory.currentState = HarvesterStates.movingToHarvest;
                this.memory.targetSource = target;
            }
        } else if (this.store.getUsedCapacity() > 0 && this.store.power > 0) {
            const spawns = this.room.find(FIND_MY_SPAWNS);
            for (const spawn of spawns) {
                const freeCap = spawn.store.getFreeCapacity();
                if (freeCap && freeCap > 50) {

                }
            }
            this.memory.currentState = HarvesterStates.movingToDeliver;
        }

    }

    public GoToSource(): void {
        this.memory.currentState = HarvesterStates.movingToHarvest;
        var target = this.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (target) {
            this.memory.targetSource = target;
            if (this.pos.getRangeTo(target.pos) > 1) {
                this.moveTo(target.pos);
            }
        }
        //find an open source.
        //then collect state.
    }

    public SetState(): HarvesterStates {
        if (this.store.getFreeCapacity() === 0) {
            return HarvesterStates.full;
        } else if (this.store.getUsedCapacity() > 0 && this.store.energy > 0) {
            return HarvesterStates.transporting;
        }
        return HarvesterStates.idle;
    }
}
export enum HarvesterStates {
    idle = 0,
    harvesting = 1,
    transporting = 2,
    transfering = 3,
    movingToHarvest = 4,
    movingToDeliver = 5,
    full = 6
}

