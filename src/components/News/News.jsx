import React from "react";
// import React, { useEffect, useReducer, useState } from "react";
import s from "./News.module.css";

 const News = (props) => {
  return (
  <div className={s.content}>
      News
  </div>
    )
};

export default News
// import ReactDOM from "react-dom";
// import axios from 'axios';

// function SearchResults() {
//   const [data, setData] = useState({ hits: [] });
//   const [query, setQuery] = useState('react');

//   useEffect(() => {
//     function getFetchUrl() {
//       return 'https://hn.algolia.com/api/v1/search?query=' + query;
//     }

//     async function fetchData() {
//       const result = await axios(getFetchUrl());
//       setData(result.data);
//     }

//     fetchData();
//   }, [query]);

//   return (
//     <>
//       <input value={query} onChange={e => setQuery(e.target.value)} />
//       <ul>
//         {data.hits.map(item => (
//           <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default SearchResults;
