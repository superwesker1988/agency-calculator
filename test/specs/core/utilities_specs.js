import { getTotalCommissionFee } from "../../../src/core/utilities";
import { TEST_DATA, EXPECTED_DATA } from "../../fixtures/core/utilities_fixtures";

const validateGetTotalCommissionFee = (testId) => {
    expect(getTotalCommissionFee.apply(this, TEST_DATA[testId])).toEqual(EXPECTED_DATA[testId]);
};

describe("Test Utilities module", () => {
    describe("getTotalCommissionFee Test", () => {
        describe("when param is given", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("NO_PARAM");
            });
        });
        describe("when no face amount given", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("NO_FACE_AMOUNT");
            });
        });
        describe("when no agent hierarchy is given", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("NO_AGENT_HIERARCHY");
            });
        });
        describe("when no comission plan is given", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("NO_COMISSION_PLAN");
            });
        });
        describe("when calculate 100000 face amount, hierarchy 1 and plan A", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("H1_PLANA");
            });
        });
        describe("when calculate 100000 face amount, hierarchy 2 and plan B", () => {
            it("should return correct value", () => {
                validateGetTotalCommissionFee("H2_PLANB");
            });
        });
    });
});
