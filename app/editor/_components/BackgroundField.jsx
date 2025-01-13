import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { GradientColors, SolidColors } from '../../_data/Colors'

function BackgroundField({defaultValue,handleInputChange }) {
    return (
        <div>
            <Tabs defaultValue="solid" className="w-[400px]">
                <TabsList className="bg-gray-800">
                    <TabsTrigger value="solid">Solid</TabsTrigger>
                    <TabsTrigger value="gradient">Gradient</TabsTrigger>
                </TabsList>
                <TabsContent value="solid">
                    <ScrollArea className="bg-gray-600 h-[200px] w-[350px] rounded-md border p-4">
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                            {SolidColors.map((color,index)=>(
                                <div key={index} onClick={()=>handleInputChange(color.hex)} className='w-full h-10 rounded-lg cursor-pointer'
                                style={{
                                    backgroundColor:color.hex
                                }}></div>
                            ))}
                        </div>
                    </ScrollArea>
                </TabsContent>
                <TabsContent value="gradient">
                    <ScrollArea className="bg-gray-600 h-[200px] w-[350px] rounded-md border p-4">
                        <div className='grid grid-cols-3 md:grid-cols-4 gap-3'>
                            {GradientColors.map((color,index)=>(
                                <div key={index} onClick={()=>handleInputChange(color.gradient)} className='w-full h-12 rounded-lg cursor-pointer'
                                style={{
                                    background:color.gradient
                                }}></div>
                            ))}
                        </div>
                    </ScrollArea>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default BackgroundField
