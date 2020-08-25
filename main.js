import { render,createElement,Component } from './toy-react.js';

class MyComponent extends Component{
   render(){
       return (<div>
           <h1>my Component</h1>
           {this.children}
       </div>)
   }
}

debugger


// 全局暴露的render方法
  // jsx <MyComponent/>会被babel转为函数createElement，最终变为 render( createElement(x,{},..), body )
render(<MyComponent id="a" class="c"> 
        <div>
         asdiu
        </div>    
        <div></div>
        <div></div>
    </MyComponent>,document.body) // ==> document.body.appenChild(component.root)