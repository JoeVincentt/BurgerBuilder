import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BUERGER_SUCCESS,
    orderID: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BUERGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  const fetchedOrders = [];
  for (let key in orders) {
    fetchedOrders.push({
      ...orders[key],
      id: key
    });
  }
  console.log("[fetchOrderSuccess] ORDERS: ", fetchedOrders);
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: fetchedOrders
  };
};
export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json?auth=" + token)
      .then(res => {
        console.log("[fetchOrders] DATA:", res.data);

        dispatch(fetchOrdersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

export const deleteOrdersSuccess = (orders, token) => {
  console.log("SUCCESSFULY DELETED");
  return fetchOrders(token);
};
export const deleteOrdersFail = error => {
  return {
    type: actionTypes.DELETE_ORDERS_FAIL,
    error: error
  };
};

export const deleteOrdersStart = () => {
  return {
    type: actionTypes.DELETE_ORDERS_START
  };
};

export const deleteOrder = (id, token) => {
  return dispatch => {
    dispatch(deleteOrdersStart());
    axios
      .delete(`/orders/${id}.json?auth=${token}`)
      .then(res => {
        console.log("[DELETE Orders] DATA:", res);
        console.log("[DELETE Orders] DATA:", res.data);
        dispatch(deleteOrdersSuccess(res.data, token));
      })
      .catch(err => {
        dispatch(deleteOrdersFail(err));
      });
  };
};
