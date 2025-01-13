"use client"
import axios from 'axios'
import { Download, Edit, Loader2, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner'

function UserVideoList({ videoList, setVideoList }) {

    const [loading,setLoading]=useState(false);

    const deleteVideo=async(videoid)=>{
        setLoading(true);
        const result=await axios.delete('/api/video?videoId='+videoid);
        const updatedVideoList=videoList?.filter((video,index)=>video?.videoId!==videoid);
        setVideoList(updatedVideoList);
        setLoading(false);
        toast('Video Deleted!');
    }

    return (
        <div className='mt-5'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {videoList.map((video, index) => (
                    <div key={index} className='shadow-2xl rounded-xl p-2'>
                        <Link href={'/editor/' + video?.videoId}>
                            <div className='w-full h-[170px] flex items-center justify-center rounded-xl shadow-md shadow-white relative group'
                                style={{
                                    background: video?.videoData?.frameList[0].bgColor ?? '#fff'
                                }}
                            >
                                <h2 style={{
                                    color: video?.videoData?.frameList[0].textColor ?? '#000'
                                }}>{video?.videoData?.frameList[0].text ?? 'Hello World'}</h2>
                                <div className='absolute top-0 w-full h-full opacity-0 group-hover:opacity-45 flex items-center justify-center text-white bg-black rounded-xl cursor-pointer'>
                                    <Edit className='z-20' />
                                </div>
                            </div>
                        </Link>
                        <div className='flex gap-5 mt-3 items-center justify-end text-gray-100'>
                            {loading && <h2 className='flex items-center gap-2'><Loader2 className='h-4 w-4 animate-spin' />Deleting...</h2>}
                            <Link href={'/editor/' + video?.videoId}><Edit className={`h-4 w-4 cursor-pointer ${loading && 'opacity-45'}`} /></Link>
                            <Download className={`h-4 w-4 cursor-pointer ${loading && 'opacity-45'}`} onClick={()=>toast('Feature comming soon!')} />
                            <Trash className={`h-4 w-4 cursor-pointer ${loading && 'opacity-45'}`} onClick={()=>deleteVideo(video?.videoId)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserVideoList
