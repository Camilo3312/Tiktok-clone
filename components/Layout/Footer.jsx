import React from 'react'
import styles from '../../scss/componets/layout/footer.module.scss'
import Link from 'next/link'
import { IconHome, IconNew, IconNotifications, IconProfile, IconTrend } from 'components/UI/Icons/FooterIcons'

export const Footer = () => {
    return (
        <footer className={styles.footer_app}>
            <Link href=''>
                <IconHome/>
            </Link>

            <Link href=''>
                <IconTrend/>
            </Link>

            <Link href=''>
                <IconNew />
            </Link>

            <Link href=''>
                <IconNotifications/>
            </Link>

            <Link href=''>
                <IconProfile/>
            </Link>
        </footer>
    )
}
