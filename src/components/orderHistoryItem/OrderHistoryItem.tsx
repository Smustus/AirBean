import React from 'react'
import './OrderHistoryItem.css';

type orderHistoryItemProps = {
  total: number;
  orderNr: string;
  orderDate: string;
}

const OrderHistoryItem = (props: orderHistoryItemProps) => {

  const {total, orderNr, orderDate} = props;

  return (
    <article className='table'>
      <p>{orderDate}</p>
      <p>{orderNr}</p>
      <p>{`${total} kr`}</p>
    </article>
  )
}

export default OrderHistoryItem