import { useState } from "react";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, seterror] = useState(null);

  funciton getPosition(){
    if(!navigator.geolocation)
    return setError("Your browser does not support")
  }
  return <div>useGeolocation</div>;
}

export default useGeolocation;
