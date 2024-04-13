import { useRouteError } from "react-router-dom";

type RouteError = {
    message: string,
    statusText?: string,
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  if (!error) {
    return <div>An unexpected error occurred (no details available).</div>;
  }

  const errorMessage = error.statusText || error.message;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}