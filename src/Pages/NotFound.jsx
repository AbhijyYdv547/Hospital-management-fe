const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
