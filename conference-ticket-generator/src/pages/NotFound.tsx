const NotFound = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-10 text-center">
      <h1>Page Not Found!</h1>
      <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="underline hover:text-neutral-500">
        Go back to the sign up page
      </a>
    </div>
  );
};

export default NotFound;
