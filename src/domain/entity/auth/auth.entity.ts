import { userAuth } from '@prisma/client';
import { User } from '../base/user.entity';
export type UserAuth = userAuth & {
  user: User;
};
