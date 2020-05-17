import React, {Component} from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';
import { mdiFacebook , mdiTwitter } from '@mdi/js'
import {Icon} from '@mdi/react';

class Footer extends Component {

    topFooterItemsRender = (item) => {
        return (
                <div key={item.title}>
                    <h4>{item.title}</h4>
                    {item.items.map(i => <a key={i} href="https://google.com">{i}</a>)}</div>
        );
    };

    categoriesFooterRender = (item) => {
        return (
            <div key={item.title}>
                {item.items.map(i => <a key={i} href="https://google.com" className={styles.body}>{i}</a>)}
            </div>
        );
    };


    topFooterRender() {
        return CONSTANTS.FooterItems.map(item => this.topFooterItemsRender(item))
    };
    footerCategoriesRender() {
        return CONSTANTS.FooterCategories.map(item => this.categoriesFooterRender(item))
    };


    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div>
                        {this.topFooterRender()}
                    </div>
                </div>
                <div className={styles.footerCategories}>
                    <h1 className={styles.header}>FEATURED CATEGORIES</h1>
                    <div>
                    {this.footerCategoriesRender()}
                    </div>
                    <a className={styles.ver} href="https://google.com">squadhelp.com
                        has a Shopper Approved rating of 4.9/5 based on 2684 ratings
                        and reviews.</a>
                </div>
                <div className={styles.containerBottom}>
                    <div className={styles.containerBottomIcon}>
                        <div className={styles.containerIcon}>
                            <Icon path={mdiFacebook} className={styles.icon}
                                  size={0.9}/>
                        </div>
                        <div className={styles.containerIcon}>
                            <Icon path={mdiTwitter} className={styles.icon}
                                  size={0.9}/>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        <img
                            src={`${CONSTANTS.STATIC_IMAGES_PATH}footer-logo.png`}
                            alt='blue_logo'/>
                         <p>Copyright © 2017 Squadhelp Inc</p>

                        <div className={styles.border}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
