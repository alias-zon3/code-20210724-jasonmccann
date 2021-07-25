import { BmiDatabase } from "../Database/Database";
import { BmiCategory } from "../Entities/BmiCategory";
import { User } from "../Entities/User";
import { UserModel } from "../Models/UserModel";

export class UserRepository {
  private _db: BmiDatabase = new BmiDatabase();

  addUser(userModel: UserModel) {
    var user = new User(
      userModel.gender,
      userModel.heightCm,
      userModel.weightKg,
      userModel.bmi,
      userModel.bmiCategory
    );

    var newUser = this._db.createUser(user);

    //This new user will have the id populated
    return newUser;
  }

  getUser(id: number): UserModel {
    var user = this._db.getUser(id);

    return this.toUserModel(user);
  }

  getAllUsers(): UserModel[] {
    var users = this._db.allUsers();

    //Let's map our user entities to a user model, which is more frontend friendly
    var models = users.map(u => this.toUserModel(u));

    return models;
  }

  countUsersByBmiCategory(categoryDescription: string): number {
    //First use our string to find a matching category, then get the count of users from using it
    var matchingCategory = this._db.getCategoryByString(categoryDescription);

    var countUsers = this._db.countUsersByBmiCategory(matchingCategory);

    return countUsers;
  }

  getBmiCategory(bmi: number) {
    var bmiCategories = this._db.getAllBmiCategories();

    /*As the min and max bmi are nullable, find where our provided bmi is either 1.between min and max, 2.is greater than min with no max, 3.is less than max with no min
    Example scenarios:
        minBmi: null, maxBmi: null --Category that covers all BMIs
        minBmi: null, maxBmi: 25 --Category that covers all BMIs up to 25
        minBmi: 15, maxBmi: 25 --Category that covers all BMIs between 15 and 25
        minBmi: 15, maxBmi: null --Category that covers all BMIs 15 and above
    */

    var matchingBmiCategory = bmiCategories.find(
      (cat) =>
        (!cat.minBmi || cat.minBmi <= bmi) && (!cat.maxBmi || bmi <= cat.maxBmi)
    );

    if (!matchingBmiCategory) {
      throw new Error(`No matching bmi category for a bmi of: ${bmi}`);
    }

    return matchingBmiCategory;
  }

  getHealthRisk(bmiCategory: BmiCategory) {
    if (!bmiCategory.HealthRiskId) {
      throw new Error(`Bmi category must have an associated health risk id`);
    }

    var healthRisks = this._db.getAllHealthRisks();

    var matchingHealthRisk = healthRisks.find(
      (hr) => hr.id == bmiCategory.HealthRiskId
    );

    if (!matchingHealthRisk) {
      throw new Error(
        `No matching health risk with id: {} for a bmi category of: ${bmiCategory.description}`
      );
    }

    return matchingHealthRisk;
  }

  //Private helper method to construct a user model from a user entity
  private toUserModel(user: User) {
    //Let's map our user entity to a user model, which is more frontend friendly
    var model: UserModel = {
      id: user.id,
      gender: user.gender,
      heightCm: user.heightCm,
      weightKg: user.weightKg,
      bmi: user.bmi,
      bmiCategory: user.bmiCategory?.description,
      healthRisk: user.bmiCategory?.HealthRisk?.description,
    };

    return model;
  }
}
