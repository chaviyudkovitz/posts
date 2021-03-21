
import React, { useEffect, useState } from 'react';
import { addToMyPost } from '../services/postService';

export default function Posts() {
    const [posts, setPosts] = useState();

    useEffect(async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const post = await result.json();
            setPosts(post)
        }
        catch (err) {
            alert(err);
        }
    }, [])

    async function addPost(postToAdd) {
        try {
            await addToMyPost(postToAdd);
        }
        catch (err) {
            alert(err);
        }

    }
    return (
        <>
            <h1>posts</h1>

            {posts ?
                <table className="table">

                    <tbody>
                        {
                            posts.map((post, index) =>
                                <tr>
                                    <td key={index}>

                                        <div class="card">

                                            <button class="btn btn-lg  text-left btn-block"
                                                data-toggle="collapse"
                                                data-target={`#${index}`}
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={() => { addPost(post) }}>
                                                {post.title}
                                            </button>

                                            <div id={`${index}`}
                                                class="collapse "
                                                aria-labelledby="headingOne"
                                                data-parent="#accordion">

                                                <div class="card-body">
                                                    {post.body}
                                                </div>

                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )}

                    </tbody>
                </table>

                : ""}

        </>
    )
}
