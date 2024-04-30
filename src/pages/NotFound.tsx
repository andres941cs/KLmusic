import { useRouteError } from "react-router-dom";

interface RouteError {
    status: number;
    statusText: string;
}
const NotFoundPAge = () => {
    const error = useRouteError() as RouteError;
    console.log(error);
    return (
        <div className="grid content-center justify-center h-full w-full bg-[#1a202c]">
        <h1 className="text-6xl text-white">{error.status||'404'} - {error.statusText||'Not Found'}</h1>
        </div>
    );
}
export default NotFoundPAge;