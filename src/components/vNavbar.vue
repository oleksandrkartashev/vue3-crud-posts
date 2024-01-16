<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const showNavbar = ref(false);
    const isUserLogged = computed(() => !!localStorage.getItem("user"));
    const isDevEnv = computed(() => location.hostname === "localhost");

    const isMobile = computed(() => windowWidth.value < 768);
    const getCurrentPagePath = computed(() => this.$route.name);

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    const userLogout = () => {
      this.$store.dispatch.dispatch("auth/logout");
      window.location.reload();
    };

    const openNavbar = () => {
      showNavbar.value = !showNavbar.value;
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });

    return {
      windowWidth,
      showNavbar,
      isUserLogged,
      isDevEnv,
      isMobile,
      getCurrentPagePath,
      updateWindowWidth,
      userLogout,
      openNavbar,
    };
  },
};
</script>

<template>
  <nav class="nav">
    <ul class="nav-list" :class="{ 'nav-list--active': showNavbar }">
      <li class="nav-item">
        <router-link :to="{ path: '/' }" class="nav-link">Home</router-link>
      </li>
    </ul>
    <button
      v-if="isMobile"
      class="nav-btn btn--toggle"
      :class="{ 'btn--toggle--active': showNavbar }"
      @click="openNavbar"
    >
      <i></i>
    </button>
  </nav>
</template>
