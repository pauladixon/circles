import React from 'react'

const Circles = (props) => {
    return (
        <div className='Circles'>
        {props.circles.map((index) => 
            <div
                className={props.selected === index ? 'selected' : ''}
                onClick={() => props.handleSelect(index)}
            >
                {`${index+1}`}
            </div>
        )}
        </div>
    )
}

export default Circles