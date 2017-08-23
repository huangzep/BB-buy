import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Tab from 'components/tab/tab'
import Category from 'components/category/category'
import Moneyctrl from 'components/moneyctrl/moneyctrl'
import Profile from 'components/profile/profile'
import Product from 'components/product/product'
import Shop from 'components/shop/shop'
import ProductDetail from 'components/product-detail/product-detail'
import Inlanddiscount from 'components/inlanddiscount/inlanddiscount'
import Disproduct from 'components/disproduct/disproduct'
import Baicai from 'components/baicai/baicai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tab
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/moneyctrl',
      component: Profile,
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/detail',
      component: ProductDetail
    },
    {
      path: '/inlanddiscount',
      component: Inlanddiscount
    },
    {
      path: '/disproduct',
      component: Disproduct
    },
    {
      path: '/baicaijia',
      component: Baicai
    }
  ]
})
