import Vue3RouteBreadcrumbs from './Vue3RouteBreadcrumbs.vue'

import { App } from 'vue'

// 定义 install 方法， App 作为参数
Vue3RouteBreadcrumbs.install = (app: App): void => {
    app.component(Vue3RouteBreadcrumbs.name, Vue3RouteBreadcrumbs)
}

export default Vue3RouteBreadcrumbs