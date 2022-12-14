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
  let sockDataMap = {}
  for (let i = 0; i < sockData.length; i++) {
    sockDataMap[sockData[i].name] = sockData[i]
  }

  function openCart() {
    setCartIsOpen(true);
  }

  function closeCart() {
    setCartIsOpen(false)
  }

  function afterOpenCart() {}

  const addToCart = (name) => {
    const updatedCart = Object.assign({}, cart)
    if (updatedCart[name]) {
      updatedCart[name] = updatedCart[name] + 1
    } else {
      updatedCart[name] = 1
    }
    setCart(updatedCart)
  }

  const removeFromCart = (name) => {
    const state = Object.assign({}, cart)
    if (state[name] === 1) {
      delete state[name]
    } else {
      state[name]--
    }
    setCart(state)
  }

  const getPrice = () => {
    let totalPrice = 0

    Object.entries(cart).forEach(([key, value]) => {
      totalPrice += value * sockDataMap[key].price
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
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxPrice.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const sortedMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      setShoppingMenu(sortedMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }
      setShoppingMenu(updateMenu)
    }
  }

  const animalFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxAnimal.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }
      setShoppingMenu(updateMenu)
    }
  }

  const nonAnimalFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxNonAnimal.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }
      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }

      setShoppingMenu(updateMenu)
    }
  }

  const ankleFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxAnkle.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }
      setShoppingMenu(updateMenu)
    }
  }

  const crewFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxCrew.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }
      setShoppingMenu(updateMenu)
    }
  }

  const executiveFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxExecutive.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxNoShow.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      }
      setShoppingMenu(updateMenu)
    }
  }

  const noShowFilterShoppingMenu = () => {
    let checkBoxPrice = document.getElementById("SortPrice");
    let checkBoxAnimal = document.getElementById("FilterAnimal");
    let checkBoxNonAnimal = document.getElementById("FilterNonAnimal");
    let checkBoxAnkle = document.getElementById("FilterAnkle")
    let checkBoxCrew = document.getElementById("FilterCrew")
    let checkBoxExecutive = document.getElementById("FilterExecutive")
    let checkBoxNoShow = document.getElementById("FilterNoShow")

    if (checkBoxNoShow.checked) {
      const updateMenu = Object.assign({}, shoppingMenu)
      const filteredMenu = Object.values(updateMenu).filter(value => value.length === "No-Show")
      setShoppingMenu(filteredMenu)
    } else {
      let updateMenu = Object.assign({}, sockData)
      if (checkBoxPrice.checked) {
        updateMenu = Object.values(updateMenu).sort((a, b) => a.price > b.price ? 1: -1)
      }

      if (checkBoxAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Dog" || value.graphic === "Cat" || value.graphic === "Turtle" || value.graphic === "Reindeer")
      }

      if (checkBoxNonAnimal.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.graphic === "Pattern" || value.graphic === "Mushroom")
      }

      if (checkBoxAnkle.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Ankle")
      }

      if (checkBoxCrew.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Crew")
      }

      if (checkBoxExecutive.checked) {
        updateMenu = Object.values(updateMenu).filter(value => value.length === "Executive")
      }
      setShoppingMenu(updateMenu)
    }

  }

  return (
      <div className="App">
        <h1 id={"Title"}>Sock Emporium</h1>
        <div id={"Filters"}>

        </div>

        <div id={"Shop"}>
          <div id={"FiltersContainer"}>
            <div id={"SortContainer"}>
              <p>Sort</p>
              <label htmlFor={"SortPrice"}>Price (Asc): </label>
              <input type={"checkbox"} id={"SortPrice"} onClick={sortShoppingMenu}/>
            </div>
            <div id={"FilterContainer"}>
              <p>Filter</p>
              <div id={"Length"}>
                <p>Length</p>
                <div>
                  <label htmlFor={"FilterAnkle"}>Ankle Socks: </label>
                  <input type={"checkbox"} id={"FilterAnkle"} onClick={ankleFilterShoppingMenu}/>
                </div>

                <div>
                  <label htmlFor={"FilterCrew"}>Crew Socks: </label>
                  <input type={"checkbox"} id={"FilterCrew"} onClick={crewFilterShoppingMenu}/>
                </div>

                <div>
                  <label htmlFor={"FilterExecutive"}>Executive Socks: </label>
                  <input type={"checkbox"} id={"FilterExecutive"} onClick={executiveFilterShoppingMenu}/>
                </div>

                <div>
                  <label htmlFor={"FilterNoShow"}>No-Show Socks: </label>
                  <input type={"checkbox"} id={"FilterNoShow"} onClick={noShowFilterShoppingMenu}/>
                </div>
              </div>
              <div id={"Graphic"}>
                <p>Graphic</p>
                <div>
                  <label htmlFor={"FilterAnimal"}>Animal Socks: </label>
                  <input type={"checkbox"} id={"FilterAnimal"} onClick={animalFilterShoppingMenu}/>
                </div>

                <div>
                  <label htmlFor={"FilterNonAnimal"}>Non-Animal Socks: </label>
                  <input type={"checkbox"} id={"FilterNonAnimal"} onClick={nonAnimalFilterShoppingMenu}/>
                </div>
              </div>
            </div>
          </div>

          <div id={"Menu"}>
            {Object.values(shoppingMenu).map((sock, _) => (
                <SockItem sock={sock} addToCart={addToCart}/>
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
                                <img style={{width:"10vw", height:"17.5vh"}} src={sockDataMap[index].image} alt={"Image of a sock"}/>
                              </div>

                              <div style={{marginLeft:"1vw"}}>
                                <p className={"CartItemName"}>{sockDataMap[index].name}</p>
                                <p className={"CartItemDescription"}>{sockDataMap[index].description}</p>
                                <p className={"CartItemPrice"}>{value}x ${sockDataMap[index].price}</p>
                              </div>
                            </div>

                            <div>
                              <div className={"ItemQty"}>Quantity:</div>
                              <div className={"ButtonContainer"}>
                                <button className={"Minus"} onClick={() => removeFromCart(index)}>
                                  <span className={"Subtracting"}>-</span>
                                </button>
                                <div className={"Qty"}>{value}</div>
                                <button className={"Plus"} onClick={() => addToCart(index)}>
                                  <span className={"Adding"}>+</span>
                                </button>
                              </div>
                            </div>
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
