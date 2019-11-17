import React from "react";
import { useEffect, useState } from "react";

function Tick(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      setSec(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [sec, setSec] = useState(new Date());
  const element = (
    <div className="btn btn-danger" role="alert">
      {sec.toLocaleTimeString()}
    </div>
  );
  return element;
}

export default Tick;
