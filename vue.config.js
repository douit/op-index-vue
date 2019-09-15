module.exports = {
    lintOnSave: false, // lint 检验
    css: {
        loaderOptions: {
            sass: {
                // 配置 sass 全局变量文件，在 vue 文件中通过 $变量名使用
                data: `@import '@/styles/common/variable.scss';`
            }
        }
    }
}
