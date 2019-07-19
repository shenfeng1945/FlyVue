// https://github.com/mqyqingfeng/progress-indicator


export const getScrollOffsetsTop = () => {
    var w = window;
    if (w.pageXOffset != null) return w.pageYOffset;
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return d.documentElement.scrollTop;
    }
    // 怪异模式
    return d.body.scrollTop;
}

export const getViewPortHeight = () => {
    var w = window;
    if (w.innerWidth != null) return w.innerHeight;
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return d.documentElement.clientHeight;
    }
    // 怪异模式
    return d.body.clientHeight;
}

