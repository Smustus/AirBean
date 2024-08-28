import React, { useEffect } from 'react'
import { fetchHistory } from '../../utilities/fetch';

const OrderHistory = () => {

  useEffect(() => {
    async function getOrderHistory(){
      try {
        const data = await fetchHistory();
        console.log(data);
        
      } catch (error) {
        console.error('Couldnt fetch history' + error);
      }
    }
  }, []);

  return (
    <div>OrderHistory</div>
  )
}

export default OrderHistory