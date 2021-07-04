import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api' })

const getPost = (postID) => async () =>{
  const res = await instance.get('/getPost', { params: { ID: postID } });
  return res.data;
}

//export { getMainFeaturedPost, getFeaturedPost, getSideBar, getPost}
export {instance, getPost};