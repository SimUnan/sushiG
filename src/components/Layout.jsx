import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='xl:w-11/12 max-w-7xl mx-auto'>
            {children}
        </div>
    )
}

export default Layout
