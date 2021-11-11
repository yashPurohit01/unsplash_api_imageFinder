import React from 'react';
import styles from "./Button.module.css";

function Button({text , logo , onClick}) {
    return (
        < >
            <button className={styles.button_style} onClick={onClick}>
                <span style={{fontSize:"12px" , fontWeight:"500"}}>
                    {text}
                </span>    
                {
                    logo? <img src= {`./images/${logo}.png`} alt={logo} height="24px"  width= "24px"/>:""
                }
            </button>
        </>
    )
}

export default Button;
