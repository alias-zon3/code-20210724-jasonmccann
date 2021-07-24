import { IUserInfo } from "../Interfaces/IUserInfo";

//Define a user model which will be intended to be returned as part of a future response (once implemented)
export class UserModel implements IUserInfo {
    id: number;
    gender: string; //TODO swap out for future enum
    heightCm: number;
    weightKg: number;
    bmi: number;
    bmiCategory: string;
    healthRisk: string;

    //Custom constructor using optional user info interface to map properties over, defaulting if required
    constructor(userInfo?: IUserInfo) {
        this.gender = userInfo.gender || "unknown";
        this.heightCm = userInfo.heightCm || undefined;
        this.weightKg = userInfo.weightKg || undefined;
    }
  }