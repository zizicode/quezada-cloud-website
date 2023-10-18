import Dashboard from "./dashboard/shared/private/pages/Dashboard";
import Login from "./dashboard/auth/view/login";

export default function modules() {
  const IsUser = localStorage.getItem("userInfo");
  const IsSession = IsUser === undefined || null ? false : true;

  return [
    {
      dashboard: {
        name: "dashboard",
        path: "/d/",
        code: "d",
        component: <Dashboard />,
        IsPrivate: !IsSession,
      },
    },
    {
      login: {
        name: "login",
        path: "/d/login",
        code: "d",
        component: <Login />,
        IsPrivate: false,
      },
    },
  ];
}
