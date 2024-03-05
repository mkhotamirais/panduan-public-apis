import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Layout from "./layouts/Layout.jsx";
import PublicApi from "./pages/apis/PublicApi.jsx";
import Jp from "./pages/apis/jsonplaceholder/Jp.jsx";
import Newsapi from "./pages/apis/newsapi/Newsapi.jsx";
import { getPosts, getUsers } from "./app/features/jsonplaceholder/jpSlice.js";
import JpHome from "./pages/apis/jsonplaceholder/JpHome.jsx";
import JpPosts from "./pages/apis/jsonplaceholder/post/JpPosts.jsx";
import JpPostDetail from "./pages/apis/jsonplaceholder/post/JpPostDetail.jsx";
import JpUsers from "./pages/apis/jsonplaceholder/user/JpUsers.jsx";
import JpUserDetail from "./pages/apis/jsonplaceholder/user/JpUserDetail.jsx";
import JpPostPost from "./pages/apis/jsonplaceholder/post/JpPostPost.jsx";
import JpPostUpdate from "./pages/apis/jsonplaceholder/post/JpPostUpdate.jsx";
import Omdbapi from "./pages/apis/omdbapi/Omdbapi.jsx";
import OmdbapiHome from "./pages/apis/omdbapi/OmdbapiHome.jsx";
import NewsapiHome from "./pages/apis/newsapi/NewsapiHome.jsx";
import OmdbMovies from "./pages/apis/omdbapi/movie/OmdbMovies.jsx";
import JpUserPost from "./pages/apis/jsonplaceholder/user/JpUserPost.jsx";
import Sisko from "./pages/apis/sisko/Sisko.jsx";
import SiskoHome from "./pages/apis/sisko/SiskoHome.jsx";
import Fakestore from "./pages/apis/fakestoreapi/Fakestore.jsx";
import FakestoreHome from "./pages/apis/fakestoreapi/FakestoreHome.jsx";
import NewsapiNews from "./pages/apis/newsapi/news/NewsapiNews.jsx";
import FkstoreProduct from "./pages/apis/fakestoreapi/product/FkstoreProduct.jsx";
import SiskoProducts from "./pages/apis/sisko/product/SiskoProducts.jsx";

store.dispatch(getPosts());
store.dispatch(getUsers());

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route path="/" element={<App />}>
        <Route index element={<PublicApi />} />
        <Route path="jsonplaceholder" element={<Jp />}>
          <Route index element={<JpHome />} />
          <Route path="posts">
            <Route index element={<JpPosts />} />
            <Route path="post" element={<JpPostPost />} />
            <Route path="detail/:id" element={<JpPostDetail />} />
            <Route path="update/:id" element={<JpPostUpdate />} />
          </Route>
          <Route path="users">
            <Route index element={<JpUsers />} />
            <Route path="post" element={<JpUserPost />} />
            <Route path="update/:id" element={<JpPostUpdate />} />
            <Route path="detail/:id" element={<JpUserDetail />} />
          </Route>
        </Route>
        <Route path="newsapi" element={<Newsapi />}>
          <Route index element={<NewsapiHome />} />
          <Route path="news" element={<NewsapiNews />} />
        </Route>
        <Route path="omdbapi" element={<Omdbapi />}>
          <Route index element={<OmdbapiHome />} />
          <Route path="movies" element={<OmdbMovies />} />
        </Route>
        <Route path="sisko" element={<Sisko />}>
          <Route index element={<SiskoHome />} />
          <Route path="product" element={<SiskoProducts />} />
        </Route>
        <Route path="fakestoreapi" element={<Fakestore />}>
          <Route index element={<FakestoreHome />} />
          <Route path="product" element={<FkstoreProduct />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
