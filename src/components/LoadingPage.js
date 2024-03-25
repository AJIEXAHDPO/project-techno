import { ReactComponent as LoadingIcon } from "../img/loading-svgrepo-com.svg"

export default function LoadingPage() {
    return <div style={{ minHeight: 100 + "vh" }}>
        <h1>Loading...</h1>
        <div className="container content-center"><LoadingIcon className="rotating loading-icon"/></div>
    </div>
}