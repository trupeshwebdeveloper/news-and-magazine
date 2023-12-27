import { createBrowserRouter } from "react-router-dom";
import {
  ContactUs,
  Element,
  Home,
  NotFound,
  ProfileEdit,
  StyleSheet,
  AboutUs,
  ToDoLists,
  Categories,
} from "../pages/";

export const routePaths = createBrowserRouter([
  {
    key: 1,
    path: "/",
    element: <Home />,
    children: [
      {
        key: 1,
        path: "/",
        element: <Element />,
      },
      {
        key: 2,
        path: "/featured",
        element:
          "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      },
      {
        key: 3,
        path: "/writer",
        element: "writer",
      },
      {
        key: 4,
        path: "/profile-marked",
        element: "Profile Marked",
      },
      {
        key: 5,
        path: "/profile-send-post",
        element: "Profile Send Post",
      },
      {
        key: 6,
        path: "/profile-posts",
        element: "Profile Posts",
      },
      {
        key: 7,
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        key: 8,
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        key: 9,
        path: "/profile-edit",
        element: <ProfileEdit />,
      },
      {
        key: 10,
        path: "/categories/:subcategories",
        element: <Categories />,
      },
      {
        key: 19,
        path: "/todoList",
        element: <ToDoLists />,
      },
      {
        key: 20,
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    key: 2,
    path: "/style-guide",
    element: <StyleSheet />,
  },
]);
