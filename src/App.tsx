import { Fragment } from 'react/jsx-runtime';
import './App.css';
import Layout from './layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/home';
import ChatsPage from './pages/chats';
import NotFound from './pages/not-found';
import SalesPage from './pages/sales';
import ErrorPage from './pages/error';

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} errorElement={<ErrorPage />} />
            <Route path="sales" element={<SalesPage />} errorElement={<ErrorPage />} />
            <Route path="chats" errorElement={<ErrorPage />}>
              <Route index element={<ChatsPage />} />
              {/* <Route element={<ProjectsLayout />}>
                <Route path=":pid" element={<Project />} />
                </Route> */}
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
