import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const URL = "http://localhost:8080/todos";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["mytodo"],
  endpoints: (builder) => ({}),
});
