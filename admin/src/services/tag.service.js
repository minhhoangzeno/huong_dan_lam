import { privateDeleteApi, privatePostApi, publicGetApi } from "../apis/API";

export const getTag = async (dto) => {
    let response = await publicGetApi(`/tag/${dto}`)
    return response
};

export const addTag = async (data) => {
    let response = await privatePostApi('/tag/create', data)
    return response
};

export const editTag = async (tagId, data) => {
    let response = await privatePostApi(`/tag/edit/${tagId}`, data)
    return response
};
// export const detailBlog = async (data) => {
//     let response = await publicGetApi(`/blog/detail/${data}`);
//     return response;
// }

export const deleteTag = async (data) => {
    let response = await privateDeleteApi(`/tag/delete/${data}`)
    return response
};
