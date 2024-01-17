<script setup>
import IconHome from "@assets/images/svg/icon-home.svg";
</script>

<template>
  <router-link :to="{ name: 'home' }" class="btn btn--back">
    <IconHome />
  </router-link>
</template>
