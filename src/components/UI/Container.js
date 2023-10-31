const  Container = (props)=> {
  return (
    <>
      <h2 className="container">{props.title}</h2>
      <div className={"container on-page "+props.className}>{props.children}</div>
    </>
  );
}

export default Container;