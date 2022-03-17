import React, { useState, useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./images.json", {
      headers: {
        Accept: "application.json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return <>{data && data.map((item) => <div>{item.url}</div>)}</>;
};
