'use client'

import React, { useContext, useEffect, useState } from 'react'
import styles from '../../scss/componets/layout/comments.module.scss'
import { AppContext } from 'Context/AppProvider'

export const Comments = () => {

    const { data } = useContext(AppContext)
    const { comments, isLoading, showComments, setShowComments } = data

    return (
        <>
            
            <div className={`${styles.comments_video}  ${showComments ? styles.show : ''} `}>
                {

                    isLoading ?

                        <p style={{ color: '#666666' }}>Loading comments...</p>
                        :
                        comments?.map((item, index) => (
                            <div className={styles.comment}>
                                <div className={styles.avatar}>
                                    <img src={item.users.avatar} alt="" />
                                </div>
                                <p className={styles.info_comment}>{item.comment}</p>
                            </div>
                        ))
                }
            </div>
            
            <div onClick={e => setShowComments(false)} className={`${showComments ? styles.show_ocult_comments : ''} ${styles.ocult_comments} `}>
            </div>

        </>
    )
}
