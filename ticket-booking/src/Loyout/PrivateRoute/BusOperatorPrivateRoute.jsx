import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { logOut } from "../../redux/features/userSlice/userSlice";

const BusOperatorPrivateRoute = ({ children }) => {
    
    const dispatch = useDispatch();
    const { role, isLoading, email } = useSelector(state => state.userSlice);
    
    if (isLoading) {
        return <Loading />
    }
    if (( role === 'busOperator' || role === 'admin') && email && !isLoading) {
        return <div>{children}</div>;
    } else {
        signOut(auth).then(res => {
            dispatch(logOut())
        }).catch(err => {})
    }
    
};

export default BusOperatorPrivateRoute;