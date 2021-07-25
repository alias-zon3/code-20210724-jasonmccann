import { expect } from "chai";
import "mocha";
import { BmiCalculator } from "../Helpers/BmiCalculator";

describe("calculateBmi function", () => {
  it("should throw error when heightCm is undefined", () => {
    //Arrange
    var heightCm = undefined;
    var weightKg = 70;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `heightCm parameter must be provided`);
  }),

  it("should throw error when heightCm is less than 15", () => {
    //Arrange
    var heightCm = 12;
    var weightKg = 70;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `Height must be at least 15cm`);
  }),  
  
  it("should throw error when heightCm is greater than 300", () => {
    //Arrange
    var heightCm = 301;
    var weightKg = 70;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `Height must not exceed 300cm - this is an unrealistic height!`);
  }),

  it("should throw error when weightKg is undefined", () => {
    //Arrange
    var heightCm = 150;
    var weightKg = undefined;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `weightKg parameter must be provided`);
  }),

  it("should throw error when weightKg is less than 0.5", () => {
    //Arrange
    var heightCm = 150;
    var weightKg = 0.4;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `Weight must be at least 0.5kg`);
  }),  
  
  it("should throw error when weightKg is greater than 350", () => {
    //Arrange
    var heightCm = 150;
    var weightKg = 351;

    //Act & Assert
    expect(() => BmiCalculator.calculateBmi(heightCm, weightKg)).to.throw(Error, `Weight must not exceed 350kg - this is an unrealistic weight!`);
  }),

  it("should calculate a bmi when parameters are valid", () => {
    //Arrange
    var heightCm = 179;
    var weightKg = 75;

    var expected = 41.899441340782126;

    //Act 
    var res = BmiCalculator.calculateBmi(heightCm, weightKg);

    //Assert
    expect(res).to.equal(expected);
  });
});
