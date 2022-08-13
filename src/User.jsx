import React, {Component} from "react";

export default class User extends Component{
    state = {
        appTitle:"Customers",
        customerCount:5,
        customers:[
            {id:1,
            name:"Keziah",
            phone:"1234567",
            address:{city:"Canada"},
            photo:"https://picsum.photos/id/1010/60"
        },
            {id:2,
            name:"Theodora",
            phone:null,
            address:{city:"San Fransisco"},
            photo:"https://picsum.photos/id/1011/60"
        },
            {id:3,
            name:"Abigail",
            phone:"1234567",
            address:{city:"Philadelphia"},
            photo:"https://picsum.photos/id/1012/60"
        },
            {id:4,
            name:"Josephine",
            phone:null,
            address:{city:"New York"},
            photo:"https://picsum.photos/id/1013/60"
        },
            {id:5,
            name:"Mandy",
            phone:"1234567",
            address:{city:"New Delhi"},
            photo:"https://picsum.photos/id/1014/60"
        }
        ]};

        customerNameStyle= (custName)=>{
            if (custName.startsWith("K"))return"green-highlight";
            else if(custName.startsWith("J"))return"red-highlight";
            else return{};

        }

    render(){
        return (
        <div>
            <h4>
                {this.state.appTitle}

            <span className="badge badge-secondary m-2">
                {this.state.customerCount}
                </span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thread>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.getCustomerRow()}                     
                    </tbody>
                </table>
        </div>
        );
    }

    //Runs when the user clicks on refresh button
    onRefreshClick = () => {
        this.setState({
            customerCount:7,
        })
    }

    getPhoneToRender=(phone)=>{
        if(phone) return phone;
        else{        
            <div className="bg-warning p-2 text-center">No Phone</div>
    };
    }

    getCustomerRow = () => {
        return this.state.customers.map((cust, index)=>{
                return(
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td><img src={cust.photo} alt="Customer" />
                        <div><button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust, index);}}>
                            Change Picture
                            </button>
                            </div>                        
                        </td>
                        <td>
                            {cust.name}
                            </td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                );
            });
        };

        onChangePictureClick=(cust, index)=>{
            //console.log(cust);
            //console.log(index);

            let custArr = this.state.customers;
            custArr[index].photo= "https://picsum.photos/id/104/60";

            this.setState({customers:custArr});
        }
    }
