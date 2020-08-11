import React from 'react'
import time1 from "../../../../assets/img/icon_1.jpg"
import time2 from "../../../../assets/img/icon_2.jpg"
import time3 from "../../../../assets/img/icon_3.jpg"
import time4 from "../../../../assets/img/icon_4.jpg"
import "./Time.css"
export default function Time() {
    return (
        <div className="time">
            <div>
                <img src={time1} alt=""/>
                <p>限时抢购</p>
            </div>
            <div>
                <img src={time2} alt=""/>
                <p>积分商城</p>
            </div>
            <div>
                <img src={time3} alt=""/>
                <p>联系我们</p>
            </div>
            <div>
                <img src={time4} alt=""/>
                <p>商品分类</p>
            </div>
        </div>
    )
}
