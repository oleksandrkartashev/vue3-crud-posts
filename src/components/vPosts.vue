<script setup>
const props = defineProps({
  posts: Array,
});

const getPostStatusClass = (status) => {
  return {
    "post-published": status === "published",
    "post-draft": status === "draft",
    "post-pending": status === "pending",
  };
};
</script>

<template>
  <ul class="posts">
    <li v-for="post in props.posts" :key="post.id" class="posts-item">
      <router-link :to="{ name: 'post', params: { id: post.id } }" class="post">
        <div class="post-image">
          <img :src="post.image_src" />
        </div>
        <div class="post-content">
          <span class="post-status" :class="getPostStatusClass(post.status)">{{
            post.status
          }}</span>
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <span class="post-meta">31 December 2023</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>
