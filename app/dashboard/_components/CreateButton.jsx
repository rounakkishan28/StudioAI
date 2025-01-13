import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../../components/ui/dialog'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import VideoCreateOption from './VideoCreateOption'
function CreateButton() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full bg-black">+ Create New Video</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl"></DialogTitle>
                        <DialogDescription>
                            <VideoCreateOption />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CreateButton
