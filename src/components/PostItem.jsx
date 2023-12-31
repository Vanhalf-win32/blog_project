import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';


export default function PostItem(props) {
    const router = useNavigate();
    return (
      <div className="post">
        <div className="post__content">
            <strong>{props.post.id}.</strong>
            <p>{props.post.title}.</p> 
            <div>
              <strong>{props.post.body}!</strong>
              </div>
          <div className="post__btn">
                <MyButton 
                  onClick = {() => router(`${props.post.id}`)} >
                    Open
                </MyButton>
                <MyButton 
                  onClick = {() => props.remove(props.post)} >
                    Delete
                </MyButton>
          </div>
        </div>
      </div>
    )
} 