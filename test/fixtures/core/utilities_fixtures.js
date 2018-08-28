import { AgentHierarchy } from "../../../src/dataModel/agentHierarchy";
import { Agent } from "../../../src/dataModel/agent";
import { CommissionPlan } from "../../../src/dataModel/commissionPlan";
// In actual unit-test, these constant should be mocked.
// For the sake of building a runable solution in the challenge, they are built using actual classes.
const FACE_AMOUNT = 100000;
const AGENT_HIERARCHY_1 = new AgentHierarchy()
    .addAgent(new Agent("", "", "Bob", 0.02))
    .addAgent(new Agent("", "", "X", 0.025))
    .addAgent(new Agent("", "", "A", 0.0325))
    .addAgent(new Agent("", "", "C", 0.0225));
const AGENT_HIERARCHY_2 = new AgentHierarchy()
    .addAgent(new Agent("", "", "Bob", 0.02))
    .addAgent(new Agent("", "", "A", 0.0325))
    .addAgent(new Agent("", "", "X", 0.025))
    .addAgent(new Agent("", "", "D", 0.0275))
    .addAgent(new Agent("", "", "Z", 0.0175));
const COMMISSION_PLAN_A = new CommissionPlan("COMMISSION_PLAN_A")
    .addTierRate(0.5)
    .addTierRate(0.05);
const COMMISSION_PLAN_B = new CommissionPlan("COMMISSION_PLAN_B")
    .addTierRate(0.7)
    .addTierRate(0.08)
    .addTierRate(0.04);


const TEST_DATA = {
    NO_PARAM: [],
    NO_FACE_AMOUNT: [0, null, null],
    NO_AGENT_HIERARCHY: [FACE_AMOUNT, null, COMMISSION_PLAN_A],
    NO_COMISSION_PLAN: [FACE_AMOUNT, AGENT_HIERARCHY_1, null],
    H1_PLANA: [FACE_AMOUNT, AGENT_HIERARCHY_1, COMMISSION_PLAN_A],
    H2_PLANB: [FACE_AMOUNT, AGENT_HIERARCHY_2, COMMISSION_PLAN_B]
};

const EXPECTED_DATA = {
    NO_PARAM: 0,
    NO_FACE_AMOUNT: 0,
    NO_AGENT_HIERARCHY: 0,
    NO_COMISSION_PLAN: 0,
    H1_PLANA: 1125,
    H2_PLANB: 1760
};

export { TEST_DATA, EXPECTED_DATA }; 