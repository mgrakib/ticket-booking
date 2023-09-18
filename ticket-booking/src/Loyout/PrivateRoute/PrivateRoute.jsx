/** @format */

import { useDispatch, useSelector } from "react-redux";
import loading from "../../assets/loading.gif";
import Loading from "../../Components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import {
	setUser, toggleIsLoading,
	
} from "../../redux/features/userSlice/userSlice";
import { useGetUserQuery } from "../../redux/features/api/baseAPI";

const PrivateRoute = ({ children }) => {
	const { pathname } = useLocation();

	const { role, isLoading, email } = useSelector(state => state.userSlice);
	const dispatch = useDispatch();

	const [userEmail, setUserEmail] = useState("");
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUserEmail(user.email);
			} else {
				dispatch(toggleIsLoading(false));
			}
		});
	}, [dispatch]);

	const { data: userInfo } = useGetUserQuery(userEmail);

	useEffect(() => {
		userInfo && 
		dispatch(
			setUser({
				busOperatorName: userInfo?.busOperatorName,
				businessReg: userInfo?.businessReg,
				email: userInfo?.email,
				name: userInfo?.name,
                role: userInfo?.role,
                isLoading: false
			})
        );
        

	}, [userInfo, dispatch]);

	if (isLoading) {
		return <Loading />;
	}
	if (!isLoading && !email) {
		return (
			<Navigate
				to='/singin/busOperator'
				state={{ path: pathname }}
			/>
		);
	} else {
		return <div>{children}</div>;
	}
};

export default PrivateRoute;
