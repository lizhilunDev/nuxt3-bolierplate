import { Notify } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (err: unknown) => {
    if (err instanceof Error) {
      Notify.create({
        message: err.message,
        type: 'warning',
      });
    }
  });

  nuxtApp.hook('vue:error', (err: unknown) => {
    if (err instanceof Error) {
      Notify.create({
        message: err.message,
        type: 'negative',
      });
    }
  });
});
