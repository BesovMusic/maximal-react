import React, { FC, useContext } from 'react'
import { IPost, PostContext } from '../context'

type Post = {
    post: IPost
}

export const PostItem: FC<Post> = ({ post }) => {

    const { selectedPostId, selectPost } = useContext(PostContext);

    function clickHandler() {
        selectPost(post.id)
    }

    return (
        <div className={selectedPostId === post.id ? 'post active' : 'post'} onClick={clickHandler}>
            <p className='post__title'>{post.id}. {post.title}</p>
        </div>
    )
}
