import axios from "axios";


 const auth = async ():Promise<Boolean> => {
    let token = localStorage.getItem("auth-token");
    console.log(token);
    const res = await axios.post("http://localhost:5000/api/auth",null,{headers:{authorization:token}});
    console.log(res);
    if (res.status === 200) return true
    else return false
  };

  export default auth;