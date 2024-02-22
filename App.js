
import MainStack from './navigations/MainStack'

import { Provider } from 'react-redux';
import  store,{persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainStack />
        </PersistGate>
      </Provider>
  );
}

