import { createBrowserRouter } from "react-router";
import { APP_PATHS } from "../consts/appConsts";
import Layout from "../../components/layout/Layout";
import LayoutAuth from "../../components/layout/LayoutAuth"; // Импортируйте новый лэйаут
import FeedPage from "../../pages/FeedPage/FeedPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";
import FiltersPage from "../../pages/filtersPage/FiltersPage";
import ResultPage from "../../pages/resultPage/ResultPage";
import OffersPage from "../../pages/offersPage/OffersPage";

const router = createBrowserRouter([
  {
    path: APP_PATHS.FEED_PAGE.RELATIVE,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FeedPage />,
      },
      {
        path: APP_PATHS.FILTERS_PAGE.RELATIVE,
        element: <FiltersPage />,
      },
      {
        path: APP_PATHS.RESULT_PAGE.RELATIVE,
        element: <ResultPage />,
      },
      {
        path: APP_PATHS.OFFERS_PAGE.RELATIVE,
        element: <OffersPage />,
      },
    ],
  },
  {
    path: APP_PATHS.AUTH_PAGE.RELATIVE,
    element: <LayoutAuth />,
    children: [
      {
        path: APP_PATHS.LOGIN_PAGE.RELATIVE,
        element: <LoginPage />,
      },
      {
        path: APP_PATHS.REGISTER_PAGE.RELATIVE,
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
