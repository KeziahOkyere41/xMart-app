import React, {Component} from "react";
const myStyle={
    backgroundImage: 
"url('https://media.istockphoto.com/photos/japanese-man-at-hand-using-a-smartphone-picture-id1252809376?b=1&k=20&m=1252809376&s=170667a&w=0&h=lBcsOo9jnpMDn-wDkIRuCSDdQ2MZyZ9X3Q0NuN9DHFg=')",
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    marginTop:'0px',
};

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {email: "", password:"", message:""};
    }


    render(){
        
        return <div style={myStyle}>
            <h4 className="m-1 p-2 border-bottom">
                <blockquote><b>Login</b></blockquote>
            </h4>

            <div className="form-group form-row">
                <label className="col-6">Email</label>
                <input type="text" className="form-control" value={this.state.email}
                onChange={(event)=>{this.setState({email:event.target.value});
                console.log(this.state.email);
            }}
                />
            </div>

            <div className="form-group form-row">
                <label className="col-6">Password</label>
                <input type="password" className="form-control" value={this.state.password}
                onChange={(event)=>{this.setState({password:event.target.value});
        }}
        />
            </div>
           
            <div className="text-right">
                {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Login
            </button>
            </div>

            </div>;
    };
    
    onLoginClick=() =>{
        console.log(this.state);
        if(this.state.email ==="admin@test.com" && this.state.password === "admin123"){
            //success message
            this.setState({message:<span className="text-success"> "Heya you made it"</span>})
        }
        else{
            //error
            this.setState({message:<span className="text-danger">Unsuccessful</span>})
        }
        
        }

}

