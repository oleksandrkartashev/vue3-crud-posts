<script setup>
import VNavbar from "@/components/VNavbar.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header--wrap">
        <router-link :to="{ path: '/' }" class="header-logo">
          _CRUD
        </router-link>
        <VNavbar />
      </div>
    </div>
  </header>
</template>
