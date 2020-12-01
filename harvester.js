/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run(creep) {
        console.log(creep);
        if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
            const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if (target) {
                console.log(creep.harvest(target));
                if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
        else {
            //deliver
            const target = creep.pos.findClosestByRange(STRUCTURE_CONTROLLER);
            console.log(creep.transfer(target, RESOURCE_ENERGY));
            if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }

        }
    }
};