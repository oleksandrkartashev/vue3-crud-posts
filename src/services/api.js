const API_URL = "http://localhost:3000";

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (e) {
    console.error("Error during API request:", e.message);
    throw e;
  }
};

export const getPost = async (id) => {
  return fetchJson(`${API_URL}/posts/?id=${id}`);
};

export const getPosts = async () => {
  return fetchJson(`${API_URL}/posts/`);
};

export const deletePost = async (id) => {
  return fetchJson(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });
};

export const editPost = async (post) => {
  return fetchJson(`${API_URL}/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

export const addPost = async (post) => {
  return fetchJson(`${API_URL}/posts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};
