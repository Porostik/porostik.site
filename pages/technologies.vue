<script setup lang="ts">
definePageMeta({
  middleware: ["page"],
});
</script>

<template>
  <div class="technologies">
    <UText type="secondary" size="xl"> Technologies </UText>

    <div class="technologiesBlock">
      <UText type="primary" size="sm">Frontend:</UText>
      <div class="technologiesList">
        <UBadge>HTML5</UBadge>
        <UBadge>CSS3</UBadge>
        <UBadge>JavaScript</UBadge>
        <UBadge>React</UBadge>
        <UBadge>TypeScript</UBadge>
        <UBadge>Redux</UBadge>
        <UBadge>Redux-Toolkit</UBadge>
        <UBadge>Redux-Saga</UBadge>
        <UBadge>Effector</UBadge>
        <UBadge>MobX</UBadge>
        <UBadge>Jest</UBadge>
        <UBadge>Cypress</UBadge>
        <UBadge>FSD</UBadge>
        <UBadge>CI/CD</UBadge>
      </div>
    </div>

    <div class="technologiesBlock">
      <UText type="primary" size="sm">Backend:</UText>
      <div class="technologiesList">
        <UBadge>NestJs</UBadge>
        <UBadge>Sequlize</UBadge>
        <UBadge>GraphQl</UBadge>
      </div>
    </div>

    <div class="technologiesBlock">
      <UText type="primary" size="sm">Interesting in:</UText>
      <div class="technologiesList">
        <UBadge>VueJs</UBadge>
        <UBadge>NuxtJs</UBadge>
        <UBadge>NextJs</UBadge>
        <UBadge>Golang</UBadge>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.technologies {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  .technologiesBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &:nth-child(2) {
      padding-top: 40px;
    }

    & + .technologiesBlock {
      margin-top: 20px;
    }

    .technologiesList {
      display: flex;
      flex-wrap: wrap;

      gap: 8px;
      margin-top: 6px;
    }
  }
}
</style>
