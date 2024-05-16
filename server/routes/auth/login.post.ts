import { getUserByEmail } from '~/server/models/user';
import { verifyPassword } from '~/server/utils/password';

export default defineEventHandler(async (event) => {
  const body = readBody<{ email: string; password: string }>(event);

  const { email, password } = await body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  const userWithPassword = getUserByEmail(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const verified = await verifyPassword(password, userWithPassword.password);

  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  setCookie(event, '__user', JSON.stringify(userWithoutPassword));

  return {
    user: userWithPassword,
  };
});
