export default function adPoster({id, headerText, innerText}) {
  return (
    <div className="adPoster" id={id}>
      <div>
        <div className="adPosterHeader">{headerText}</div>
        <div className="adPosterInnerText">{innerText}</div>
      </div>
      <button className="adPosterButton">View</button>
    </div>
  );
}