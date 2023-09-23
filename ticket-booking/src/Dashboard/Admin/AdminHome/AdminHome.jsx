import { useSelector } from "react-redux";

const AdminHome = () => {
    const {role} = useSelector(state => state.userSlice)
    return (
        <div>
            {
                role === 'admin' ?"this is amdin homve" : 'this is operator'
            }
        </div>
    );
};

export default AdminHome;