"use client"
import { Button } from '../../../components/ui/button'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { VideoFrameContext } from '../../_context/VideoFrameContext';
import { toast } from 'sonner'

function SaveVideo() {

    const {videoid}=useParams();
    const {videoFrames,setVideoFrames}=useContext(VideoFrameContext);

    const saveVideo=async()=>{
        const result=await axios.put('/api/video',{
            videoId:videoid,
            videoData:videoFrames
        });
        toast('Video Saved!');
    }

    const getVideoData=async()=>{
        const result=await axios.get('/api/video?videoId='+videoid);
        setVideoFrames(result?.data?.videoData);
    }

    useEffect(()=>{
        videoid && getVideoData();
    },[videoid]);

  return (
      <Button variant='outline' onClick={()=>saveVideo()}  className="bg-black text-gray-300 hover:text-gray-900 hover:bg-neutral-300">Save</Button>
  )
}

export default SaveVideo
