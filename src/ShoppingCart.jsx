import React, {Component} from "react";
import Product from "./Product";


export default class ShoppingCart extends Component {
    

    state = {products:[
        {id:1, 
        productName:"iPhone",
        price:8000, 
        photo:"https://image.shutterstock.com/image-photo/dhaka-bangladesh-5-13-2021-260nw-1991373035.jpg",
        quantity:0
    },
        {id:2,
        productName:"Shoe", 
        price:100, 
        photo:"https://lh5.ggpht.com/_L9oMWmzr4sY/TL4eGsgACGI/AAAAAAAACt0/6tVF9fJTPWw/s800/pretty%20small%20shoes%203%20500px.jpg",
        quantity:0
    },
        {id:3, 
        productName:"Bag", 
        price:200, 
        photo:"https://images.modeherz.de/item/images/232542/full/COCCINELLE-Mini-Bag-Croco-Leather-Chestnut-232542.jpg",
        quantity:0
    },
        {id:4,
        productName:"Watch", 
        price:300, 
        photo:"https://theslenderwrist.com/wp-content/uploads/ultimate-watch-size-guide-600x400.jpg",
        quantity:0
    },
        {id:5, 
        productName:"Laptop", 
        price:2000, 
        photo:"https://m.media-amazon.com/images/I/51srqQRMjsL._SX355_.jpg",
        quantity:0
    },
        {id:6, 
        productName:"Dress", 
        price:150, 
        photo:"https://media.istockphoto.com/photos/elegant-young-woman-is-looking-away-smiling-and-thinking-picture-id915320148?s=170667a",
        quantity:0
    },
        {id:7,
        productName:"Frames", 
        price:70, 
        photo:"https://www.frameiteasy.com/images/everything-to-know-picture-frames-online/section_6.jpg",
        quantity:0
    },
        {id:8, 
        productName:"Camera", 
        price:999, 
        photo:"https://www.avasecurity.com/hubfs/Video%20visual%20assets/Video%20-%20Compact%20Dome/Compact%20Dome%20promo%20press%20desktop.jpg?width=460&height=306",
        quantity:0
    },
        {id:9, 
        productName:"Pants", 
        price:65, 
        photo:"https://thumbs.dreamstime.com/z/mannequins-different-jeans-marketplace-row-56015727.jpg",
        quantity:0
    },
        {id:10, 
        productName:"LED TV", 
        price:800, 
        photo:"https://www.lifewire.com/thmb/NiTmvL6JWWKM6wfdiqXEudhAdOQ=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/samsung-j6201-55-inch-work-copy-lw-yellow-3a-5bfc3f6b46e0fb00260ff8b5.jpg",
        quantity:0
    },
        {id:11, 
        productName:"Jacket", 
        price:99, 
        photo:"https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487?k=20&m=163208487&s=612x612&w=0&h=TZ5XnBejf_EAnGjMPfsRf3zu-8G9DYHIFyTiyrnwFms=",
        quantity:0
    },
        {id:12, 
        productName:"Vase", 
        price:86, 
        photo:"https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmFzZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        quantity:0
    }
    ]}
    render(){
        
        return (
            
        <div className="container-fluid">
            <h4 className="glow">Shopping Cart</h4>

            <div className="row">
                {this.state.products.map((product)=>{
                    return (
                    <Product key={product.id} 
                    product={product} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}>
                         <div className="text-right">
                            <button type="button" className="btn btn-primary font-75rem">Buy Now</button>
                            </div>
                    </Product>                    
                    );
                    
                })}
            </div>
        </div>
        );
    }
    handleIncrement = (product, maxValue)=>{
        //console.log("handleIncrement", product);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity < maxValue){
            allProducts[index].quantity++;
            this.setState({products:allProducts});

        }
    };

    handleDecrement = (product, minValue)=>{
        //console.log("handleDecrement", product);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity > minValue){
            allProducts[index].quantity--;
            this.setState({products:allProducts});
        }

    };

    handleDelete = (product) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

            if(window.confirm("Sure to delete?")){
                //delete product based on index
            allProducts.splice(index, 1);
                //update the state of parent component
            this.setState({products:allProducts});
            }
        
    };
}