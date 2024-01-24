<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import iconClose from "@assets/images/svg/icon-close.svg";
import { getPosts, addPost } from "@/services/api";
import { useRouter } from "vue-router";

const router = useRouter();
const postsCount = ref(null);

const state = reactive({
  newPost: {
    id: "",
    title: "",
    description: "",
    author: "",
    image_src: "",
  },
});

const getPostsCount = async () => {
  const data = await getPosts();
  postsCount.value = data.length;
};

const addPostHandler = async () => {
  const { title, description, image_src } = state.newPost;
  state.newPost.id = String(postsCount.value + 1);
  if (title && description && image_src) {
    const data = await addPost(state.newPost);
    if (data) {
      router.push("/");
    }
  }
};

onBeforeMount(async () => {
  await getPostsCount();
});
</script>

<template>
  <div class="overlay overlay--add">
    <button class="overlay-close btn btn--close" @click="$router.push('/')">
      <iconClose />
    </button>
    <div class="overlay-wrap">
      <div class="container">
        <h2>Add Post</h2>
        <form action="" class="form form--add">
          <div class="form-group">
            <label for="form-title">Add post title:</label>
            <input
              id="form-title"
              v-model="state.newPost.title"
              name="form-title"
              type="text"
              class="form-input"
              placeholder="My New Post"
            />
          </div>
          <div class="form-group">
            <label for="form-description">Add post description:</label>
            <textarea
              id="form-description"
              v-model="state.newPost.description"
              name="form-description"
              type="text"
              class="form-textarea"
              placeholder="My Super long & interesting description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="form-description">Add post author:</label>
            <input
              id="form-author"
              v-model="state.newPost.author"
              name="form-author"
              type="text"
              class="form-input"
              placeholder="Awesome author"
            />
          </div>
          <div class="form-group group--flex">
            <div>
              <label for="form-image">Add image url:</label>
              <input
                id="form-image"
                v-model="state.newPost.image_src"
                name="form-image"
                type="text"
                class="form-input"
                placeholder="https://placehold.co/600x400"
              />
            </div>
            <div>
              <label>Your image preview:</label>
              <img :src="state.newPost.image_src" />
            </div>
          </div>
        </form>
        <div class="add-actions">
          <router-link :to="{ path: '/' }" class="btn btn--primary">
            Cancel
          </router-link>
          <button class="btn btn--secondary" @click="addPostHandler">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
