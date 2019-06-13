const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 将sass的全局路径变为style
                includePaths: [path.join(__dirname, 'style')]
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('_variable', resolve('style/_variable'))
    }
}