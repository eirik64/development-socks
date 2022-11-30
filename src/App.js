import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, updateCart] = useState({});

  const addToCart = (i) => {
    const updatedCart = Object.assign({}, cart)
    if (updatedCart[i]) {
      updatedCart[i] = updatedCart[i] + 1
    } else {
      updatedCart[i] = 1
    }
    updateCart(updatedCart)
  }

  const getPrice = () => {
    let totalPrice = 0

    Object.entries(cart).forEach(([key, value]) => {
      totalPrice += value * bakeryData[key].price
    })

    return totalPrice
  }


  return (
      <div className="App">
        <h1 style={{paddingLeft:"3vw", color:"indianred"}}>Erick's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div style={{display: "flex", flexDirection: "row", paddingLeft: "3vw"}}>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: "60%"}}>
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                <BakeryItem item={item}  index={index} addToCart={addToCart} />
            ))}
          </div>

          <div style={{width: "30%"}}>
            <h1 style={{color:"indianred", paddingLeft: "2vw"}}>My Cart</h1>

            <div>
              {
                Object.entries(cart).map(([key, value]) => {
                      return <p style={{color:"indianred", paddingLeft: "2vw"}}>{value}x {bakeryData[key].name}</p>
                    }
                )
              }
            </div>

            <p style={{color:"indianred", paddingLeft: "2vw"}}>Total: ${getPrice()}</p>

          </div>
        </div>
      </div>
  );
}

export default App;
