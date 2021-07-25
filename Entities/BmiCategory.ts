import { HealthRisk } from "./HealthRisk";

//Define a bmi category entity which represents what we would store in the db
export class BmiCategory {
    id: number;
    description: string;
    minBmi?: number;
    maxBmi?: number;
    HealthRiskId: number;
    HealthRisk: HealthRisk;
  }