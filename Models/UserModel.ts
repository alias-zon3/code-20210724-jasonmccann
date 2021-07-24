import { IUserInfo } from "../Interfaces/IUserInfo";

//Define a user model which will be intended to be returned as part of a future response (once implemented)
export class UserModel implements IUserInfo {
    id: number;
    gender: string; //TODO swap out for future enum
    heightCm: number;
    weightKg: number;
    bmi: number;
    bmiCategoryId: number;
  }