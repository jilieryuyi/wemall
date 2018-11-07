import _ from 'lodash';
import './style.css'
import './psb.jpeg'
import printMe from './print.js'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    printMe("webpack")

  return element;
}

document.body.appendChild(component());

 if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                  console.log('SW registered: ', registration);
                 }).catch(registrationError => {
                   console.log('SW registration failed: ', registrationError);
                 });
           });
     }
