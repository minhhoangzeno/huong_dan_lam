import { privateDeleteApi, privateGetApi, privatePostApi, publicGetApi } from "../apis/API";

export const getOrderByUser = async () => {
  let response = await privateGetApi(`/order/user`)
  return response
};
export const addOrder = async (data) => {
    let response = await privatePostApi('/order/create', data)
    return response
};


export const deleteOrder = async (data) => {
  let response = await privateDeleteApi(`/order/delete/${data}`)
  return response
};

// export const editBlog = async (blogId, data) => {
//     let response = await privatePostApi(`/blog/edit/${blogId}`, data)
//     return response
// };
// export const detailBlog = async (data) => {
//     let response = await publicGetApi(`/blog/detail/${data}`);
//     return response;
// }

// export const deleteBlog = async (data) => {
//     let response = await privateDeleteApi(`/blog/delete/${data}`)
//     return response
// };
