const InfoLinks = ({linksList}) => {
  return (
    <div className="footer-column">
      {linksList.map((elem)=> 
        <button className="standard-link" href={elem.href}>{elem.name}</button>)}
    </div>
  );
}

export default InfoLinks;