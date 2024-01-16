<script>
import { defineComponent } from "vue";
import VHeader from "@/components/VHeader.vue";

export default defineComponent({
  components: {
    VHeader,
  },
});
</script>

<template>
  <div>
    <VHeader />
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
