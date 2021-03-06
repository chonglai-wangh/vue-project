/* 
    路由模块
*/
import VueRouter from "vue-router";
// 引入 组件
import home from "./components/home.vue"
import number from "./components/number.vue"
import shopCar from "./components/shopCar.vue"
import search from "./components/search.vue"

import newList from "./components/news/newList.vue"
import newListInfo from "./components/news/newListInfo.vue"

import sharePhoto from "./components/news/sharePhoto.vue"
import photoInfo from "./components/news/photoInfo.vue"

import goodsList from "./components/news/goodsList.vue"
import goodsInfo from "./components/news/goodsInfo.vue"
import goodsInfoDetails from "./components/news/goodsInfoDetails.vue"
import goodsComment from "./components/news/goodsComment.vue"

import feedback from "./components/news/feedback.vue"
import videos from "./components/news/videos.vue"
import contact from "./components/news/contact.vue"

// 创建路由对象
let router = new VueRouter({
    // 配置路由规则
    routes: [
        { path: '/', redirect: "/home" },
        { path: "/home", component: home },
        { path: "/number", component: number },
        { path: "/shopCar", component: shopCar },
        { path: "/search", component: search },
        { path: "/home/videos", component: videos },
        { path: "/home/feedback", component: feedback },
        { path: "/home/contact", component: contact },
				
        { path: "/home/newList", component: newList },
        { path: "/home/newList/newListInfo/:docid", component: newListInfo },
				
        { path: "/home/sharePhoto", component: sharePhoto },
				{ path: "/home/sharePhoto/photoInfo", component: photoInfo },
				
        { path: "/home/goodsList", component: goodsList },
				{ path: "/home/goodsList/goodsInfo/:id", component: goodsInfo },
				{ path: "/home/goodsList/goodsInfo/goodsInfoDetails/:id", component: goodsInfoDetails, name:"goodsInfoDetails" },
				{ path: "/home/goodsList/goodsInfo/goodsComment/:id", component: goodsComment }
    ],
    // 覆盖默认的路由高亮的样式类, 把 router-link-active 转变为 mui-active
    linkActiveClass: "mui-active"
})
export default router;