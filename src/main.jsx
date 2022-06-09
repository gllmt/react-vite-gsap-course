import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *{min-height: 0;min-width: 0;box-sizing: border-box;-webkit-backface-visibility: hidden;}abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border-radius:0;border:none;outline:0;background:0 0;font-size:100%;vertical-align:baseline;text-rendering:optimizeLegibility;transform-origin:0 0;appearance:none;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-before:0;-webkit-padding-start:0;-webkit-padding-end:0;-webkit-padding-after:0;-webkit-appearance:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transform-origin:0 0}::after,::before{box-sizing:inherit}:active,:hover{outline:0}html{font-size:100%;height:100%}body{position:relative;line-height:1}address,b,button,del,em,h1,h2,h3,h4,h5,h6,i,input,ins,pre,select,strong,td,textarea,th{text-transform:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;letter-spacing:inherit}input,textarea{appearance:none;background-clip:padding-box}a,button,del,input,ins,select,textarea{color:inherit;text-decoration:none}menu,ol,ul{list-style:none}table{width:100%;border-collapse:separate;border-spacing:0}pre,textarea{overflow:auto;max-width:100%}img{display:block;max-width:100%;height:auto}svg:not(:root){overflow:hidden}button{cursor:pointer;overflow:visible}textarea{resize:none}::moz-focus-inner{padding:0;border:none}

  body {
    overflow-x: hidden;
    line-height: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html,
  body {
    /*cursor: none;*/
    background-color: #ffffff;
    //border: 1px solid red;
  }
  
  ::-moz-selection {
    color:#fff;
    background:#000
  }

  ::selection {
    color:#fff;
    background:#000
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
