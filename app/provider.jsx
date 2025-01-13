"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserDetailContext } from './_context/UserDetailContext';
import { VideoFrameContext } from './_context/VideoFrameContext'

function Provider({ children }) {

    const { user } = useUser();
    const [userDetail,setUserDetail] = useState(null);
    const [videoFrames,setVideoFrames]=useState(null);

    useEffect(() => {
        user && saveUserInfo();
    }, [user]);

    const saveUserInfo = async () => {

        const result = await axios.post('/api/user', { user: user });
        setUserDetail(result?.data);
        // console.log(result.data)
    }

    return (
        <div>
            <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
                <VideoFrameContext.Provider value={{videoFrames,setVideoFrames}}>
                {children}
                </VideoFrameContext.Provider>
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider
