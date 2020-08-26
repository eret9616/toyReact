import { render,createElement,Component } from './toy-react.js';

class MyComponent extends Component{


    constructor(){
        super();//调用component构造函数
        this.state = {
            a:1,
            b:2
        }

    }

   render(){
       return (<div>
           <h1>my Component</h1>
           <button onclick={()=>{ this.setState({a:this.state.a+1})  }}  >add</button>
            <span>{this.state.a.toString()}</span>
            <span>{this.state.b.toString()}</span>
       </div>)
   }
}



// 全局暴露的render方法
  // jsx <MyComponent/>会被babel转为函数createElement，最终变为 render( createElement(x,{},..), body )
render(<MyComponent id="a" class="c"> 
        <div>
         asdiu
        </div>    
        <div></div>
        <div></div>
    </MyComponent>,document.body) // ==> document.body.appenChild(component.root)