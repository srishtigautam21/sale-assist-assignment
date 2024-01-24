import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const ReviewsContext = createContext({});

const ReviewProvider = ({ children }) => {
  const API = "https://admin.tomedes.com/api/v1/get-reviews?page=1";
  const [data, setData] = useState([]);
  const handleReviews = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    handleReviews();
  }, []);
  return (
    <ReviewsContext.Provider value={{ data, setData }}>
      {children}
    </ReviewsContext.Provider>
  );
};
const useReview = () => useContext(ReviewsContext);
export { useReview, ReviewProvider };
