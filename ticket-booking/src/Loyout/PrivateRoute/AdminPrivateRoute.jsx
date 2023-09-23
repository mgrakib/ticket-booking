import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { logOut } from "../../redux/features/userSlice/userSlice";

const AdminPrivateRoute = ({ children }) => {
    const dispatch = useDispatch()
    const { role, isLoading, email } = useSelector(state => state.userSlice);

    if (isLoading) {
        return <Loading />
    }
    if (role === 'admin' && email && !isLoading) {
        
        return <div>{children}</div>;
    } 
    else {
        signOut(auth)
			.then(() => {
				dispatch(logOut());
			})
			.catch(error => {
				// An error happened.
			});
    }
};

export default AdminPrivateRoute;