import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHandPointRight, FaComment } from "react-icons/fa";

const PostCard = ({ post }) => {
    const { _id, title, author, details, image_url, total_view } = post;
    return (
        <div className='flex justify-center'>
            <div className="card w-100 mx-20 my-5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center">{title}</h2>
                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className='m-5'>

                    {details.length > 200 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/posts/${_id}`}>Details</Link></p>
                        :
                        <p>
                            {details}
                        </p>
                    }
                </div>
                <div className="card-actions flex mb-5">
                    <p className="text-red-600 mx-2 flex"> <FaHeart className='mr-3' />  Love</p>
                    <p className="text-blue-600 mx-2 flex "><FaHandPointRight className='mr-3' /> Like</p>
                    <p className="text-black mx-2 flex "><FaComment className='mr-3' /> Comment</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;