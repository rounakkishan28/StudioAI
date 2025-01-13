"use client"
import React, { useContext } from 'react'
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import * as Bungee from '@remotion/google-fonts/Bungee'
import * as Anton from '@remotion/google-fonts/Anton'
import * as Pacifico from '@remotion/google-fonts/Pacifico'
import * as Parisienne from '@remotion/google-fonts/Parisienne'
import * as Outfit from '@remotion/google-fonts/Outfit'
import * as PermanentMarker from '@remotion/google-fonts/PermanentMarker'
import * as Rowdies from '@remotion/google-fonts/Rowdies'
import { TextAnimation } from '../../_data/Animations'
import { VideoFrameContext } from '../../_context/VideoFrameContext'

function RemotionComposition({ frameList }) {

    let trackFrame = 0;
    const { width, height, fps } = useVideoConfig();
    const currentFrame = useCurrentFrame();
    const { videoFrames } = useContext(VideoFrameContext);
    Bungee.loadFont();
    Anton.loadFont();
    Pacifico.loadFont();
    Parisienne.loadFont();
    Outfit.loadFont();
    PermanentMarker.loadFont();
    Rowdies.loadFont();

    return (
        <AbsoluteFill style={{
            backgroundColor: 'black'
        }}>
            {frameList && frameList.length != 0 && frameList.map((frame, index) => {

                const fromFrame = index == 0 ? 0 : trackFrame;
                trackFrame = trackFrame + frame.duration * 30;
                const duration = frame.duration * 30;
                if (isNaN(fromFrame)) fromFrame = 0;
                return (
                    <Sequence key={index} from={fromFrame} durationInFrames={duration} style={{ background: frame.bgColor }}>
                        <AbsoluteFill>
                            {frame?.sticker && <img src={frame?.sticker} alt='emoji' width={50} height={50} style={{
                                transform: `scale(${frame?.stickerSize}) translateX(${frame?.stickerPositionX}px) translateY(${frame?.stickerPositionY}px)`
                            }} />}
                        </AbsoluteFill>
                        <AbsoluteFill style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: frame?.fontFamily
                        }}>
                            <h2 style={{
                                color: frame?.textColor,
                                fontSize: frame?.fontSize,
                                transform: `${TextAnimation(frame?.animation, currentFrame, fps, fromFrame, width, height)}`
                            }}>{frame.text}</h2>
                        </AbsoluteFill>
                    </Sequence>
                )
            })}
            {videoFrames && videoFrames.music && <Audio volume={0.5} src={staticFile(videoFrames?.music)} />}
        </AbsoluteFill>
    )
}

export default RemotionComposition
