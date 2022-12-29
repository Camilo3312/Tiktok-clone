'use client'
import React, { useContext, useRef } from 'react'
import { Controls } from './Controls'
import styles from '../../scss/componets/ui/videos.module.scss'

import { Avatar } from './Avatar'
import { Description } from './Description'
import { Play } from './Buttons/Play'
import { Song } from './Song'
import { AppContext } from 'Context/AppProvider'


export const Videos = ({ video }) => {

    const { getComments } = useContext(AppContext)
    const { url } = video
    const videoRef = useRef()

    return (
        <>
            <div className={styles.container_video}>
                <Play refe={videoRef} />
                <Description info={video} />
                <div className={styles.actions}>
                    <Avatar info={video.users} />
                    <Controls info={video} functions={{ getComments }} />
                    <Song song={video.songs} />
                </div>

                <video preLoad='auto' ref={videoRef} muted autoPlay loop className={styles.video}>
                    <source src={url} type="video/mp4" />
                </video>
            </div>
        </>
    )
}
