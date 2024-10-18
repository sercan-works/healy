import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { getData } from "./firebaseService";
const Data: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

return (
 <p>{data?.title || "Loading..."}</p>
)
}

export default Data;