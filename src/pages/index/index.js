import Regular from 'regularjs'
import '../../assets/css/style.css'

var app = new Regular({
  template: '<div>webpack456</div>',
  data: {
    name: 'zfx'
  }
})
document.getElementById('app').innerHTML = ''
app.$inject('#app')
if(module.hot) {
  // accept update of dependency
  module.hot.accept()
}