import React from 'react';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/Home.module.scss';

import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import DetailCategory from 'page/Application/Home/FastCharge/DetailCategory';



const cx = classNames.bind(styles);

const listCategory = [
    {
        label: "Star Products",
        content: "Star Products Content"
    },
    {
        label: "Popular Live Broadcasts",
        content: "Popular Live Broadcasts Content"
    },
    {
        label: "Mobile Game Zone",
        content: "Mobile Game Zone Content"
    },
];


const FastCharge = () => {
    return (
        <div className={cx('charge-header ')}>
            <Tabs>
                {listCategory.map((category, index) => (
                    <Tab label={category.label} key={index}>
                        <DetailCategory data={category.content} />
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
}

export default FastCharge;