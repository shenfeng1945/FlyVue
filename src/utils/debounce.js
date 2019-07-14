/**
 * 参考: https://github.com/dwqs/v2-lazy-list/blob/dev/src/debounce.js
 * */

const isBrowser = typeof window !== "undefined" && typeof document !== 'undefined';
const longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

let timeoutDuration = 0;
for(let i = 0; i < longerTimeoutBrowsers.length; i++){
    if(isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) > -1){
        timeoutDuration = 1;
        break;
    }
}

function microtaskDebounce(fn){
    let called = false;
    return () => {
        if(called) return;
        called = true;
        window.Promise.resolve().then(() => {
            called = false;
            fn();
        })
    }
}

function taskDebounce(fn){
    let scheduled = false;
    return () => {
        if(!scheduled){
            scheduled = true;
            setTimeout(() => {
                scheduled = false;
                fn()
            }, timeoutDuration)
        }
    }
}

const supportsMicroTasks = isBrowser && window.Promise;

export default (supportsMicroTasks ? microtaskDebounce : taskDebounce)

