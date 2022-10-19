import * as React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Dosis-VariableFont_wght.ttf"
            as="font"
            type="application/x-font-ttf"
            crossOrigin="anonymous"
            key="dosisFont"
        />,
    ])
    // setHtmlAttributes({
    //     class: 'font-sans'
    // })
}