import React, { Component } from 'react';
import Navbar from "./Navbar"
import StoreItems from "./StoreItems"
class Store extends Component {

    render() {


        return (
            <div>
                <Navbar />
                <h1 className="text-3xl my-3 text-center font-bold">Store</h1>
                <div className="card">
                    {StoreItems.map(item => {
                        return (
                            <div key={item.name}>
                                <img className="storeimg" src={item.image} alt={item.name} />
                                <p className="text-2xl text-center">{item.name}</p>
                                <div>
                                    <div className='flex flex-row ctrl-icons'>
                                    <button className="bg-blue-500 text-3xl text-white font-bold  control rounded"> - </button>
                                    <p className="price text-2xl text-center">{`$ ${item.price}`}</p>
                                    <button className="bg-blue-500 text-3xl text-white font-bold  control rounded"> + </button>
                                    </div>
                                    <button className="bg-blue-500 flex flex-row hover:bg-blue-700 text-white font-bold py-2 px-4 bton rounded my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                        Add To Cart</button>

                                </div>
                            </div>)
                    })}
                </div>



            </div>
        )

    }
}
export default Store;