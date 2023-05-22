/* eslint-disable @typescript-eslint/no-unused-vars */
import { gentlemen } from "../data/gentlemen.mock";

export function Gentleman() {
  return (
    <>
      {gentlemen.map((item) => (
        <li className="gentleman" key={item.id}>
          <div className="gentlemanavatar-container">
            <img
              className="gentlemanavatar"
              src={item.picture}
              alt={item.alternativeText}
            />
            <span className="gentlemaninitial">
              {item.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="gentlemandata-container">
            <h2 className="gentlemanname">{item.name}</h2>
            <ul className="gentlemandata-list">
              <li className="gentlemandata">
                <span className="gentlemandata-label">
                  Profession: {item.profession}
                </span>
                Influencer
              </li>
              <li className="gentlemandata">
                <span className="gentlemandata-label">
                  Status: {item.status}
                </span>
              </li>
              <li className="gentlemandata">
                <span className="gentlemandata-label">
                  Twitter: {item.twitter}
                </span>
              </li>
            </ul>
          </div>
          <i className="icon gentlemanicon fas fa-check"></i>
          <i className="icon gentlemanicon gentleman__icon--delete fas fa-times"></i>
        </li>
      ))}
    </>
  );
}

// import { gentlemen } from "../data/gentlemen.mock";

// // type GentlemenStructure = {
// //   id: number;
// //   name: string;
// //   status: string;
// //   profession: string;
// //   twitter: string;
// //   picture: string;
// //   alternativeText: string;
// //   selected: boolean;
// // };

// export function Gentleman() {
//   return (
//     <>
//       {gentlemen.map((item) => {
//         <li key={item.id} className="gentleman">
//           <div className="gentleman__avatar-container">
//             <img
//               className="gentleman__avatar"
//               src={item.picture}
//               alt={item.alternativeText}
//             />
//             <span className="gentleman__initial">
//               {item.name.charAt(0).toUpperCase()}
//             </span>
//           </div>
//           <div className="gentleman__data-container">
//             <h2 className="gentleman__name">{item.name}</h2>
//             <ul className="gentleman__data-list">
//               <li className="gentleman__data">
//                 <span className="gentleman__data-label">Profession:</span>
//                 {item.profession}
//               </li>
//               <li className="gentleman__data">
//                 <span className="gentleman__data-label">Status:</span>{" "}
//                 {item.status}
//               </li>
//               <li className="gentleman__data">
//                 <span className="gentleman__data-label">Twitter:</span>{" "}
//                 {item.twitter}
//               </li>
//             </ul>
//           </div>
//           <i className="icon gentleman__icon fas fa-check"></i>
//           <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
//         </li>;
//       })}
//     </>
//   );
// }
