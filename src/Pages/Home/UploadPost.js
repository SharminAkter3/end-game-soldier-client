import React from 'react';

const UploadPost = () => {

    const handleAddPost = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image_url = form.image_url;
        const details = form.details.value;
        console.log(title, image_url, details);

        // const post = {
        //     title: title,
        //     image_url: image_url,
        //     details: details
        // }
    }

    return (
        <div className='mx-20 my-5'>
            <h2 className='text-2xl font-semibold m-4'>Upload Post Here: </h2>
            <form onSubmit={handleAddPost}>
                <div className="form-control grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Post Title" className="input w-full input-bordered rounded-xl" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='image_url' placeholder="Photo URL" className="input w-full input-bordered rounded-xl" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Post Details</span>
                    </label>
                    <textarea name='details' className="textarea textarea-bordered h-18 w-full" placeholder="Bio"></textarea>
                </div>
                <button className='btn btn-outline btn-primary w-full mt-2'>Submit</button>
            </form>
        </div>
    );
};

export default UploadPost;