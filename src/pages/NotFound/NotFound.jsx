import { useNavigate } from "react-router";
import React from "react";

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate("/login");
    };

    React.useEffect(() => {
        navigate("/login")
    }, [navigate])
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
          <h2 className="text-6xl font-roboto text-center mb-6">404</h2>
          <h3 className="text-xl font-roboto text-center">Page not found</h3>
          <p className="text-lg font-roboto text-center">
            The page you are looking for doesnt exist or an other error occurred
          </p>
          <button className="font-roboto bg-gray-300 m-4 py-2 px-4 rounded" onClick = {(e) => onClick(e)}>
            Go to Login
          </button>
        </div>
      );
}

export default NotFound;