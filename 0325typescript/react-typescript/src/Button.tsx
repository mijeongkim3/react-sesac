import { useState } from "react";

interface ButtonProps  {
    onClick():void;
    children: string;
}

interface User {
    name:string;
    age:number;
}

const Button = (props:ButtonProps) => {
    const [name, setName] = useState('');
    const [list, setList] = useState<Array<User>>([]); //훅쓸때는 제네릭으로 명시 이런식으로 

    const a:string ='a';
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;