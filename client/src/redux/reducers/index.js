import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { menuItemsReducer } from './menuItemsReducer';
import { shopReducer } from './shopReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menuItems: menuItemsReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
