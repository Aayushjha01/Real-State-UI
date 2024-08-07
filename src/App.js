
import HomePage from './routes/homepage/homePage';
import LayOut from './routes/layout/LayOut';
import ListPage from './routes/listPage/listPage';
import SinglePage from './routes/singlePage/singlePage';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut/>
    ,
   children:[
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
    {
      path: "/:id",
      element: <SinglePage/>,
    },
   ]
  }
  ]);
  return (
   
    <RouterProvider router={router} />
  );
}

export default App;
