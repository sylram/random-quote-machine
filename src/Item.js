
import { useReducer } from "react";

export default function Item(props){
    const initialState = 0;
    const reducer = (state, action) => {
        
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleClick = (x,y) => {
        dispatch()
    }
    const cards = props.names.map((name, index) => 
    <li key={index}>{name}</li>);
    return (<ul> {cards}</ul>)
}