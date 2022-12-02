import react from "react";
import "./SockItem.css";

export default function SockItem({sock, addToCart}) {
    return (
        <div className={"SockItem"}>
            <img className={"SockImage"} src={sock.image} alt={"Socks image"}/>
            <p className={"Sock"}>{sock.name}</p>
            <p className={"Sock"}>Length: {sock.length}</p>
            <p className={"Sock"}>Design: {sock.graphic}</p>
            <p className={"Sock"}>${sock.price}</p>
            <button className={"SockButton"}
                    onClick={() => addToCart(sock.name)}>Add To Cart</button>
        </div>
    )
}