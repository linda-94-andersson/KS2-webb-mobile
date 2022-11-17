import { useRouteError } from "react-router-dom";

type Err = {
  statusText: string; 
  message: string; 
}

export default function ErrorPage() {
  const error = useRouteError() as Err;
  console.error(error);

  return (
    <div id="error-page">
      <h2>Sorry, an unexpected error has occurred.</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
