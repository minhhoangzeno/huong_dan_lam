import { createSlice } from '@reduxjs/toolkit';
import { addBlog, deleteBlog, detailBlog, editBlog, getBlog } from '../services/blog.service';
import { addTest } from '../services/test.service';

const initialState = {
    data: null,
    error: null
};

export const testSlice = createSlice({
    name: 'test',
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
export const { setData, setError } = testSlice.actions;

// Define a thunk that dispatches those action creators
export const getBlogThunk = (dto) => async (dispatch) => {

    try {
        const data = await getBlog(dto);
        dispatch(setData(data))
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addTestThunk = (data) => async (dispatch) => {
    try {
        let response = await addTest(data);
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editBlogThunk = (blogId, data) => async (dispatch) => {
    try {
        let response = await editBlog(blogId, data);
        getBlogThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const detailBlogThunk = (data) => async () => {
    try {
        let response = await detailBlog(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export const deleteBlogThunk = (data) => async () => {
    try {
        let response = await deleteBlog(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default testSlice.reducer