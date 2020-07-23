// a hook that exports ajax request functionality

// import { useState, useEffect } from 'react';

// const useFetch = (options) => {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log(options);

//     if(options.url) {

//       const fetchData = async () => {
//         fetch(options)
//           .then((response) => response.data)
//           .then((results) => {
//             setData(results);
//           });
//       };
//       fetchData();
//     }
//   }, []);
//   return { data };
// };

// export default useFetch;