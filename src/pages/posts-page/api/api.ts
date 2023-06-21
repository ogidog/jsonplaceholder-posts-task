import {baseApi} from "shared/api/baseApi";
import {IPost} from "entities/post/model/types";

export const commentsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<IPost[], void>({
            query: () => ({
                url: `/posts`
            }),
        }),
    }),
})

export const {useGetPostsQuery} = commentsApi;
