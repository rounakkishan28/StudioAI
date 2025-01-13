"use client"
import React, { useEffect, useState } from 'react'
import VideoCreateOption from './_components/VideoCreateOption'
import UserVideoList from './_components/UserVideoList'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

function Dashboard() {

  const [videoList, setVideoList]=useState([]);
  const {user}=useUser();

  useEffect(()=>{
    user && GetUserVideoList();
  },[user]);

  const GetUserVideoList=async()=>{
    const result=await axios.get('/api/video?userEmail='+user?.primaryEmailAddress?.emailAddress);
    setVideoList(result.data);
  }

  return (
    <div className='pb-10 mt-10 sm:mx-32'>
      <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500'>Dashboard</h2>
      {videoList.length==0? <div className='flex flex-col items-center justify-center mt-10'><span className='font-bold text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500'>Let's create your first video</span><VideoCreateOption /></div>:<UserVideoList videoList={videoList} setVideoList={setVideoList} />}
    </div>
  )
}

export default Dashboard
