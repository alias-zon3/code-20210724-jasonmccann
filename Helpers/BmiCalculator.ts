//A simple helper class to calculate the BMI from the height and weight of a user - *could be done via exposed methods rather than an exported class, but went with this approach for the time being*
export class BmiCalculator{
    static calculateBmi(heightCm: number, weightKg: number): number {
        this.validateHeightWeight(heightCm, weightKg);

        //We need to convert our height to meters
        var heightM = heightCm / 100;

        //As BMI is defined as kg/m, we need to
        var bmi = weightKg / heightM;

        return bmi;
    }

    //I wanted some sort of validation, this could be split out into per field validation or using a Validator class but for simplicity at this point I'm keeping it as a single private method in this class
    private static validateHeightWeight(heightCm: number, weightKg: number) {
        //Validate height
        if(!heightCm) {
            throw new Error(`heightCm parameter must be provided`);
        }

        if(heightCm <= 15) {
            //Assuming that nobody using this calculator will be 15cm or smaller
            throw new Error(`Height must be at least 15cm`);
        }

        if(heightCm > 300) {
            //Assuming that nobody using this calculator will taller than 3 meters
            throw new Error(`Height must not exceed 300cm - this is an unrealistic height!`);
        }

        //Validate weight
        if(!weightKg) {
            throw new Error(`weightKg parameter must be provided`);
        }

        if(weightKg <= 0.5) {
            //Assuming that nobody using this calculator will weigh at least half a kilogram
            throw new Error(`Weight must be at least 0.5kg`);
        }

        if(weightKg > 350) {
            //Assuming that nobody using this calculator will weigh more than 350kg
            throw new Error(`Weight must not exceed 350kg - this is an unrealistic weight!`);
        }
    }
}