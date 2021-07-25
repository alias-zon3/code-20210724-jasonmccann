import { userInfo } from "os";
import { BmiCategory } from "../Entities/BmiCategory";
import { HealthRisk } from "../Entities/HealthRisk";
import { BmiCalculator } from "../Helpers/BmiCalculator";
import { IUserInfo } from "../Interfaces/IUserInfo";
import { UserModel } from "../Models/UserModel";
import { UserRepository } from "../Repositories/UserRepository";
import { IBmiService } from "../Services.Abstract/IBmiService";

export class BmiService implements IBmiService {
  private readonly _repository: UserRepository = new UserRepository();

  getUserCount(bmiCategory: string): number {
    var count = this._repository.countUsersByBmiCategory(bmiCategory);

    return count;
  }

  addUser(userInfo: IUserInfo): UserModel {
    var userModel = this.populateBmi(userInfo);

    this._repository.addUser(userModel);

    return userModel;
  }

  addUsers(userInfos: IUserInfo[]): UserModel[] {
    //As we have an array of user infos, loop through each adding to the db and building our response array
    var results: UserModel[] = [];

    userInfos.forEach((userInfo) => {
      var userModel = this.addUser(userInfo);
      results.push(userModel);
    });

    return results;
  }

  //Calculate BMI, work out what BMI, category, health risk they are and return the model (no "db" persistence)
  populateBmi(userInfo: IUserInfo): UserModel {
    var userModel = new UserModel(userInfo);

    var bmi = BmiCalculator.calculateBmi(userInfo.heightCm, userInfo.weightKg);
    var bmiCategory = this._repository.getBmiCategory(bmi);
    var healthRisk = this._repository.getHealthRisk(bmiCategory);

    userModel.bmi = bmi;
    userModel.bmiCategory = bmiCategory.description;
    userModel.healthRisk = healthRisk.description;

    return userModel;
  }

  //Get all users from the database as user models
  getAllUsers(): UserModel[] {
    var res = this._repository.getAllUsers();

    return res;
  }
}
