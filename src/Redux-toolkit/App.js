import { Provider } from "react-redux";
import { store } from "./store/store";
import User from "./User";
import UserForm from "./UserForm";
export default function App(props) {
    return (
<Provider store={store}>
    <UserForm/>
    <User/>
</Provider>
    );
}