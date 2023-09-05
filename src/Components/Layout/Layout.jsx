import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routeur from '../../Routeurs/Routeur'
const Layout = () => {
    return (
        <div>
            <div>
                <Header />
                <div>
                    <Routeur/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
