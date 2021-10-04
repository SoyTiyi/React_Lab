import React, { useState } from 'react'


const Task = props => {

    const [checked, setChecked] = useState();

    const changeCheckBox = () => {
        setChecked(checked !== true)
    }    

    return (
        <li className="list-group-item">
            <div class="form-check">
                <input className="form-check-input" checked={checked} onClick={changeCheckBox} type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">{checked ? <span style = {{textDecoration: "line-through"}}>{props.description}</span> : <span>{props.description}</span>}</label>
            </div>
        </li>
    );
}

export default Task;