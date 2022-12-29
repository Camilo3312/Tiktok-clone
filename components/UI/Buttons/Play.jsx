'use client'
import React, { useState } from 'react'
import styles from '../../../scss/componets/ui/buttons/play.module.scss'

export const Play = ({ refe }) => {

    const [isPause, setIsPause] = useState(false)

    const videoState = () => {
        setIsPause(!isPause)
        refe.current.paused ? 
            refe.current.play()
            :
            refe.current.pause()
    }

    return (

        <>
            <div className={styles.button} onClick={videoState}>
                <img className={`${isPause ? styles.show : styles.ocult}`} src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/webapp/main/webapp-mobile/d84eb82fb19d8c010b0b.png" alt="" />
            </div>
        </>
    )
}