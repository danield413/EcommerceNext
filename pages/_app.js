import { Provider } from 'react-redux'
import { store } from '../store'
import '../styles/globals.css'
import 'animate.css';
import { SnackbarProvider } from 'notistack';
import LayoutCheck from '../components/LayoutCheck';

function MyApp({ Component, pageProps }) {


  return (
      <Provider store={store}>
          <LayoutCheck>
            <SnackbarProvider maxSnack={2}>
              <Component {...pageProps} />
            </SnackbarProvider>
          </LayoutCheck>
      </Provider>
  )
}

export default MyApp
