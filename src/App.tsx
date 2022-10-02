import React, { useEffect, useState } from 'react';
import './App.css';
import { PostsList } from './components/PostsList';
import axios from 'axios'
import { PostInfo } from './components/PostInfo';
import { MyLoader } from './components/UI/MyLoader';
import { IPost, PostContext } from './context';

function App() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPostId, setCurrentPostId] = useState<number | null>(null);

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
            .then(responce => {
                setPosts(responce.data);
                setIsLoading(false)
            })
    }, [])

    return (
        <PostContext.Provider value={{
            postList: posts,
            selectedPostId: currentPostId,
            selectPost: setCurrentPostId
        }}>
            {isLoading
                ? <MyLoader />
                : <div className="App">
                    <div className="left"><PostsList posts={posts} /></div>
                    <div className="right"><PostInfo /></div>
                </div>}
        </PostContext.Provider>
    );
}

export default App;
