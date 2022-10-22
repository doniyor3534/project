import Chat from "./component/Chat";
import Login from "./component/Login";
import { Chat_router, Login_router } from "./util/const";


export const publicRoutes =[
    {
        path:Login_router,
        Component:Login,
    },
];

export const privateRoutes=[
    {
        path:Chat_router,
        Component: Chat,
    },
];