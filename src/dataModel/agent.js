/**
 * Class represents an agent
 * @class
 */
export class Agent {
    /**
     * @constructor
     * @param {string} fName - The first name of the agent
     * @param {string} mName - The middle name of the agent
     * @param {string} lName - The last name of the agent
     * @param {number} rate - The commission rate of the agent
     */
    constructor(fName = "", mName = "", lName = "", rate = 0) {
        this.firstName = fName;
        this.midName = mName;
        this.lastName = lName;
        this.rate = rate;
    }
}