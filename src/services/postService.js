import http from "./httpService";
// import axios from "axios";

const url = "http://localhost:5000/api/posts";

// Getting all posts
export async function getPosts() {
  return await http.get(`${url}`);
}

// Getting a specific post
export async function getPostById(id) {
  return await http.get(`${url}/${id}`);
}

// Deleting a post
export async function deletePost(id) {
  return await http.delete(`${url}/${id}`);
}

// Adding a post
export async function addPost(post) {
  console.log(post);
  if (!post) return;
  // if (post._id) {
  //   const body = { ...post };
  //   delete body._id;
  //   return await http.post(`${url}`);
  // }
  return await http.post(`${url}`, post);
}
