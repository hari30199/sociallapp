import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children,props}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
 

  const register = (name, email, phone,password) => {
    setIsLoading(true);

    axios
      .post(`https://hyfifood.com/public/api/register? name=${name}& email=${email}&phone=${phone}&password=${password}`, {
        name,
        email,
        phone,
        password,
        
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        if(userInfo.data == 'Email or phone number already used' || userInfo.data.email == 'The email has already been taken.' )
        return alert ('Email or Phone already exists')
        // alert(userInfo.data);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`https://api.foodduke.com/public/api/login?email=${email}&password=${password}`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
       
        
        setUserInfo(userInfo.data);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo)
        if(userInfo.data == 'DONOTMATCH')
        return alert ('Email and Password mismatch')
        // if (errorms == 'hello')
        // return alert ('hello')
        // alert(userInfo.data);
      })
      .catch(e => {
        alert(`login error ${e}`);
        setIsLoading(false);
      });
  };



  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `https://api.foodduke.com/public/api/login?`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.auth_token}`},
        },
      )
      .then(res => {
        console.log(res);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo.data) {
        setUserInfo(userInfo.data);
      }

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

 

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};