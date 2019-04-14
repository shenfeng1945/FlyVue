const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 将sass的全局路径变为style
                includePaths: [path.join(__dirname, 'style')]
            }
        }
    }
}