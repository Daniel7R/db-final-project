import React from 'react'
import { PhoneIcon, EmailIcon, SettingsIcon, ExternalLinkIcon, StarIcon } from '@chakra-ui/icons'

import Styles from "@styles/components/Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={Styles.footerContainer}>
            <div className={Styles.icons}>El lugal perfecto para tu mente y cuerpo</div>
            <div className={Styles.divider}></div>
            <div className={Styles.gridContainer}>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Gym Fit</h3>
                    <div className={Styles.itemContent}>
                        <span><StarIcon />Para tener éxito, en primer lugar debemos creer que podemos</span>
                    </div>
                </div>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Necesitas ayuda?</h3>
                    <div className={Styles.itemContent}>
                        <span><ExternalLinkIcon /> Ayuda</span>
                        <span></span>
                    </div>
                </div>
                <div className={Styles.gridItem}>
                    <h3 className={Styles.itemTitle}>Contáctanos</h3>
                    <div className={Styles.itemContent}>
                        <span ><EmailIcon /> gymFit034@gmail.com</span>
                        <span><PhoneIcon />  +57 3023251286</span>
                    </div>
                </div>
            </div>
            <div className={Styles.copyright}>
                ©2022-2 Copyright: <strong>Advanced Databases Funlam</strong>
            </div>
        </footer>
    )
}
