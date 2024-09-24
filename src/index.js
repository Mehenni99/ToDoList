import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Maths from './useMemo/Maths';
// import UserList from './customHooks/UserList';
// import TodoList from './customHooks/TodoList';
import UsersApp from './tps/users/UsersApp';
import MyForm from './basic/Forms/TestW3school';
import Counter, { CounterStore } from './Redux/Counter.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store/index.js';
import { CounterSelector } from './Redux/store/CounterSelector.js';
import App from './Redux-toolkit/App.js';
// import HelloWorld from './HelloWorld/helloworld';
// import ProductList from './tps/store/ProductList';
// import Forms from './Forms/Forms';
// import Page from './LanguageSwitcher/Page';
// import App from './Router/App';
// import FormValidationBeginner from './tps/FormValidation/FormValidationBeginner';
// import FormValidation from './tps/FormValidation/FormValidation';
// import TextField from './Forms/TextField';

// import  { Evenement } from './Events/Evenement';
// import Counter from './Counter/Counter';
// import Form from './Forms/Form';
// import FruitList from './Fruits/FruitList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Evenement/>
    <HelloWorld lastName='Amel' />
    <HelloWorld lastName='Queen' />
    <HelloWorld lastName='hakima' />
    <TextField inputLabel='First name'>
      Veuiller saisir votre prènom
    </TextField>

    <TextField inputLabel='Last name'>
    Veuiller saisir votre nom
    </TextField>
    <FruitList/>
  <Counter initialValue={2} step={3}/>
  <Form/> */}
  {/* <ProductList/> */}
  {/* <Forms/> */}
  {/* <Page/> */}
  {/* <FormValidation/> */}
 {/* <App/> */}
 {/* <Maths/> */}
 {/* <UserList/>
 <TodoList/> */}
 {/* <UsersApp/> */}
 {/* <MyForm/> */}
 <Provider store={store}>
 <div className='container justify-content-center align-items-center d-flex'>
 {/* <CounterStore/> */}
 <App/>
 </div>
</Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
