import React, { useEffect } from 'react'
import "./style.css";
export default function OldPage() {
    useEffect(()=>{
        const script=document.createElement("script");
        script.src="/script.js";
        script.async=true;
        document.body.appendChild(script);
        return()=>{
            document.body.removeChild(script);
        };
    },[]);
  return (
    <div>
       <div id="root">
  <div class="container">
    <h2>YouTube-to-Blog</h2>

    <div class="input-box">
      <input type="text" id="youtubeUrl" placeholder="Enter YouTube URL"/>
      <button onclick="convert()">Convert</button>
    </div>

    <div class="content">
      
      <div class="box">
        <h3>Blog Preview</h3>
        <p id="blogTitle"><b>Blog Title:</b> Example Blog</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed at felis eu ligula pulvinar dapibus.</p>
      </div>
      <div class="box">
        <h3>Blog Mode</h3>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
}

