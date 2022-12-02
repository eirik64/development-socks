# Development

### Link to Deployed Website
If you used the stencil code, this is `https://eirik64.github.io/development-socks/`

### Goal and Value of the Application

The goal of my application is to quickly allow users to look for and purchase socks that they love without any added hassle! This means that they should be able to sort our socks by price in case they find some of our selection too expensive and filter by the length of sock they prefer as well as the design/patten they'd enjoy the most on a sock. The value a user has for this website is being able to quickly add items to their cart, increase or decrease the quantity of items, see the total price and check out.

### Usability Principles Considered

The usability principles considered in my application are "Visibility of the System" and "User Control and Freedom". The user will always know how their actions affect the contents they see on the screen with my quick loading times and clear responses to button presses. My user will also always be able to undo any "mistake" they've performed because they are easily and clearly able to add and remove items from the cart as well as pick any filter/sort while also unselecting them just as easily!

### Organization of Components

There is only one component in my application and that is the `SockItem` component. It creates a `SockItem` object that displays the image, price, tags, and a button to add the item to our cart.

### How Data is Passed Down Through Components

Only two things are needed in for the `SockItem` component. One is the actual data pertaining to a singular sock itself (ie. Sock's name, price, description, image, length, graphic) and the other is the `AddToCart` function that I attached to the `Add To Cart` Button, so I could add the sock to the cart anytime that button was pressed. These two pieces of information are passed down by mapping every item from my `sockData` json to a `SockItem` component over in `App.js`

### How the User Triggers State Changes

The user triggers state changes in a few different ways. The `addToCart` button updates my `cart` state by adding or increasing the item quantity within the state. The `+` and `-` button within the cart update the `cart` state by decreasing the quantity of the item or increasing it potentially removing the item all together if quantity reaches 0. The Sorting and Filter checkboxes update the `ShoppingMenu` state which just keeps track of the menu the user sees and how its displayed