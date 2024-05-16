export const verifyPassword = async (
  userPassword: string,
  password: string
) => {
  return userPassword === password;
};
