import type { UserWithoutPassword } from '~/types/user';

export const useAuthUser = () =>
  useState<Maybe<UserWithoutPassword>>('user', () => null);
