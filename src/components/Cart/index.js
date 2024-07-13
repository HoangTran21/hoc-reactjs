import { useState } from "react";
import './cart.scss';

function Cart() {
    const unitPrice = 15000;
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) =>{
        const updateQuantity = parseInt(e.target.value);
        setQuantity(updateQuantity);
    }

    return(
        <>
        <table className="cart">
            <thead className="cart-table">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Product 1</td>
                    <td>{unitPrice}</td>
                    <td>
                        <input defaultValue={quantity} type="number" min={1}
                        onChange={handleChange}/>
                    </td>
                    <td>{unitPrice} VND</td>
                    <td>{unitPrice * quantity} VND</td>
                    </tr>
            </thead>
        </table>
        </>
    );
}
export default Cart;