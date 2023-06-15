import { useGlobalContext } from "./Context";

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  console.log(isSidebarOpen);
  return <h2>Strapi Starter</h2>;
};
export default App;
