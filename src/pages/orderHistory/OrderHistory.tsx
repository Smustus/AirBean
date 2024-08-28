import React, { useEffect, useState } from 'react'
import { fetchHistory } from '../../utilities/fetch';
import OrderHistoryItem from '../../components/orderHistoryItem/OrderHistoryItem';
import './OrderHistory.css';

type OrderHistory = {
  orderDate: string,
  orderNr: string,
  total: number
}

const OrderHistory = () => {

  const [history, setHistory] = useState<OrderHistory[]>([{
    orderDate: '',
    orderNr: '',
    total: 0
  }]);

  useEffect(() => {
    async function getOrderHistory(){
      try {
        const data = await fetchHistory();
        console.log(data.orderHistory);
        setHistory(data.orderHistory);
        
      } catch (error) {
        console.error('Couldnt fetch history' + error);
      }
    }
    getOrderHistory();
  }, []);

  return (
    <div className='orderHistory__wrapper'>
      <header className='orderHistory__header'></header>
      
      <main className='orderHistory__main'>
        <h2>Previous orders</h2>
        <section>
          <section className='main__tableHeader'>
            <h3>Datum</h3>
            <h3>OrderNr</h3>
            <h3>Pris</h3>
          </section>
          {
            history.map((item) => {
              return <OrderHistoryItem {...item} />
            })
          }
        </section>

      </main>
      <footer className='orderHistory__footer'></footer>
    </div>
    
  )
}

export default OrderHistory