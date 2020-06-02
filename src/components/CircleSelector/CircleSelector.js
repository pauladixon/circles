import React from 'react'

const CircleSelector = (props) => {
    return (
        <div className='CircleSelector'>
        {props.circles.map((index) => 
            <button
                className={props.selected === index ? 'selected' : ''}
                onClick={() => props.handleSelect(index)}
            >
                {props.selected !== index ? `Select Circle ${index+1}` : `Circle ${index+1} Selected`}
            </button>
        )}
        </div>
    )
}

export default CircleSelector