const getScrollContainer = (el) => {
  let parent = el;
  while(parent){
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if(isScroll(parent)){
      return parent
    }
    parent = parent.parentNode;
  }
  return parent;
}

const attributes = {
  distance: {
    type: Number,
    default: 0
  },
  delay: {
    type: Number,
    default: 200
  }
}

const getStyle = (element, styleName) => {
  try {
    var computed = document.defaultView.getComputedStyle(element,'');
    return element.style[styleName] || computed[styleName];
  } catch (e) {
    return element.style[styleName];
  }
}
const isScroll = (el) => {
  const overflow = getStyle(el, 'overflow')
  return overflow.match(/(scroll|auto)/);
}

const throttle = (fn, wait = 50) => {
  let canUse = true;
  return function(){
    if(canUse){
      fn.apply(this, arguments)
      canUse = false
    }
    setTimeout(() => canUse = true, wait);
  }
}

const getScrollOptions = (el) => {
  const entries = Object.keys(attributes || {}).map(key => ([key, attributes[key]]))
  return entries.reduce((map, [key, option]) => {
    const {type, default: defaultValue} = option;
    let value = el.getAttribute(`infinite-scroll-${key}`);
    switch(type){
      case Number:
        value = value || defaultValue;
    }
    map[key] = value
    return map
  }, {})
}

const onScroll = () => {
  results.forEach(item => {
    const el = item.el;
    const { distance, delay } = getScrollOptions(el);
    const { height } = el.getBoundingClientRect();
    const scrollBottom = height + el.scrollTop;
    if(Number(scrollBottom) + Number(distance) >= el.scrollHeight){
      throttle(item.callback, delay)()
    }
  })
}

let results = [];


export default {
  bind: function(el, binding, vnode){
    const container = getScrollContainer(el)
    results.push({el: container, callback: binding.value});
    container.addEventListener('scroll', onScroll);
  }
}