import Toast from './toast'

let curToast 
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      if(curToast){
        curToast.close()
      }
      curToast = createToast({ 
        Vue,
        message,
        toastOptions,
        onClose: () => {
          curToast = null
        }
      })
    }
  }
}

function createToast({ Vue, message, toastOptions, onClose }) {
  const Constructor = Vue.extend(Toast);
  const toast = new Constructor({
    propsData: toastOptions
  })
  toast.$slots.default = [message]
  toast.$on('close', onClose)
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}