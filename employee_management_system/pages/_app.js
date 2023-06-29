import '../styles/globals.css'
import {store} from '../redux/store'
import {QueryClientProvider,QueryClient} from 'react-query'
import { Provider } from 'react-redux';
//craete a client
const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (<QueryClientProvider client={queryClient}>
    <Provider store={store}>
       <Component {...pageProps}/>
    </Provider>
  </QueryClientProvider>)
}

export default MyApp
