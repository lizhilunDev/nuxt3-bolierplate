<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt Mastery Class');
const description = ref(
  '짐코딩과 함께 Vue3 기보부터 실전, 활용! 그리고 Nuxt Framework까지 함께 배워봐요!'
);
useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 짐코딩 Vue & Nuxt 강의`
      : '짐코딩 Vue & Nuxt 강의';
  },
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
  googleSiteVerification: 'AZqU1uJ7TliNt1GOfdCIjj_5742XQ6LUJQEaitQJtaA',
});
</script>
<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
