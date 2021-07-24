import { BmiDatabase } from "../Database/Database";
import { User } from "../Entities/User";
import { UserModel } from "../Models/UserModel";

export class UserRepository {
  private readonly _db: BmiDatabase = new BmiDatabase();

  addUser(userModel: UserModel) {
     var user = new User(userModel.gender, userModel.heightCm, userModel.weightKg, userModel.bmi, userModel.bmiCategory);

     var newUser = this._db.createUser(user);

     //This new user will have the id populated
     return newUser;
  }

  getUser(id: number): UserModel {
    var user = this._db.getUser(id);

    //Let's map our user entity to a user model, which is more frontend friendly
    var model: UserModel = {
        id: user.id,
        gender: user.gender,
        heightCm: user.heightCm,
        weightKg: user.weightKg,
        bmi: user.bmi,
        bmiCategory: user.bmiCategory?.description,
        healthRisk: user.bmiCategory?.HealthRisk?.description
    };

    return model;
  }

  countUsersByBmiCategory(categoryDescription: string): number {
    //First use our string to find a matching category, then get the count of users from using it
    var matchingCategory = this._db.getCategoryByString(categoryDescription);

    var countUsers = this._db.countUsersByBmiCategory(matchingCategory);
    
    return countUsers;
  }
}
