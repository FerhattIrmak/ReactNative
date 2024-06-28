import { useState, useEffect } from "react";
import yelp from "../yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResults(response.data.businesses);
      seterrorMessage("");
    } catch (error) {
      seterrorMessage("Bağlantı Hatası");
    }
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);
  return [searchApi, results, errorMessage];
};
