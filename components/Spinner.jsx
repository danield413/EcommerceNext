import React from 'react'

const Spinner = ({ dark = false }) => {
    return (
        <div className="spinner">
            <div className={dark ? `double-bounce1 bg-white` : 'double-bounce1 bg-gray-800 '}></div>
            <div className={dark ? `double-bounce2 bg-white` : 'double-bounce2 bg-gray-800 '}></div>
        </div>
    )
}

export default Spinner
