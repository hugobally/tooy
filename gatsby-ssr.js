import * as React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setBodyAttributes, setHeadComponents }) => {
    setHeadComponents([
        // <link
        //     rel="preload"
        //     href="/fonts/OpenSans-VariableFont_wdth,wght.ttf"
        //     as="font"
        //     type="application/x-font-ttf"
        //     crossOrigin="anonymous"
        //     key="openSansFont"
        // />,
        // <link
        //     rel="preload"
        //     href="/fonts/Dosis-VariableFont_wght.ttf"
        //     as="font"
        //     type="application/x-font-ttf"
        //     crossOrigin="anonymous"
        //     key="dosisFont"
        // />,
    ])
    setHtmlAttributes({})
    // setBodyAttributes({
    //     class: 'bg-blue-500'
    // })
}