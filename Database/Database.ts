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

  allUsers(): User[] {
    return this.state.users;
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
    if (!category) {
      throw new Error(`A category must be provided`);
    }

    var matchingCategory = this.state.bmiCategories.find(
      (cat) => cat.description == category
    );

    if (!matchingCategory) {
      throw new Error(`No matching bmi category for query: ${category}`);
    }

    return matchingCategory;
  }

  getAllHealthRisks(): HealthRisk[] {
    return this.state.healthRisks;
  }

  getAllBmiCategories(): BmiCategory[] {
    return this.state.bmiCategories;
  }

  public resetState() {
    this.state = this.newState();
  }

  private newState(): IBmiDatabaseState {
    //Add seed data for BmiCategory and HealthRisk that conform to what we know based on spec sheet
    return {
      users: [],
      bmiCategories: [
        {
          id: 1,
          description: "Underweight",
          minBmi: undefined,
          maxBmi: 18.4,
          HealthRiskId: 1,
          HealthRisk: { id: 1, description: "Malnutrition risk" },
        },
        {
          id: 2,
          description: "Normal weight",
          minBmi: 18.5,
          maxBmi: 24.9,
          HealthRiskId: 2,
          HealthRisk: { id: 2, description: "Low risk" },
        },
        {
          id: 3,
          description: "Overweight",
          minBmi: 25,
          maxBmi: 29.9,
          HealthRiskId: 3,
          HealthRisk: { id: 3, description: "Enhanced risk" },
        },
        {
          id: 4,
          description: "Moderately obese",
          minBmi: 30,
          maxBmi: 34.9,
          HealthRiskId: 4,
          HealthRisk: { id: 4, description: "Medium risk" },
        },
        {
          id: 5,
          description: "Severely obese",
          minBmi: 35,
          maxBmi: 39.9,
          HealthRiskId: 5,
          HealthRisk: { id: 5, description: "High risk" },
        },
        {
          id: 6,
          description: "Very severely obese",
          minBmi: 40,
          maxBmi: undefined,
          HealthRiskId: 6,
          HealthRisk: { id: 6, description: "Very high risk" },
        },
      ],
      healthRisks: [
        { id: 1, description: "Malnutrition risk" },
        { id: 2, description: "Low risk" },
        { id: 3, description: "Enhanced risk" },
        { id: 4, description: "Medium risk" },
        { id: 5, description: "High risk" },
        { id: 6, description: "Very high risk" },
      ],
    };
  }
}
