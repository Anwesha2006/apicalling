import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
const API="https://yt-saas-2.onrender.com/markdown";
export default function FetchMarkdown() {
 const [markdown,setMarkdown]=useState('');
useEffect(()=>{
    fetch(API)
.then(res=>res.text())
.then(data=>setMarkdown(data))
.catch(error=>console.log(error));
},[]);
      return (
    <div>
         return
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
};

