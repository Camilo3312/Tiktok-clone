import React from 'react'
import Link from 'next/link'

import styles from '../../scss/componets/layout/header.module.scss'

export const Header = () => {


    return (
        <header className={styles.header_app}>
            <nav className={styles.navigation}>
                <Link href='/following'>
                    <p>Following</p>    
                </Link>
                <Link href='/foryou'>
                    <p>For you</p>    
                </Link>
            </nav>
        </header>
    )
}
