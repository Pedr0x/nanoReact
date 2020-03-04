import React from "react";


var Pedro = (props) => {
  return (
    <div> 
      <h1 className={'dd'} >  My name is {props.name}. </h1>
      <h1>  My age is {props.age} </h1>
    </div>
  )

};

Pedro.defaultProps = {
  age:223,
  name:'fake name'
}



class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false
    }
  }
  render() {
    
        
     if (this.state.live == true) {
        
            return (
                  <div>

            <h1>Stateful is alive 😊</h1>
                                  </div>

            )

        }
      
    
        else{
               return (
                  <div>

            <h1>Stateful is dead</h1>
                                  </div>

            )
        }
    
  }}



var Input = () => {
    return(
    <div className={'input-container'}>
        
     <input placeholder = {"This is placeholder"}/>    
        
        </div>
    )
}


export default () => (
      <>

    <h1>Welcome to React Parcel Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <Pedro age={77} name={'peddd'}/>
    <Input/>
    <Stateful/>
  </>
);


