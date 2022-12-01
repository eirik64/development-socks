import "./App.css";
import { useState } from "react";
import Modal from 'react-modal';
import sockData from "./assets/socks_data.json";
import SockItem from "./components/SockItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
sockData.forEach((sock) => {
  sock.image = process.env.PUBLIC_URL + "/" + sock.image;
});
/* ############################################################## */

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [shoppingMenu, setShoppingMenu] = useState(sockData)
  const [cart, setCart] = useState({});
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openCart() {
    setCartIsOpen(true);
  }

  function closeCart() {
    setCartIsOpen(false)
  }

  function afterOpenCart() {}

  const addToCart = (i) => {
    const updatedCart = Object.assign({}, cart)
    if (updatedCart[i]) {
      updatedCart[i] = updatedCart[i] + 1
    } else {
      updatedCart[i] = 1
    }
    setCart(updatedCart)
  }

  const removeFromCart = (i) => {
    const state = Object.assign({}, cart)
    delete state[i]
    setCart(state)
  }

  const getPrice = () => {
    let totalPrice = 0

    Object.entries(cart).forEach(([key, value]) => {
      totalPrice += value * sockData[key].price
    })

    return totalPrice
  }

  const getCartSize = () => {
    let totalSize = 0

    Object.entries(cart).forEach(([key, qty]) => {
      totalSize += qty
    })
    if (totalSize === 0) {
      return
    }

    return totalSize
  }

  const sortShoppingMenu = () => {
    const updateMenu = Object.assign({}, shoppingMenu)
    console.log(updateMenu)
  }

  return (
      <div className="App">
        <h1 id={"Title"}>Erick's Sock Emporium</h1>
        <div id={"Filters"}>

        </div>

        <div id={"Shop"}>
          <div id={"FiltersContainer"}>
            <div id={"SortContainer"}>
              <p>Sort</p>
              <label htmlFor={"SortPrice"}>Price (Asc):</label>
              <input type={"checkbox"} id={"SortPrice"} onClick={sortShoppingMenu()}/>
            </div>
            <div id={"FilterContainer"}>

            </div>
          </div>

          <div id={"Menu"}>
            {sockData.map((sock, index) => (
                <SockItem sock={sock} addToCart={addToCart} index={index}/>
            ))}
          </div>

          <div id={"Cart"}>
            <button id={"CartButton"} onClick={openCart}>
              <svg id="CartIcon" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z">
                </path>
              </svg>
            </button>
            <span className='badge badge-warning' id='lblCartCount'> {getCartSize()} </span>
            <Modal
                isOpen={cartIsOpen}
                onAfterOpen={afterOpenCart}
                onRequestClose={closeCart}
                style={customStyles}
                contentLabel="Example Modal">
              <div id={"CartModalContent"}>
                <button className={"close"} onClick={closeCart}>
                <span aria-hidden="true">
                  &times;
                </span>
                </button>
                <h1 id={"CartHeading"}>My Cart</h1>

                <div>
                  {
                    Object.entries(cart).map(([index, value]) => {
                          return <div className={"CartEntry"}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                              <div>
                                <img style={{width:"10vw", height:"17.5vh"}} src={sockData[index].image} alt={"Image of a sock"}/>
                              </div>

                              <div style={{marginLeft:"1vw"}}>
                                <p className={"CartItemName"}>{sockData[index].name}</p>
                                <p className={"CartItemDescription"}>{sockData[index].description}</p>
                                <p className={"CartItemPrice"}>{value}x ${sockData[index].price}</p>
                              </div>
                            </div>

                            <button className={"ItemRemove"} onClick={() => removeFromCart(Number(index))}>
                              Remove
                            </button>
                          </div>
                        }
                    )
                  }
                </div>

                <p id={"TotalPrice"}>Total: ${getPrice()}</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
  );
}

export default App;
