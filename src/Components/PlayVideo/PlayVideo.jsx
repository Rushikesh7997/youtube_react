import React from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"

export const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Video Title</h3>
        <div className="play-video-info">
          <p>1525 Views &bull; 2 days ago</p>
          <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
          </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={jack} alt="" />
            <div>
              <p>Channel Name</p>
              <span>1M Subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
          <p>Channel that make learning easy.</p>
          <p>Subscribe My Youtube channel for more videos.</p>
          <hr />
          <h4>130 Comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 Day Ago</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor earum accusamus quisquam totam neque ducimus ratione commodi dignissimos, dolorum, doloribus eveniet quae nostrum et a omnis error dicta voluptate!</p>
              <div className="comment-section">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 Day Ago</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor earum accusamus quisquam totam neque ducimus ratione commodi dignissimos, dolorum, doloribus eveniet quae nostrum et a omnis error dicta voluptate!</p>
              <div className="comment-section">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Jack Nicolson <span>1 Day Ago</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor earum accusamus quisquam totam neque ducimus ratione commodi dignissimos, dolorum, doloribus eveniet quae nostrum et a omnis error dicta voluptate!</p>
              <div className="comment-section">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
