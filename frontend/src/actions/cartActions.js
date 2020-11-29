import axios from 'axios';
import * as actions from '../constants/cartConstants';

const addToCart = (id, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actions.CART_ADD_REQUEST,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        numInStock: data.numInStock,
        qty,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.CART_REMOVE_REQUEST,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export { addToCart };
