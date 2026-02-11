import React, { useEffect, useRef, useState } from 'react'
import images from "./images"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

function Screen({startIndex}) {

    const [index, setIndex] = useState({ value: startIndex });
    const screenRef = useRef(null);

    useGSAP(()=>{
        gsap.to(index, {
            value : startIndex + 149,
            duration: 3,
            ease: "linear",
            onUpdate:()=>{
                setIndex({value: Math.round(index.value)})
            },
            repeat: -1
        })
    })

    useEffect(() => {
        const canvas = screenRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = images[index.value];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [index])

    return (
        <>
            <canvas
                ref={screenRef}
                className='w-80 h-80'
                id='canvas'></canvas>
        </>
    )
}

export default Screen