import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "user", user?.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      const getData = async () => {
        const Data = await getDocs(q);

        setOrders(
          Data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            data: doc.data(),
          }))
        );
        console.log(Data);
      };
      getData();
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
