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
    path: '/terminal',
    element: <TerminalController />
  }
];

export default AppRoutes;
