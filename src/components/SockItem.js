import react from "react";
import "./SockItem.css";

export default function SockItem({sock, addToCart}) {
    return (
        <div className={"SockItem"}>
            <img className={"SockImage"} src={sock.image} alt={"Socks image"}/>
            <p className={"SockName"}>{sock.name}</p>
            <button className={"SockButton"}
                    onClick={() => addToCart(sock)}>Add To Cart</button>
        </div>
    )
}