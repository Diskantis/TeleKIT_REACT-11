import { api } from "./api";

export const userApi = api.injectEndpoints({
  tagTypes: ["UsersPage"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/users/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: [{ type: "UsersPage", id: "LIST" }],
    }),
    current: builder.query({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
      invalidatesTags: ["UsersPage"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      // providesTags: ["UsersPage"],
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "UsersPage", id })),
              { type: "UsersPage", id: "LIST" },
            ]
          : [{ type: "UsersPage", id: "LIST" }],
    }),
    getOneUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "UsersPage", id }],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/users/edit/${id}`,
          method: "PUT",
          // headers: { "content-type": "application/x-www-form-urlencoded" },
          // headers: { "Content-Type": "multipart/form-data" },
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "UsersPage", id }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "UsersPage", id }],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useLazyCurrentQuery,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useGetOneUserQuery,
  useLazyGetOneUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export const {
  endpoints: {
    login,
    register,
    current,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
  },
} = userApi;
