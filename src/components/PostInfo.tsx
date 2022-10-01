import React, { FC, useContext } from 'react'
import { IPost, PostContext } from '../context'

export const PostInfo: FC = () => {

    const { postList, selectedPostId } = useContext(PostContext);
    const currentPost = postList.find(post => post.id === selectedPostId) as IPost
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>
                Подробности
            </h1>
            <div className='post__info'>
                {selectedPostId !== null
                    ? currentPost.id
                    : <h2>Выберите пост из списка</h2>}
            </div>
        </>
    )
}
