import { render,createElement,Component } from './toy-react.js';

class MyComponent extends Component{
   render(){
       return (<div>
           <h1>my Component</h1>
           {this.children}
       </div>)
   }
}



render(<MyComponent id="a" class="c">
        <div>
         asdiu
        </div>    
        <div></div>
        <div></div>
    </MyComponent>,document.body)