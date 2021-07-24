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

  //Calculate BMI, work out what BMI, category, health risk they are and return the model (no "db" persistence)
  populateBmi(userInfo: IUserInfo): UserModel {
    var userModel = new UserModel(userInfo);

    var bmi = BmiCalculator.calculateBmi(userInfo.heightCm, userInfo.weightKg);
    var bmiCategory = new BmiCategory();
    var healthRisk = new HealthRisk();

    userModel.bmi = bmi;
    userModel.bmiCategory = bmiCategory.description;
    userModel.healthRisk = healthRisk.description;

    return userModel;
  }
}
