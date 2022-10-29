import React from "react";
import Cart from "@/pages/cart-page/Cart";
import HomePage from "@/pages/home-page/HomePage";

const ProductsPage = React.lazy(() => import("../pages/products-page/ProductPage"));
const AboutPage = React.lazy(() => import("../pages/about-page/AboutPage"));
const ErrorPage = React.lazy(() => import("../pages/error-page/ErrorPage"));
const Profile = React.lazy(() => import("../pages/profile-page/Profile"));

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/error",
    component: ErrorPage,
  },
  {
    path: "/category/:platforms",
    component: ProductsPage,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

export default routes;
