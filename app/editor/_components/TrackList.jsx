"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button';
import { Trash2 } from 'lucide-react';
import { VideoFrameContext } from '../../_context/VideoFrameContext';

const defaultFrame = {
    image: '/footage.png',
    text: 'Hello World',
    textColor: 'black',
    fontSize: 20,
    duration: 2,
    bgColor: '#FFFFFF',
    fontFamily:'Bungee',
    animation:'zoomIn',
    music:'none'
}

function TrackList() {

    const [frameList, setFrameList] = useState([defaultFrame]);
    const [selectedFrame, setSelectedFrame] = useState(0);
    const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);

    const addNewFrame = () => {
        setFrameList(prev => [...prev, defaultFrame])
    }

    const removeFrame = (indexToRemove) => {
        const updatedFrameList = frameList?.filter((_, index) => index !== indexToRemove);
        setFrameList(updatedFrameList);
    }

    useEffect(() => {
        let totalDuration = 0;
        frameList?.forEach((frame) => {
            totalDuration = totalDuration + frame.duration;
        })
        frameList && setVideoFrames((prev)=>({
            ...prev,
            totalDuration: totalDuration,
            frameList: frameList,
            selectedFrame: selectedFrame,
        }))
    }, [frameList, selectedFrame])

    useEffect(() => {
        if (videoFrames && videoFrames?.frameList !== frameList) {
            setFrameList(videoFrames?.frameList);
        }
    }, [videoFrames]);

    return (
        <div className='p-5 bg-black rounded-lg'>
            <div className='h-[75vh] overflow-scroll scrollbar-hide'>
                {frameList?.map((frame, index) => (
                    <div key={index} className={`flex flex-col items-center p-2 mt-3 rounded-lg bg-gray-800 cursor-pointer ${selectedFrame == index && 'bg-gray-600'}`} onClick={() => setSelectedFrame(index)}>
                        <Image src={frame?.image? frame.image:null} alt={index} width={40} height={40} className='w-full h-[40px] object-contain rounded-lg' />
                        <h2 className='text-xs line-clamp-2 mt-1'>{frame?.text}</h2>
                        {selectedFrame == index && <Trash2 className='mt-1 h-4 w-4 text-red-500' onClick={() => removeFrame(index)} />}
                    </div>
                ))}
                <Button size="sm" className="mt-5 w-full bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 text-gray-900 font-semibold hover:bg-gradient-to-b hover:from-gray-800 hover:via-gray-600 hover:to-gray-800" onClick={addNewFrame} >Add New Frame</Button>
            </div>
        </div>
    )
}

export default TrackList
