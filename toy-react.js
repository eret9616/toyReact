class ElementWrapper{
    constructor(type){
        // 把我们创建的实体DOM放到一个属性上
        this.root = document.createElement(type);

    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(component){
        this.root.appendChild(component.root)
    }
}

class TextWrapper{
    constructor(content){
        this.root = document.createTextNode(content)
    }
    

}

export class Component{
    constructor(){
        this.props = Object.create(null)
        this.children = [];
        this._root = null;
    }
    setAttribute(name,value){
        this.props[name] = value;
    }
    appendChild(component){
        this.children.push(component)
    }
    get root(){
         if(!this._root){
             this._root = this.render().root; // 如果是Component会发生递归直到ElementWrapper或TextWrapper
         } 
         return this._root;
    }
}


export function createElement(type,attributes,...children){

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

export function render(component,parentElement){


    parentElement.appendChild(component.root);
}

