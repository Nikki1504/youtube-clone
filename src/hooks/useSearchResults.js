import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/Store/Slice/searchSlice";

const useSearchResults = (searchQuery) => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  // console.log(searchQuery);
  const [suggestion, setSuggestion] = useState([]);

  const getSearchResults = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else getSearchResults();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return { suggestion, searchCache };
};

export default useSearchResults;
