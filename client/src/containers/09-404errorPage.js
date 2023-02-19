import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mainPage">
      <div>
        <div>404 ERROR</div>
        <div>Page not found.</div>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Return to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
