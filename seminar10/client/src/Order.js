import React from 'react';

const Order = ({order}) => {
    console.log(order)
    return (
        <div>
            <div>{order.title}</div>
            <div>{order.userId}</div>
        </div>
    )
}

export default Order;