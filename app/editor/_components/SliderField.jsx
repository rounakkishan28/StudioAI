import { Slider } from '../../../components/ui/slider'
import React from 'react'

function SliderField({label, defaultValue, handleInputChange,max=100,step=1}) {
  return (
    <div className='my-3 flex flex-col gap-2'>
      <label className='text-sm mb-2'>{label}</label>
      <Slider value={[defaultValue]} max={max} step={step} onValueChange={(value)=>handleInputChange(value[0])} />
    </div>
  )
}

export default SliderField
