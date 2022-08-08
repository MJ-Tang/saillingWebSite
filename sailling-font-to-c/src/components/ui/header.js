import React from "react";

import '../../asset/css/header.css'
import '../../asset/css/layout.css'

const header = () => {
    return (
        <div className="header">
            <div className="ml20">
                <img src={require('../../asset/images/SAILLING.png')} alt="" srcset="" />
            </div>
            <div className="flex nav-pc">
                <div className="mr40">首页</div>
                <div className="mr40">项目展示</div>
                <div className="mr40">关于我们</div>
                <div className="mr40">联系我们</div>
                <div>EN | 中文</div>
            </div>
        </div>
    );
}
 
export default header;