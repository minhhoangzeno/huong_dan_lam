import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import blogReducer from './blogSlice';
import authReducer from './authSlice';
import videoReducer from './videoSlice';
import productReducer from './productSlice';
import countdownReducer from './countdownSlice';
import dashboardReducer from './dashboardSlice';
import userReducer from './userSlice';
import feedbackReducer from './feedbackSlice';
import categoryReducer from './categorySlice';
import orderReducer from './orderSlice';
import tagReducer from './tagSlice';
//USE TOOLKIT
const rootReducer = {
    reducer: {
        progress: progressReducer,
        blog: blogReducer,
        auth: authReducer,
        video: videoReducer,
        product: productReducer,
        countdown: countdownReducer,
        dashboard: dashboardReducer,
        user: userReducer,
        feedback: feedbackReducer,
        category: categoryReducer,
        order: orderReducer,
        tag: tagReducer

    },
};

export const store = configureStore(rootReducer);
