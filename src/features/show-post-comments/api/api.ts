import {baseApi} from "shared/api/baseApi";
import {IComment} from "entities/comment/model/types";
import {IPost} from "entities/post/model/types";

export const commentsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostComments: builder.query<IComment[], IPost["id"]>({
            query: (postId: IPost["id"]) => ({
                url: `/posts/${postId}/comments`,
                method: "GET",
            }),
        }),
    }),
})

export const {useGetPostCommentsQuery} = commentsApi
