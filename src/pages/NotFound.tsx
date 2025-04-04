
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-agro-light px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-agro-primary mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! This page isn't growing here</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved to another field.
        </p>
        <Link to="/">
          <Button className="bg-agro-primary hover:bg-agro-dark text-white px-6 py-3">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
