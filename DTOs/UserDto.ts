import { IUserInfo } from "../Interfaces/IUserInfo";

//Define out DTO so that we can return static data (intended to be DTO posted to server and not returned from the server, but purely for testing ATM)
export class UserDto implements IUserInfo {
  gender: string; //TODO swap out for future enum
  heightCm: number;
  weightKg: number;
}