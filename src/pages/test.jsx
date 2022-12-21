// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function test() {
//   const navigate = useNavigate();
//   const [test, setTest] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`videos/${test}`);
//   };

//   return (
//     <header>
//       <Link to="/">
//         <h1>Youtube</h1>
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search.."
//           value={test}
//           onChange={(e) => setTest(e.target.value)}
//         />
//         <button type="submit">눌러</button>
//       </form>
//     </header>
//   );
// }
