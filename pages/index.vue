<script setup lang="ts">
const links = {
  in: "https://www.linkedin.com/in/rostislav-potapochkin-8b4239237/",
  gh: "https://github.com/Porostik",
  tg: "https://t.me/porostik",
};
</script>

<template>
  <div class="index">
    <UText type="primary" size="xl"> Hi! </UText>
    <UText type="secondary" size="md">
      My name is Rostislav I am frontend developer...
    </UText>

    <div class="links">
      <SocialLink :link="links.in">
        <SvgoIn width="14px" height="14px" />
      </SocialLink>
      <SocialLink :link="links.gh">
        <SvgoGh width="20px" height="20px" />
      </SocialLink>
      <SocialLink :link="links.tg">
        <SvgoTg width="22px" height="22px" />
      </SocialLink>
    </div>
  </div>
</template>

<style lang="scss">
.index {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  .links {
    display: flex;
    gap: 6px;
  }
}
</style>
