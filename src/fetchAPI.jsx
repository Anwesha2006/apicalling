import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
const API="https://yt-saas-2.onrender.com/generate-blog/";
export default function YoutubeToBlog() {
 const[url,setUrl]=useState("")
 const [markdown,setMarkdown]=useState("");
 const[loading,setLoading]=useState(false);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!url)
      {
        setMarkdown("Enter a youtube URL");
        return;
      }
    setLoading(true);
    setMarkdown("");
  try{
    const response=await fetch(API,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({url:url}),
  });
  const data=await response.json();
  setMarkdown(data.markdown_content||"No content received");
}catch(error){
  console.log("Error:",error);
  setMarkdown("Failed to generate blog.Try Again");
}
setLoading(false);
};
      return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter Youtube URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
         <button type="submit" disabled={loading}>
          {loading?"Converting...":"Convert"}
         </button>
         </form>
         <div>
        {loading?<p>Loading...</p>:<ReactMarkdown>{markdown}</ReactMarkdown>}
    </div>
    </div>
  );
}

