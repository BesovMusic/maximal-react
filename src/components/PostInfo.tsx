import React, { FC, useContext } from 'react'
import { IPost, PostContext } from '../context'

export const PostInfo: FC = () => {

    const { postList, selectedPostId } = useContext(PostContext);
    const currentPost = postList.find(post => post.id === selectedPostId) as IPost
    return (
        <>
            <h1>
                Подробности
            </h1>
            <div className='post__info'>
                {selectedPostId !== null
                    ? <>
                        <div className="postInfo__title">
                            <span className='post__id'>{currentPost.id}.</span> {currentPost.title}
                        </div>
                        <div className="post__body">{currentPost.body}</div>
                    </>
                    : <h2>Выберите пост из списка</h2>}
            </div>
        </>
    )
}
