import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../components/hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isPostLoading, postError] = useFetching( async () => {
        const response = await PostService.getById(params.id);
        console.log(response);
        setPost(response.data);
      })

    const [fetchComment, isComLoading, comError] = useFetching( async () => {
        const response = await PostService.getComments(params.id);
        console.log(response);
        setComments(response.data);
      })

    useEffect( ()=> {
        fetchPostById(params.id);
        fetchComment(params.id);
    },[]);
    
    return(
        <div>
            { 
                isPostLoading ? <Loader/> :
                <p>
                    <div className="post">
                        <h1>{post.id}.</h1><br/>
                        <h2>{post.title}.</h2><br/>
                            {post.body}
                    </div>
                    <div>
                        <div style={{marginTop:15, marginLeft: 5}}>Comments:{
                            comments.map( (comm) => 
                                <div style={{marginTop: 15}}>
                                    <div style={{marginLeft: 15}}>
                                        {comm.body}
                                    </div>
                                    <h5 style={{marginLeft: 20}}>
                                       {comm.email} 
                                    </h5>

                                </div>
                            )}</div>
                    </div>
                </p>
            }
        </div>
    )
}
