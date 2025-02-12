import React, { useEffect, useState } from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

export const PlayVideo = ({videoId}) => {

  const [apiData, setApiData] = useState(null);

  const fetch_Data = async() =>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url)
    .then(res=>res.json())
    .then(data=>setApiData(data.items[0]))
  }

  useEffect(()=>{
    fetch_Data()
  },[])
  
  return (
    <div className='play-video'>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
          <p>{apiData? value_converter(apiData.statistics.viewCount):"No Views"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          <div>
            <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike} alt="" />{apiData?apiData.statistics.dislikeCount:""}</span>
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
              <div className="comment-action">
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
              <div className="comment-action">
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
              <div className="comment-action">
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
