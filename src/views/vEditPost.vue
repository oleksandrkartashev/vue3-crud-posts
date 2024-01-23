<script setup>
import { onMounted, ref } from "vue";
import iconClose from "@assets/images/svg/icon-close.svg";
import { getSinglePost, editSinglePost } from "@/services/api";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const fetchedPost = ref(null);

const editedPost = ref({
  id: 0,
  title: "",
  description: "",
  author: "",
  image_src: "",
});

const fetchPost = async (id) => {
  const data = await getSinglePost(id);

  if (data) {
    const [post] = data;
    fetchedPost.value = post;
  }
};

onMounted(async () => {
  const editPostId = route.params.id;
  if (!fetchedPost.value) {
    await fetchPost(editPostId);
  }
  editedPost.value = { ...fetchedPost.value };
});

const submitEdit = async () => {
  const request = await editSinglePost(editedPost.value);
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
              v-model="editedPost.title"
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
              v-model="editedPost.description"
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
              v-model="editedPost.author"
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
                v-model="editedPost.image_src"
                name="form-image"
                type="text"
                class="form-input"
                placeholder="https://placehold.co/600x400"
              />
            </div>
            <div>
              <label>Your image preview:</label>
              <img :src="editedPost.image_src" />
            </div>
          </div>
        </form>
        <div class="edit-actions">
          <router-link :to="{ path: '/' }" class="btn btn--primary">
            Cancel
          </router-link>
          <button class="btn btn--secondary" @click="submitEdit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
