import React from 'react'
import { PhoneIcon, EmailIcon, SettingsIcon, ExternalLinkIcon, StarIcon } from '@chakra-ui/icons'

import Styles from "@styles/components/Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={Styles.footerContainer}>
            <div className={Styles.icons}>Aquí van los iconos que querramos</div>
            <div className={Styles.divider}></div>
            <div className={Styles.gridContainer}>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Gym Fit</h3>
                    <div className={Styles.itemContent}>
                        <span><StarIcon /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Useful</h3>
                    <div className={Styles.itemContent}>
                        <span><SettingsIcon /> Settings</span>
                        <span><ExternalLinkIcon /> Help</span>
                        <span></span>
                    </div>
                </div>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Contact</h3>
                    <div className={Styles.itemContent}>
                        <span ><EmailIcon /> user@example.com</span>
                        <span><PhoneIcon />  +57 3000000032</span>
                    </div>
                </div>
            </div>
            <div className={Styles.copyright}>
                ©2022-2 Copyright: <strong>Advanced Databases Funlam</strong>
            </div>
        </footer>
    )
}
