/**
 * Returns the total commission fee for given face amout based on agent hirearchy and commission plan.
 * @param {number} faceAmount - The face amount of sale
 * @param {AgentHierarchy} agentHirearchy - The agent hirearchy used in the transaction
 * @param {CommissionPlan} plan - The commission plan used in the transaction
 * @returns {number} The total commission fee for given face amout based on agent hirearchy and commission plan.
 */
const getTotalCommissionFee = (faceAmount = 0, agentHirearchy = null, plan = null) => {
    if (!faceAmount) {
        return 0;
    }
    if (!agentHirearchy || !plan) {
        return 0;
    }
    let totalCommission = 0;
    let agentIndex = 0;
    for (let tierIndex = 0; tierIndex < plan.tierRate.length; tierIndex++) {
        if (agentIndex < agentHirearchy.agents.length) {
            totalCommission += faceAmount * plan.tierRate[tierIndex] * agentHirearchy.agents[agentIndex++].rate;
        } else {
            break;
        }
    }
    return totalCommission;
};

export { getTotalCommissionFee };