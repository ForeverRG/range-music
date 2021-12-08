import { lazy } from "react";
import { Redirect } from "react-router-dom";

const RangeDiscover = lazy(() => import("@/views/discover"));
const RangeFriend = lazy(() => import("@/views/friend"));
const RangeMine = lazy(() => import("@/views/mine"));
const RangePlayer = lazy(() => import("@/views/player"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: RangeDiscover,
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
