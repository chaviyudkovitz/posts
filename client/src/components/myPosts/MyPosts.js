import React, { useEffect, useState } from 'react';
import { getMyPosts, deletePost, createPost ,editpost} from '../../services/postService';
import HandelPostButten from './HandelPostButten'
import IconTrash from '../icons/IconTrash'


export default function MyPosts() {

    const [postsList, setPostsList] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [currentPost, setCurrentPost] = useState();

    useEffect(async () => {
        try{
            const posts = await getMyPosts();
        setPostsList(posts);
        }
        catch(err){
            alert(err);
        }
        }, [isChanged])

    async function removePost(postId) {
        try{
        await deletePost(postId);
        setIsChanged(!isChanged);
    }
    catch(err){
        alert(err);
    }
    }

    const editPost = async (inputTitle,inputData) => {
        try{       
        await editpost(currentPost._id, inputTitle, inputData);
        setIsChanged(!isChanged);
     }catch(err){
         alert(err);
     }
    }

    const addPost = async (inputTitle, inputData) => {
        try{
            await createPost(inputTitle, inputData);
        setIsChanged(!isChanged);
        }
        catch(err){
            alert(err);
        }
        
    }


    return (
        <>
        
            <h1>My Posts</h1>

            {postsList ?
                <>
                    <table className="table">
                        
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>                            
                               { postsList.map((post, index) =>
                                    <tr key={index}>
                                        <td>
                                                                                   
                                            <button class="btn btn-lg  text-left btn-block" 
                                            data-toggle="collapse"
                                             data-target={`#${index}`}
                                              aria-expanded="true" 
                                              aria-controls="collapseOne">
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
                                     
                                        </td>

                                        <td>
                                            <button  class="btn btn-danger" 
                                            onClick={() => removePost(post._id)}>
                                            <IconTrash/></button>
                                        </td>

                                        <td>
                                            <HandelPostButten
                                            currentPost={currentPost} 
                                            setCurrentPost={setCurrentPost}
                                             name={'Edit'}
                                             post={post} 
                                            handelPost={(inputTitle,inputData)=>editPost(inputTitle,inputData)}
                                            />

                                        </td>

                                    </tr>
                                )
                            }   
                        </tbody>

                    </table>

                    <HandelPostButten 
                    setCurrentPost={setCurrentPost}
                    name={'Add'} 
                    handelPost={(inputTitle,inputData)=>addPost(inputTitle,inputData)} 
                    />
                    
                </>

                : ""
            }

        </>
    )
}