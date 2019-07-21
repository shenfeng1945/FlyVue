// https://github.com/mqyqingfeng/progress-indicator


export const getScrollOffsetsTop = () => {
    let w = window;
    if (w.pageXOffset != null) return w.pageYOffset;
    let d = w.document;
    // 表明是标准模式
    if (document.compatMode === "CSS1Compat") {
        return d.documentElement.scrollTop;
    }
    // 怪异模式
    return d.body.scrollTop;
};

export const getViewPortHeight = () => {
    let w = window;
    if (w.innerWidth != null) return w.innerHeight;
    let d = w.document;
    // 表明是标准模式
    if (document.compatMode === "CSS1Compat") {
        return d.documentElement.clientHeight;
    }
    // 怪异模式
    return d.body.clientHeight;
};

export const indexOf = (array, item) => {
    if(array.indexOf(item)){
        return array.indexOf(item)
    }else{
        let result = -1;
        for(let i = 0; i < array.length; i++){
            if(array[i] === item){
                result = i;
                break;
            }
        }
        return result;
    }
};

