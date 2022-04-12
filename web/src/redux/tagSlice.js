import { createSlice } from '@reduxjs/toolkit';
import { addBlog, deleteBlog, detailBlog, editBlog, getBlog } from '../services/blog.service';
import { addTag, deleteTag, editTag, getTag } from '../services/tag.service';

const initialState = {
    data: null,
    error: null
};

export const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.data = null
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setError } = tagSlice.actions;

// Define a thunk that dispatches those action creators
export const getTagThunk = (dto) => async (dispatch) => {

    try {
        const data = await getTag(dto);
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addTagThunk = (data) => async (dispatch) => {
    try {
        let response = await addTag(data);
        getTagThunk();
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editTagThunk = (tagId, data) => async (dispatch) => {
    try {
        let response = await editTag(tagId, data);
        // getTagThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

// export const detailBlogThunk = (data) => async () => {
//     try {
//         let response = await detailBlog(data);
//         return response
//     } catch (error) {
//         console.log(error)
//     }
// }
export const deleteTagThunk = (data) => async () => {
    try {
        let response = await deleteTag(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default tagSlice.reducer