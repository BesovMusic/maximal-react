import React, { FC } from 'react'
import { IPost } from '../context'
import { PostItem } from './PostItem'

type PostListProps = {
    posts: IPost[]
}

export const PostsList: FC<PostListProps> = ({ posts }) => {
    if (!posts.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }
    return (
        <>
            <h1>
                Список постов
            </h1>
            {posts.map(post =>
                <PostItem key={post.id} post={post} />
            )}
        </>
    )
}
