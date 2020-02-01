(function () {
    // 需要向外暴露的插件对象
    const MyPlugin = {}
    // 插件必须要有个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("vue 函数对象的方法 myGlobalMethod")
        }

        // 2. 添加全局资源（自定义指令）
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
            }
        })

        // 3. 注入组件选项
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log("vue 函数对象的方法 $myMethod")
        }
    }
    //向外暴露
    window.MyPlugin = MyPlugin()

})