import React from 'react'
import Link from 'next/link';
import { PlusSquareIcon, CalendarIcon } from "@chakra-ui/icons";

import Styles from "@styles/components/Header.module.scss";

const Header = () => {
    return (
        <nav className={Styles.navBar}>
            <ul className={Styles.navList}>
                <li className={Styles.navItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={Styles.navItem}></li>
                <li className={Styles.navItem}>
                    <Link href="/classes">
                        <a>
                            <CalendarIcon /> Programar Clase
                        </a>
                    </Link>
                </li>
                <li className={Styles.navItem}>
                    <Link href={"/add"}>
                        <a>
                            <PlusSquareIcon /> Agregar
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export { Header }