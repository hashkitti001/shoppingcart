import React, {Component} from 'react';
import Navbar from "./Navbar";


class Cart extends Component {

    state = {
      items: [],
      total: 0
    };
  

  addItemToCart = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
      total: prevState.total + item.price
    }));
  };

  removeItemFromCart = (item) => {
    const { items, total } = this.state;
    const updatedItems = items.filter((i) => i.id !== item.id);
    const updatedTotal = total - item.price;
    this.setState({
      items: updatedItems,
      total: updatedTotal
    });
  };

  render() {
    const { items, total } = this.state;

    return (
      <div>
        <Navbar></Navbar>
        <h1 className='text-3xl'>Cart</h1>
       
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => this.removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>{this.state.items.length}</p>
        <p>Total: $ {total}</p>
      </div>
    );
  }
}

export default Cart;