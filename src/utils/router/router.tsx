import { createBrowserRouter } from "react-router"
import { APP_PATHS } from "../consts/appConsts"
import Layout from "../../components/layout/Layout";
import FeedPage from "../../pages/FeedPage/FeedPage";
import LoginPage from "../../pages/login/LoginPage";
import RegisterPage from "../../pages/register/RegisterPage";
import FiltersPage from "../../pages/filters/FiltersPage";
import ResultPage from "../../pages/result/ResultPage";
import OffersPage from "../../pages/offers/OffersPage";



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
        path: APP_PATHS.LOGIN_PAGE.RELATIVE, 
        element: <LoginPage />,
      },
      {
        path: APP_PATHS.REGISTER_PAGE.RELATIVE,
        element: <RegisterPage />,
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
]);

export default router;