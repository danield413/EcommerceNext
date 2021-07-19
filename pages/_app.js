import { Provider } from 'react-redux'
import { store } from '../store'
import '../styles/globals.css'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.min.css';
import LayoutCheck from '../components/LayoutCheck';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {


  return (
      <Provider store={store}>
          <LayoutCheck>
            <Component {...pageProps} />
            <ToastContainer 
                position="bottom-left"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
          </LayoutCheck>
      </Provider>
  )
}

export default MyApp
