import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `₹${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <span className={classes.price}>{price}</span>
                <span className = {classes.amount}>x{props.amount}</span>
            </div>
            <div className={classes.action}>
                <button onClick={props.onRemove}>-</button>
                <button onClick = {props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;