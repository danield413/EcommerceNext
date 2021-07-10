import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../store/auth';
import Spinner from './Spinner';

const LayoutCheck = ({children}) => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth)

    useEffect(() => {
      dispatch( startChecking() );
    }, [dispatch])

    if(checking) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-800">
                <Spinner dark={true}/>
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}
export default LayoutCheck;