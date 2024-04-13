import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (   
        <div>
            <h1>Ooops! {err.status} {err.statusText}</h1>
            <h1>{err.error.message}</h1>
        </div>
    )
}

export default ErrorPage;