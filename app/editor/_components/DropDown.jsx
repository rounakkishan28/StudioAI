import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"

function DropDown({ label, defaultValue, options, handleInputChange }) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label>{label}</label>
            <Select onValueChange={(value)=>handleInputChange(value)}>
                <SelectTrigger className="w-full bg-black">
                    <SelectValue placeholder={defaultValue} />
                </SelectTrigger>
                <SelectContent className="bg-black text-gray-100">
                    {options?.map((item,index)=>(
                        <SelectItem key={index} value={item?.name??item}>{item?.name??item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default DropDown
