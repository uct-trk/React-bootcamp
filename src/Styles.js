import React from 'react'
import styles from './App.module.css'
import Bootstrap from './Bootstrap';
import { Title } from './Components';
import Test from './Test';
function Styles() {
    return (
        <div>
            <Title>Baslık</Title>
            <Title theme='dark'>Baslık</Title>
            <div className={styles.App}>
                App component
            </div>
            <Test />
            <Bootstrap />
        </div>
    )
}

export default Styles