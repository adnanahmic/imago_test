import MediaDetailsPage from 'pages/MediaDetails.page';
import MediaListPage from 'pages/MediaList.page';
import { createBrowserRouter } from 'react-router-dom';

const routes = {
  Home: '/',
  MediaDetails: 'view/:mediaId'
};

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <MediaListPage />
  },
  {
    path: routes.MediaDetails,
    element: <MediaDetailsPage />
  }
]);

export default router;
