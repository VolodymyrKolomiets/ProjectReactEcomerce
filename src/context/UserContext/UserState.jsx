import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";


const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token ? token : null,
    user: user ? user : null,
    message:"",
    logoutmessage:""
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
        dispatch({
            type: "LOGIN",
            payload: res.data,
        });
        console.log(res.data.user)

        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.user));
        }
    };
    const register = async () => {
        const res = await axios.post(API_URL + "/users/createUser");
        dispatch({
            type: "REGISTER",
            payload: res.data,
        });

        if (res.data) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
        }
    };
    
    const getUserInfo= async(id)=>{
      const token = JSON.parse(localStorage.getItem("token"))
      console.log(token)
      const res = await axios.get(`${API_URL}/users/getUserInfoById/${id}`,{
          headers:{
              Authorization:token
          }
      })
      console.log("resultado ", res.data)
      dispatch({
          type:"GET_USER_INFO",
          payload:res.data
      })
      return res
    };

    const logout = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout",  
      {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
      if (res.data) {
        localStorage.removeItem("token");
      }
    };

    return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
            message: state.message,
            logoutMessage: state.logoutMessage,
            login,
            getUserInfo,
            logout,
            register
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };
    