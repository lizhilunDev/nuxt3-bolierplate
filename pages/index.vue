<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-bold q-mb-md text-subtitle1">
        해당 웹 사이트는 "Nuxt 3 완벽 마스터" 강의를 위해 제작된 웹 사이트
        입니다.
        <a
          class="text-primary"
          href="https://inf.run/VdeXX#reviews"
          target="_blank"
        >
          강의보기</a
        >
      </div>
      <PageTitle title="All Courses" />
      <PageDescription description="웹 개발 입문부터 실전까지 학습해보세요!" />
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <NuxtLink :to="path">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = await useCourses();

console.log('index.vue', process.server);
</script>

<style scoped></style>
