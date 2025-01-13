"use client"
import React, { useContext, useState } from 'react'
import Header from '../_components/Header'
import { Textarea } from '../../components/ui/textarea'
import DropDown from '../editor/_components/DropDown'
import { Button } from '../../components/ui/button'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import uuid4 from 'uuid4'
import { Prompt } from '../_data/Prompt'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { UserDetailContext } from '../_context/UserDetailContext'
import { toast } from 'sonner'

function CreateAiVideo() {

    const DurationOption = Array.from({ length: 10 }, (_, index) => index * 5);
    const [topic, setTopic] = useState(null);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(false);
    const { user } = useUser();
    const {userDetail}=useContext(UserDetailContext);
    const router = useRouter();

    const onGenerateClick = async () => {
        if(userDetail?.credits<2){
            toast('Not enough credits!');
            return;
        }
        setLoading(true);
        const videoId = uuid4();
        // create new record to DB
        const result = await axios.post('/api/video', {
            videoId: videoId,
            userEmail: user?.primaryEmailAddress?.emailAddress
        })
        console.log(result.data);

        // Generate Content for video using AI
        const PROMPT = Prompt.replace('{userTopic}', topic).replace('{userDuration}', duration);
        const aiResult = await axios.post('/api/create-ai-content', {
            videoId: videoId,
            prompt: PROMPT
        })
        setLoading(false);
        router.replace('/dashboard');
    }

    return (
        <div className='bg-black min-h-screen'>
            <div className='flex items-center justify-center bg-black'><Header /></div>
            <div className='px-10 md:px-32 lg:px-48'>
                <div className='flex flex-col items-center justify-center text-gray-100 bg-gradient-to-b from-transparent via-transparent to-gray-800 rounded-lg shadow-lg shadow-white py-10 mt-48'>
                    <h2 className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500'>Generate Video Content for your Next Video using AI</h2>
                    <div className='w-full max-w-xl mt-7'>
                        <label>Topic:</label>
                        <Textarea className="w-full"
                            onChange={(e) => setTopic(e?.target.value)}
                        />
                    </div>
                    <div className='w-full max-w-xl mt-7'>
                        <label>Select Duration of Video(in Seconds):</label>
                        <DropDown defaultValue={0}
                            handleInputChange={(value) => setDuration(value)}
                            options={DurationOption}
                        />
                    </div>
                    <Button className="w-full mt-5 max-w-xl text-black text-base bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-500 hover:to-gray-900"
                        onClick={onGenerateClick}
                        disabled={!topic?.length > 0 || duration == 0 || loading}
                    >{loading ? <Loader2 className='animate-spin' /> : 'Generate'}</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateAiVideo
