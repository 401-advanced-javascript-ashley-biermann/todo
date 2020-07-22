// a hook that exports ajax request functionality

import { useState, useEffect } from 'react';

const useFetch = (url, options) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async => {
      fetch(url, options)
        .then((response) => response.json())
        .then((results) => {
          setData(results);
        });
    };
    fetchData();
  }, []);
  return { data };
};

export default useFetch;