import { UserStatus } from '../../enums/user-status';

export class User {
  constructor(
    public name: string,
    public surnames: string,
    public phone: string,
    public birthdate: Date | string,
    public status: UserStatus,
    public email?: string,
  ) {}
}
