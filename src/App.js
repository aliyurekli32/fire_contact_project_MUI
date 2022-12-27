
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import {useState} from "react";
import { AddUser, updateUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";



const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}

function App() {
  const [info, setInfo] = useState();
  const [isAdd,setIsAdd]=useState("ADD")
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(info.id){
      updateUser(info)
    }else{
      AddUser(info);
    }
    setIsAdd("ADD")
    setInfo(initialValues)
  }
  const a=process.env.REACT_APP_APIKEY;
  console.log(a);
  
  const editUser=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender})
    setIsAdd("UPDATE")
  }
  return (
    <div className="App">
      <FormComponent handleSubmit={handleSubmit} info={info} setInfo={setInfo} isAdd={isAdd}/>
      <Contacts editUser={editUser} />
      <ToastContainer/>
    </div>
  );
}

export default App;
