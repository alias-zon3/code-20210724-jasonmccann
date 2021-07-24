import { IUserInfo } from "../Interfaces/IUserInfo";
import { UserModel } from "../Models/UserModel";

export interface IBmiService {
  getUserCount(bmiCategory: string): number; //TODO make BMICategory object
  addUser(user: IUserInfo): UserModel;
  populateBmi(user: IUserInfo): UserModel;
}
