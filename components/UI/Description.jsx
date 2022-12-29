import React from 'react'
import styles from '../../scss/componets/ui/description.module.scss'

export const Description = ({ info }) => {

    const { users, songs, name } = info
    const { username } = users
    const { song_name } = songs

    return (

        <div className={styles.description}>
            <p className={styles.username}>{username}</p>
            <div className={styles.video_name}>{name}</div>
            <div className={styles.song_info}>
                <img className={styles.song_icon} src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/webapp/main/webapp-mobile/1f379b351b5c1d53e1a9.png" alt="" />

                <div className={styles.text_moviment}>
                    <p className={styles.song_name}>{song_name}</p>
                </div>
            </div>
        </div>
    )
}
