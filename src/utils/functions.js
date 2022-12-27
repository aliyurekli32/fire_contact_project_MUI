import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import app from "./firebase";
import {useEffect, useState} from "react"
import Toast from "./toastify";


//?ADD USER
export const AddUser =(info)=>{
    const db=getDatabase(app);
    const userRef=ref(db,"user/")
    const newUserRef=push(userRef)
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender

    })
    console.log('sending succesfully');
}

// READ INFO

export const useFetch=()=>{
    const [isloading,setIsloading]=useState();
    const [contactList, setContactList] = useState();
    useEffect(() => {
        const db=getDatabase(app);
        const userRef=ref(db,"user/");
        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const userArray=[]
            for(let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray);
            setIsloading(false);
        });
        
    }, []);
    return {isloading, contactList}
}

export const removeUser=(id)=>{
    const db=getDatabase(app);
    // const userRef=ref(db,"user/");
    remove(ref(db,"user/"+id))

}

export const updateUser=(info)=>{
   Toast("succesful updated")
    const db=getDatabase(app);
   
    
    const updates={}
    updates["user/"+info.id]=info
    
    return update(ref(db), updates);
}
