import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import TerminalController from "./components/TerminalController";
import CheatSheet from "./components/CheatSheet";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/cheatsheet',
    element: <CheatSheet />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/terminal',
    element: <TerminalController />
  }
];

export default AppRoutes;
