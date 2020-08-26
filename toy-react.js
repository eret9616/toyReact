// 16:05

const RENDER_TO_DOM = Symbol('render to dom');

export class Component{
    constructor(){

        this.props = Object.create(null)
        this.children = [];
        this._root = null; // 

        this._range = null;


    }
    setAttribute(name,value){
        this.props[name] = value;
    }
    appendChild(component){
        this.children.push(component)
    }


    get vdom(){
        return this.render().vdom;
    }


    [RENDER_TO_DOM](range){
        this._range = range;
        this.render()[RENDER_TO_DOM](range); // 会递归直到找到真正的dom节点
    }

    rerender(){
        // 保存老的range
        let oldRange = this._range

        // 设置新的range，放在老的range的start的位置
        let range = document.createRange();
        range.setStart(this._range.startContainer,this._range.startOffset)
        range.setEnd(this._range.startContainer,this._range.startOffset) // 起点终点一样
        this[RENDER_TO_DOM](range);
        
        // 完成插入后，把老的range的start挪到插入的内容之后，再把内容删除
        oldRange.setStart(range.endContainer,range.endOffset)
        oldRange.deleteContents();
    }

    setState(newState){

        if(this.state === null || typeof this.state !== 'object'){
            this.state = newState;
            this.rerender();
            return;
        }


        // 深拷贝
        let merge = (oldState,newState)=>{
            for(let p in newState){
                if(oldState[p] === null || typeof oldState[p] !== 'object'){
                        oldState[p] = newState[p];
                }else{
                    merge(oldState[p],newState[p])
                }
            }
        }

        merge(this.state,newState)
        this.rerender();
    }
}

// 包装类，用于给元素加一层wrapper， 为了实现setAttribute方法 和 appendChild方法
class ElementWrapper extends Component{

    constructor(type){
        super(type);

        this.type = type;
        // 把我们创建的实体DOM放到一个属性上
        this.root = document.createElement(type);     // 真实的dom对象
    }

    // setAttribute(name,value){

    //                  // 表示所有字符
    //     if(name.match(/^on([\s\S]+)$/)){
    //         //                                     第一个字母onxx都改成小写的
    //         this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/,c=>c.toLowerCase()),value)

    //     }else{


    //         if(name === 'className'){
    //             this.root.setAttribute('class',value)
    //         }else{
    //             this.root.setAttribute(name,value)
    //         }
    //     }
    // }
    // appendChild(component){

    //     let range = document.createRange()
    //     range.setStart(this.root,this.root.childNodes.length); // 最后一个子元素
    //     range.setEnd(this.root,this.root.childNodes.length);    
    //     component[RENDER_TO_DOM](range)
    // }
        

    get vdom(){
        // 虚拟dom包含三样东西 type、props、children
        return {
            type:this.type,
            props:this.props,
            children:this.children.map((child=>child.vdom))
        }
    }



    [RENDER_TO_DOM](range){
        range.deleteContents();
        range.insertNode(this.root)
    }

}

// 包装类，给文本节点添加一个wrapper
class TextWrapper extends Component{

    constructor(content){
        super(content)
        this.content = content;
        this.root = document.createTextNode(content) // 真实的DOM对象
    }

    get vdom(){
        return {
            type:'#text',
            content:this.content
        }
    }

    [RENDER_TO_DOM](range){
        range.deleteContents();
        range.insertNode(this.root)
    }
}




// Component的render方法最终会调用createElement 返回 createElement的返回值
export function createElement(type,attributes,...children){
    // createElement 返回的是一个wrapper对象，Component或者ElementWrapper

    let e;

    if(typeof type === 'string'){
        // 如果是一个普通的元素
        e=new ElementWrapper(type)
    }else{
        // 如果是一个类
        e = new type 
    }



    for(let p in attributes){
        e.setAttribute(p,attributes[p])
    }



    let insertChildren = (children)=>{   


        for(let child of children){
            if(typeof child === 'string'){
                child = new TextWrapper(child);
            }
            

            if(child === null){
               continue;
            }

            
            if((typeof child === 'object') && (child instanceof Array)){

                insertChildren(child);
            }else{

                e.appendChild(child);   
            }
        }
    }


    insertChildren(children);

    return e;
}


// 全局的render方法 window.render （ 两个参数，第二个参数是要被挂载的节点，第一个参数是component
export function render(component,parentElement){

    // 先创建range
    let range = document.createRange()
    range.setStart(parentElement,0); // 0th child of parentElement
    range.setEnd(parentElement,parentElement.childNodes.length);
    range.deleteContents(); // 删除了parentElement之间的内容，


    component[RENDER_TO_DOM](range) // 调用了component的 RENDER_TO_DOM 方法, 并传入range
}