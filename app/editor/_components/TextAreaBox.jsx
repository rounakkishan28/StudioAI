import { Textarea } from '../../../components/ui/textarea'
import React from 'react'

function TextAreaBox({ frame, handleInputChange }) {
    return (
        <div>
            <label>Content</label>
            <Textarea
                className="bg-black"
                value={frame?.text}
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </div>
    )
}

export default TextAreaBox
