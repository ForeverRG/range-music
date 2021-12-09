import { lazy } from "react";
import { Redirect } from "react-router-dom";

const RangeDiscover = lazy(() => import("@/views/discover"));
const RangeFriend = lazy(() => import("@/views/friend"));
const RangeMine = lazy(() => import("@/views/mine"));
const RangePlayer = lazy(() => import("@/views/player"));
const RangeAlbum = lazy(() => import("@/views/discover/c-views/album"));
const RangeArtist = lazy(() => import("@/views/discover/c-views/artist"));
const RangeDjradio = lazy(() => import("@/views/discover/c-views/djradio"));
const RangeRanking = lazy(() => import("@/views/discover/c-views/ranking"));
const RangeRecommend = lazy(() => import("@/views/discover/c-views/recommend"));
const RangeSongs = lazy(() => import("@/views/discover/c-views/songs"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: RangeDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/album",
        component: RangeAlbum,
      },
      {
        path: "/discover/artist",
        component: RangeArtist,
      },
      {
        path: "/discover/djradio",
        component: RangeDjradio,
      },
      {
        path: "/discover/ranking",
        component: RangeRanking,
      },
      {
        path: "/discover/recommend",
        component: RangeRecommend,
      },
      {
        path: "/discover/songs",
        component: RangeSongs,
      },
    ],
  },
  {
    path: "/friend",
    component: RangeFriend,
  },
  {
    path: "/mine",
    component: RangeMine,
  },
  {
    path: "/player",
    component: RangePlayer,
  },
];

export default routes;
