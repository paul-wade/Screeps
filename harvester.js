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
        const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (target) {
            if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }

        }
    },
    harvest() {

    }
};