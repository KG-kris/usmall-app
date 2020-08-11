import React, { Component } from 'react'
import "./Mine.css"
import { Modal} from "antd-mobile"
import { successAlert } from "../../util/alert"

export default class Mine extends Component {

    state = {
        avator: ""
    };
    // 动态添加图片
    onLoadImg() {
        let _this = this;
        let file1 = document.getElementById("inputId").files[0];
        if (file1) {
            var reader = new FileReader();
            reader.readAsDataURL(file1);

            reader.onload = function (e) {
                _this.setState({ avator: e.target.result });
            };
        }
    }

     //退出
     del() {
        let alert = Modal.alert;
        let alertInstance = alert("退出", "你确定要退出吗？",
            [
                //取消
                {
                    text: '取消',
                    onPress: () => {
                        alertInstance.close();
                    },
                    style: 'default'
                },
                //确定
                {
                    text: '确定',
                    onPress: () => {
                        successAlert("退出成功")
                        this.props.history.push("/login")
                    }
                },
            ]
        );

    }

    render() {
        return (
            <div className="mine">
                <header>
                    <div className="top"><i className="set"></i>
                    <a  onClick={() => this.del()}>退出</a>
                    </div>
                    <span>个人中心</span>
                    <div> <i className="msg"></i></div>
                </header>
                <div className="addd">
                    <div className="set-avator">
                        <input
                            type="file"
                            id="inputId"
                            onChange={this.onLoadImg.bind(this)}
                        />
                        {this.state.avator && <img src={this.state.avator} alt="" />}
                        {!this.state.avator && (
                            <img src={require("../../assets/img/1.jpg")} alt="" />
                        )}
                    </div>
                        <p className="name">葫芦娃救爷爷</p>
                    <div className="collect">
                        <i></i>
                        <span>我的收藏（5）</span>
                    </div>
                    <div className="collect1">
                        <p>我的订单</p>
                        <span className="order">查看订单</span>
                    </div>

                </div>
                <div className="content">
                    <div className="express">
                        <i></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                </div>

                <div className="adress">
                    <p>收货地址管理</p>
                </div>
            </div>
        )
    }
}
