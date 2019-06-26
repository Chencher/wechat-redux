//app.js
/**
 * author:yangsen
 * des:小程序启动页
 * create:2018.3.5
 * log: 2018.4.2城市定位容错：当城市定位不到时，默认为北京
 */
import { createStore, combineReducers } from './static/libs/redux.min.js';
import count from './reducers/add-reducer';
import todos from './reducers/todo-list-reducer';
import visibiliters from './reducers/visibility-reducer';

const allReducers = combineReducers({
    count, 
    todos,
    visibiliters
});

const store = createStore(allReducers);
const { Provider } = require('./static/libs/wechat-weapp-redux');

const appConfig = {
    onLaunch: function () {
        console.log('onLaunch');
    },
    onShow: function (e) {
        console.log(e);
    },
    globalData: {
        channelAdPic: '',//世界杯活动的广告图片地址
        shareFr: 2,//打开小程序的来源 1app   2wx
        city: {
            cityid: '201',
            cityname: '北京',
            direct_rent_support: '1',
            ename: 'beijing',
            is_half: '1',
            is_host_area: 0,
            is_sell_car: 1,
            provincename: '北京',
            py: 'B',
            zhigou: 1
        },
        isPlay: false,
        scene: '',//进入小程序的场景值
        fromAppParam: {},//APP传来的参数
        telephoneNum: '',
        carDetailNeedAuthorize: true,//详情页面 是否需要进行授权的状态控制
        userSession: {
            mobile: '',
            userId: '',
            u: '',
            x: '',
            openId: '',
            inviteEncryptData: ''//邀请人的标识  加密数据，api解析;格式:in_uid|1212&in_openid|12112
        },
        //邀请人的信息
        inviteFromUserInfo: {
            fromOpenGid: '',//群id
            fromKey: '',// 邀请人的标识  加密数据，
            shareTicket: ''//用于标识是否时从群里打开

        },
        //推广信息
        adChanneInfo: {
            keywordid: '',
            creative: '',
            mediaid: '',
            channel: ''
        },
        fifaActive: {
            showInviteInfo: true //是否显示邀请按钮和邀请文案
        },
        isPlaying: false//世界杯活动是否正在进行
    }
}

App(Provider(store)(appConfig));
