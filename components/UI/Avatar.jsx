import React from 'react'
import styles from '../../scss/componets/ui/avatar.module.scss'

export const Avatar = ({ info }) => {

    const { avatar } = info

    return (
        <div className={styles.avatar}>
            <img src={avatar} alt="" />
        </div>
    )
}
