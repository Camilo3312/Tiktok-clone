import React from 'react'
import styles from '../../scss/componets/ui/song.module.scss'

export const Song = ({ song }) => {
    const { song_name, image } = song

    return (
        <div className={styles.song}>
            <img src={image} alt="" />    
        </div>
    )
}
