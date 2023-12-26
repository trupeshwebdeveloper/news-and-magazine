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
} from "../pages/";

export const routePaths = createBrowserRouter([
  {
    id: 1,
    path: "/",
    element: <Home />,
    children: [
      {
        id: 1,
        path: "/",
        element: <Element />,
      },
      {
        id: 2,
        path: "/featured",
        element:
          "How to Spend the Perfect Day on Croatia’s Most Magical Island",
      },
      {
        id: 3,
        path: "/writer",
        element: "writer",
      },
      {
        id: 4,
        path: "/profile-marked",
        element: "Profile Marked",
      },
      {
        id: 5,
        path: "/profile-send-post",
        element: "Profile Send Post",
      },
      {
        id: 6,
        path: "/profile-posts",
        element: "Profile Posts",
      },
      {
        id: 7,
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        id: 8,
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        id: 9,
        path: "/profile-edit",
        element: <ProfileEdit />,
      },
      {
        id: 10,
        path: "*",
        element: <NotFound />,
      },
      {
        id: 11,
        path: "/todoList",
        element: <ToDoLists />,
      },
    ],
  },
  {
    id: 2,
    path: "/style-guide",
    element: <StyleSheet />,
  },
]);
