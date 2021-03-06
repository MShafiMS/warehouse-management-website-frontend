import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const useUserCars = () => {
  const [user] = useAuthState(auth);

  const [userCars, setUserCars] = useState([]);
  useEffect(() => {
    const email = user.email;
    const url=`https://young-thicket-66309.herokuapp.com/userCar?email=${email}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserCars(data));
  }, [user]);
  return [userCars, setUserCars];
};

export default useUserCars;