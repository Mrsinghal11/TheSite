import {Component} from 'react';


class contact extends Component {
    constructor(props) 
    {
        super(props);
        this.state={
            fullname:"Sanchit Singhal",
            email:"Sanchitsinghal269@gmail.com",
            mobile:"9340780830",
        }

    }
    
   nameHandler=(event)=>
   {
       this.setState({
           fullname:event.target.value
       })
   }
       
   emailHandler=(event)=>
   {
       this.setState({
           email:event.target.value
       })
   }

       
   mobileHandler=(event)=>
   {
       this.setState({
           mobile:event.target.value
       })
   }



   submitHandler=(event)=>
   {
      alert(`my name is ${this.state.fullname} 
             email is ${this.state.email}
             mobile is ${this.state.mobile}`);
      
      event.preventDefault();
   }


    
    render() { 
        return (  
<>

<form onSubmit={this.submitHandler}>

<label>Enter Full Name</label>
<input type="text" name="fullname" onChange={this.nameHandler}/>
<br/>
<label>Enter Email</label>
<input type="Email" name="Email" onChange={this.emailHandler}/>
<br/>

<label>Enter Mobile Number</label>
<input type="Number" name="Mobile" onChange={this.mobileHandler}/>
<br/>
<input type="submit" value="send"/>
</form>
</>

          );
    }
}
 
export default contact;