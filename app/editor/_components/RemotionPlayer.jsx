"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Player } from '@remotion/player'
import RemotionComposition from './RemotionComposition'
import { Fullscreen, Music } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { VideoFrameContext } from '../../_context/VideoFrameContext'
import DropDown from './DropDown'
import { MusicList } from '../../_data/List'


function RemotionPlayer() {

    const [screenSize, setScreenSize] = useState({
        width: 500,
        height: 300
    })
    const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
    const playerRef = useRef(null);

    useEffect(() => {
        if (videoFrames) {
            let skipDuration = 0;
            for (let i = 0; i < videoFrames?.selectedFrame; i++) {
                skipDuration = skipDuration + videoFrames.frameList[i].duration;
            }
            playerRef?.current?.seekTo(skipDuration * 30);
        }
    }, [videoFrames?.selectedFrame])

    const handleInputChange = (field, value) => {
        setVideoFrames((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className='bg-black text-gray-100'>
            <div className='flex items-center justify-center'>
                {console.log(videoFrames)}
                {videoFrames?.totalDuration && <Player
                    ref={playerRef}
                    component={RemotionComposition}
                    durationInFrames={Number(videoFrames.totalDuration * 30)}
                    compositionWidth={screenSize.width}
                    compositionHeight={screenSize.height}
                    fps={30}
                    controls
                    style={{
                        borderRadius: 6,
                        width: '100%',
                        height: 300
                    }}
                    inputProps={{
                        frameList: videoFrames?.frameList
                    }}
                />}
            </div>
            <div className='mt-5 flex gap-2 px-10 items-center'>
                <div className='flex gap-2 items-center w-full'>
                    <Fullscreen />
                    <Select onValueChange={(v) => setScreenSize(JSON.parse(v))}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="16:9" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-gray-100">
                            <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>1:1</SelectItem>
                            <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>16:9</SelectItem>
                            <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>9:16</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <Music />
                    <DropDown
                        defaultValue={'None'}
                        options={MusicList}
                        label={''}
                        handleInputChange={(value) => handleInputChange('music', value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default RemotionPlayer
