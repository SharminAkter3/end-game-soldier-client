import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './Post/PostCard';
import UploadPost from './UploadPost';

const Home = () => {
    const allPost = useLoaderData();
    return (
        <div>
            <UploadPost></UploadPost>
            <h2 className='text-3xl font-semibold text-center'>All post here : {allPost.length} </h2>
            {
                allPost.map(post => <PostCard
                    key={post._id}
                    post={post}
                ></PostCard>)
            }
        </div>
    );
};

export default Home;