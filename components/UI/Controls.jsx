'use client'
import React from 'react'
import { IconComment, IconLike, IconShare } from './Icons/ControlIcons'
import styles from '../../scss/componets/ui/controls.module.scss'

export const Controls = ({ info, functions }) => {

    const { likes, comments } = info

    return (
        <div  className={styles.controls}>
            <div onClick={e => console.log('Like')}  className={`${styles.like} ${styles.option}`}>
                <IconLike />
                <p className={styles.info}>{likes}</p>
            </div>

            <div  onClick={e => functions.getComments(info.id)} className={`${styles.like} ${styles.option}`}>
                <IconComment  />
                <p className={styles.info}>{comments}</p>
            </div>

            <div className={`${styles.like} ${styles.option}`}>
                <IconShare/>
                <p className={styles.info}>5k</p>
            </div>
        </div>
    )
}
