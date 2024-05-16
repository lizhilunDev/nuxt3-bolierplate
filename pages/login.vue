<script setup lang="ts">
definePageMeta({
  middleware: ['guest-only'],
});

const handleLoginSuccess = async () => {
  const authStore = useAuthStore();
  const { isAdmin } = storeToRefs(authStore);
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>

<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <AuthPageTitle title="Login" />
      <AuthPageDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>
