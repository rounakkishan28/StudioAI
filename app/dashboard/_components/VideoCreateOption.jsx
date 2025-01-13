"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import uuid4 from 'uuid4'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { UserDetailContext } from '../../_context/UserDetailContext'
import { toast } from 'sonner'

function VideoCreateOption() {

    const {user}=useUser();
    const {userDetail} = useContext(UserDetailContext);
    const router=useRouter();

    const CreateNewScratchVideo=async()=>{
        if(userDetail?.credits<2){
            toast('Not enough credits!');
            return;
        }
        const videoId=uuid4();
        const result=await axios.post('/api/video',{
            videoId:videoId,
            userEmail:user?.primaryEmailAddress?.emailAddress
        });
        console.log(result);
        router.push('/editor/'+videoId);
    }
    return (
        <div className='flex flex-col w-full items-center justify-center p-16 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-lg shadow-white mt-5'>
            <div className='flex gap-5 items-center justify-center mt-6'>
                <Link href={'/create-ai-video'}>
                    <div className='flex items-center justify-center gap-3 border rounded-lg px-4 py-8 font-light w-full cursor-pointer text-gray-400 hover:bg-black hover:text-white'>
                        <Image src={'/magic-wand.png'} alt='magic-wand' width={40} height={40} />
                        <span className='text-xl'>Generate with AI</span>
                    </div>
                </Link>
                <div onClick={CreateNewScratchVideo}>
                    <div className='flex items-center justify-center gap-3 border rounded-lg px-4 py-8 font-light w-full cursor-pointer text-gray-400 hover:bg-black hover:text-white'>
                        <Image src={'/video-editing.png'} alt='video-editing' width={40} height={40} />
                        <span className='text-xl'>Create from scratch</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCreateOption
