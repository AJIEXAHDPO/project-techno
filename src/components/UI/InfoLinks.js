const InfoLinks = ({linksList}) => {
  return (
    <div className="footer-column">
      {linksList.map((elem)=> 
        <button className="standard-link" href={elem.href} key={elem.id}>{elem.name}</button>)}
    </div>
  );
}

export default InfoLinks;