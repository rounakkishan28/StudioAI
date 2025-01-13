"use client"
import React from 'react'
import Header from '../../_components/Header'
import { Button } from '../../../components/ui/button'
import TrackList from '../_components/TrackList'
import RemotionPlayer from '../_components/RemotionPlayer'
import SaveVideo from '../_components/SaveVideo'
import FrameConfig from '../_components/FrameConfig'
import { toast } from 'sonner'

function Editor() {
  
  return (
    <div className='bg-black'>
      <div className='flex items-center justify-center'><Header /></div>
      <div className='p-32 md:px-24 lg:px-32 text-gray-100'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500'>Edit Video</h2>
          <div className='flex gap-5'>
            <SaveVideo />
            <Button onClick={()=>toast('Feature Coming Soon!')} className='bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 text-gray-900 font-semibold hover:bg-gradient-to-b hover:from-gray-800 hover:via-gray-600 hover:to-gray-800'>Export</Button>
          </div>
        </div>
        <div className='grid grid-cols-6 gap-7 mt-7'>
          <div className='shadow-md shadow-white'>
            <TrackList />
          </div>
          <div className='col-span-3'>
            <RemotionPlayer />
          </div>
          <div className='col-span-2'>
            <FrameConfig />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
