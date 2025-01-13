"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion"
import { Layers, LetterText, Smile, SwatchBook } from 'lucide-react'
import TextAreaBox from './TextAreaBox'
import { VideoFrameContext } from '../../_context/VideoFrameContext'
import SliderField from './SliderField'
import DropDown from './DropDown'
import ColorPickerField from './ColorPickerField'
import { AnimationList, FontList } from '../../_data/List'
import BackgroundField from './BackgroundField'
import EmojiField from './EmojiField'

function FrameConfig() {

    const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
    const [frame, setFrame] = useState([]);

    useEffect(() => {
        if (videoFrames?.frameList) {
            setFrame(videoFrames.frameList[videoFrames?.selectedFrame]);
        }
    }, [videoFrames]);

    const handleInputChange = (field, value) => {
        setFrame(prev => ({
            ...prev,
            [field]: value
        }));
    }

    useEffect(() => {
        if (videoFrames && frame) {
            let framelist = videoFrames?.frameList;
            if(videoFrames?.selectedFrame<framelist?.length) framelist[videoFrames?.selectedFrame] = frame;
            setVideoFrames((prev) => ({
                ...prev,
                frameList: framelist
            }))
        }
    }, [frame]);

    return (
        <div className='p-3 bg-black shadow-md shadow-white text-gray-100 rounded-lg'>
            <Accordion type="single" collapsible>
                <AccordionItem value="text">
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><LetterText /> Text</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <TextAreaBox frame={frame} handleInputChange={(value) => handleInputChange('text', value)} />
                        {/* Duration Dropdown */}
                        <DropDown defaultValue={frame?.duration} label={'Duration (in Sec)'} options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} handleInputChange={(value) => handleInputChange('duration', value)} />
                        {/* Font Size select */}
                        <SliderField
                            label={'Font Size'}
                            handleInputChange={(value) => handleInputChange('fontSize', value)}
                            defaultValue={frame?.fontSize}
                        />
                        {/* Font Family */}
                        <DropDown defaultValue={frame?.fontFamily} label={'Font Family'} options={FontList} handleInputChange={(value) => handleInputChange('fontFamily', value)} />
                        {/* Color Picker */}
                        <ColorPickerField defaultColor={frame?.textColor} handleInputChange={(value) => handleInputChange('textColor', value)} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="background">
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><SwatchBook /> Background</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <BackgroundField defaultValue={frame?.bgColor} handleInputChange={(value) => handleInputChange('bgColor', value)} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="animation">
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><Layers /> Animation</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <DropDown defaultValue={frame?.animation} label={'Text Animation'} options={AnimationList} handleInputChange={(value) => handleInputChange('animation', value)} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sticker">
                    <AccordionTrigger>
                        <span className='flex gap-2 text-lg items-center'><Smile /> Sticker</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <EmojiField handleInputChange={(value) => handleInputChange('sticker', value)} />
                        <SliderField
                            defaultValue={frame?.stickerSize ?? '0.5'}
                            label={'Size'}
                            max={4}
                            step={0.5}
                            handleInputChange={(value) => handleInputChange('stickerSize', value)}
                        />
                        <div className='flex gap-5 w-full'>
                            <SliderField
                                label={'PositionX'}
                                defaultValue={frame?.stickerPositionX ?? '0'}
                                max={200}
                                handleInputChange={(value) => handleInputChange('stickerPositionX', value)}
                            />
                            <SliderField
                                label={'PositionY'}
                                defaultValue={frame?.stickerPositionY ?? '0'}
                                handleInputChange={(value) => handleInputChange('stickerPositionY', value)}
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default FrameConfig
