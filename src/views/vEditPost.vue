<script setup>
import { onMounted, reactive, ref } from "vue";
import iconClose from "@assets/images/svg/icon-close.svg";
import { getPost, editPost } from "@/services/api";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const state = reactive({
  editedPost: {
    id: 0,
    title: "",
    description: "",
    author: "",
    image_src: "",
  },
});

const fetchedPost = ref(null);

const fetchPost = async (id) => {
  const data = await getPost(id);

  if (data && data.length) {
    const [post] = data;
    fetchedPost.value = post;
  }
};

onMounted(async () => {
  const editPostId = route.params.id;
  if (!fetchedPost.value) {
    await fetchPost(editPostId);
  }
  state.editedPost = { ...fetchedPost.value };
});

const editPostHandler = async () => {
  const request = await editPost(state.editedPost);
  if (request) {
    router.push("/");
  }
};
</script>

<template>
  <div class="overlay overlay--edit">
    <button class="overlay-close btn btn--close" @click="$router.push('/')">
      <iconClose />
    </button>
    <div class="overlay-wrap">
      <div class="container">
        <h2>Edit Post</h2>
        <form action="" class="form form--edit">
          <div class="form-group">
            <label for="form-title">Add post title:</label>
            <input
              id="form-title"
              v-model="state.editedPost.title"
              name="form-title"
              type="text"
              class="form-input"
              placeholder="Edit your post title"
            />
          </div>
          <div class="form-group">
            <label for="form-description">Add post description:</label>
            <textarea
              id="form-description"
              v-model="state.editedPost.description"
              name="form-description"
              type="text"
              class="form-textarea"
              placeholder="Edit your post description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="form-description">Add post author:</label>
            <input
              id="form-author"
              v-model="state.editedPost.author"
              name="form-author"
              type="text"
              class="form-input"
              placeholder="Edit your post author"
            />
          </div>
          <div class="form-group group--flex">
            <div>
              <label for="form-image">Add image url:</label>
              <input
                id="form-image"
                v-model="state.editedPost.image_src"
                name="form-image"
                type="text"
                class="form-input"
                placeholder="https://placehold.co/600x400"
              />
            </div>
            <div>
              <label>Your image preview:</label>
              <img :src="state.editedPost.image_src" />
            </div>
          </div>
        </form>
        <div class="edit-actions">
          <router-link :to="{ path: '/' }" class="btn btn--primary">
            Cancel
          </router-link>
          <button class="btn btn--secondary" @click="editPostHandler">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
