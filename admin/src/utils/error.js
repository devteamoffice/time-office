import { toast } from "react-toastify";
import { signOut } from "../containers/Login/actions";

const handleError = (err, dispatch, title = "") => {
  // Generic options for error notifications
  const showToast = (message, autoClose = 3000) => {
    toast.error(`${title ? title + ": " : ""}${message}`, {
      position: "top-right", // Use string format instead of toast.POSITION.TOP_RIGHT
      autoClose,
    });
  };

  if (err.response) {
    // Handling specific HTTP error statuses
    if (err.response.status === 400) {
      const message = err.response.data.error || "Please Try Again!";
      showToast(message);
    } else if (err.response.status === 401) {
      showToast("Unauthorized Access! Please login again", 1000);
      dispatch(signOut());
    } else if (err.response.status === 403) {
      showToast("Forbidden! You are not allowed to access this resource.");
    } else if (err.response.status === 404) {
      // Handle 404 errors if necessary, e.g., show a custom message
      showToast("Resource not found. Please try again.");
    }
  } else if (err.message) {
    // Handle client-side errors
    showToast(err.message);
  } else {
    // Fallback for other unknown errors
    showToast("Your request could not be processed. Please try again.");
  }
};

export default handleError;
