import react from "react";
import "./SockItem.css";

export default function SockItem({sock, addToCart, index}) {
    return (
        <div className={"SockItem"}>
            <img className={"SockImage"} src={sock.image} alt={"Socks image"}/>
            <p className={"SockName"}>{sock.name}</p>
            <button className={"SockButton"}
                    onClick={() => addToCart(index)}>Add To Cart</button>
        </div>
    )
}