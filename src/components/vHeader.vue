<script setup>
import VNavbar from "@/components/VNavbar.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header--wrap">
        <router-link :to="{ path: '/' }" class="header-logo">
          <img src="https://placehold.co/130x25?text=Logo" alt="Logo" />
        </router-link>
        <VNavbar />
      </div>
    </div>
  </header>
</template>
