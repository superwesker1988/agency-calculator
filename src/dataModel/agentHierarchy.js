/**
 * Class represents an agent
 * @class
 */
export class AgentHierarchy {
    /**
     * @constructor
     */
    constructor() {
        this.agents = [];
    }

    /**
     * Adds an agent to this agent hiereachy.
     * @param {Agent} superAgent - The agent to be added
     * @returns {Agent} Reference to this agent hiereachy.
     */
    addAgent(superAgent = null) {
        if (superAgent) {
            this.agents.push(superAgent);
        }
        return this;
    }
}