import { gentlemen } from "../data/gentlemen.mock";

export function Gentleman() {
  return (
    <>
      {gentlemen.map((pacon) => (
        <li key={pacon.id} className="gentleman">
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={pacon.picture}
              alt={pacon.alternativeText}
            />
            <span className="gentleman__initial">
              {pacon.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{pacon.name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {pacon.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>
                {pacon.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>
                {pacon.twitter}
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      ))}
    </>
  );
}
