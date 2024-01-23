const APIurl = "http://localhost:3000";

export const getSinglePost = async (id) => {
  const response = await fetch(`${APIurl}/posts/?id=${id}`);
  return response.json();
};

export const getPosts = async () => {
  const response = await fetch(`${APIurl}/posts/`);
  return response.json();
};

export const deleteSinglePost = async (id) => {
  const response = await fetch(`${APIurl}/posts/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const editSinglePost = async (post) => {
  const response = await fetch(`${APIurl}/posts/${post.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const addSinglePost = async (post) => {
  const response = await fetch(`${APIurl}/posts/`, {
    method: 'POST',
    body: JSON.stringify(post),
  });
  return response.json();
};