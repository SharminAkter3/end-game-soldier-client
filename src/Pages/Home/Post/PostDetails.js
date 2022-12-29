import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const posts = useLoaderData();
    // const { _id, title, author, details, image_url, total_view } = posts;
    return (
        <div>
            <h2>{posts.title}</h2>
        </div>

        // <div className='flex justify-center'>
        //     <div className="card w-100 mx-20 my-5 bg-base-100 shadow-xl">
        //         <div className="card-body">
        //             <h2 className="card-title text-center">{title}</h2>
        //         </div>
        //         <figure><img src={image_url} alt="Shoes" /></figure>
        //         <div className='m-5'>
        //             <p>
        //                 {details}
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PostDetails;