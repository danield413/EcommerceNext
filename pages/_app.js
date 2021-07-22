import { Provider } from 'react-redux'
import { store } from '../store'
import '../styles/globals.css'
import 'animate.css';
import LayoutCheck from '../components/LayoutCheck';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {


  return (
      <Provider store={store}>
          <LayoutCheck>
            <Component {...pageProps} />
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: '',
                duration: 3000,
                style: {
                },
                // Default options for specific types
                success: {
                  duration: 3000,
                },
              }}
            />
          </LayoutCheck>
      </Provider>
  )
}

export default MyApp
