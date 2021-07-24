//Due to time constraints I am choosing to just have the database with a state object which holds a representation of what it would look like
import { BmiCategory } from "../Entities/BmiCategory";
import { HealthRisk } from "../Entities/HealthRisk";
import { User } from "../Entities/User";

interface IBmiDatabaseState {
  users: User[];
  bmiCategories: BmiCategory[];
  healthRisks: HealthRisk[];
}

export class BmiDatabase {
  private state: IBmiDatabaseState = this.newState();

  createUser(user: User): User {
    if (!user) {
      throw new Error("A user is required");
    }

    const newUser = {
      id: this.state.users.length + 1,
      ...user,
    };

    this.state.users.push(newUser);

    return newUser;
  }

  getUser(id: number): User {
    if (!id) {
      throw new Error(`An id is required`);
    }

    var matchedUser = this.state.users.find((user) => user.id == id);

    if (!matchedUser) {
      throw new Error(`No user found with id ${id}`);
    }

    return matchedUser;
  }

  countUsersByBmiCategory(category: BmiCategory): number {
    if (!category) {
      throw new Error(`A bmi category is required`);
    }

    var matchedUsersCount = this.state.users.filter(
      (user) => user.bmiCategory?.id == category?.id
    ).length;

    return matchedUsersCount;
  }

  getCategoryByString(category: string): BmiCategory {
      if(!category) {
          throw new Error(`A category must be provided`);
      }

      var matchingCategory = this.state.bmiCategories.find(cat => cat.description == category);

      if(!matchingCategory) {
          throw new Error(`No matching bmi category for query: ${category}`);
      }

      return matchingCategory;
  }

  public resetState() {
    this.state = this.newState();
  }

  private newState(): IBmiDatabaseState {
    return {
      users: [],
      bmiCategories: [],
      healthRisks: [],
    };
  }
}
