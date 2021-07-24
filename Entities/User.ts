import { BmiCategory } from "./BmiCategory";

//Define a user entity which represents what we would store in the db
export class User {
    id: number;
    gender: string; //TODO swap out for future enum
    heightCm: number;
    weightKg: number;
    bmi: number;
    bmiCategory: BmiCategory;

    constructor(gender, heightCm, weightKg, bmi, bmiCategory) {
        this.gender = gender;
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.bmi = bmi;
        this.bmiCategory = bmiCategory;
    }
  }