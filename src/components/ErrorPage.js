const ErrorPage = () => {
    return <div style={{minHeight: 100+ "vh"}}>
        <h1 className="container">Page Not found</h1>
        <div className="container"  style={{paddingTop: "10px", justifyContent: "center", alignItems: "center"}}>Some Unexpected error occured.</div>
        <div className="container" style={{justifyContent: "center", alignItems: "center", height: "100px"}}><a className="blue-link" style={{fontSize: "14px"}} href="/">Back To Main</a></div>
    </div>
}

export default ErrorPage;