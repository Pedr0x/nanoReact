import React from "react";

var Title = (props) => {
    return(
    <div className={'title-container'}>
        
     <h2>    
        {props.name}
        </h2>
        
        </div>
    )
}

export default () => (
    
  <form className={form}>
    
            <Title name={'fake'}/>    
    
    
    </form>
);
    