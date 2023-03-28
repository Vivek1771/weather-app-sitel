import React from 'react'

function Header() {

    function handleClick() {
        console.log('clicked')
    }

    return (
        <>
            <input type="text" placeholder="Enter City" />
            <button type='button' onClick={handleClick}>Search</button>
        </>
    )
}

export default Header