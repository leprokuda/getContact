import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react" 

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004'
  }),
  endpoints: builder => ({
    getUsers: builder.query<any, string>({
      query: () => ({
        url: `/users`
      })
    }),
    createUser: builder.mutation<any, any>({
      query: ({user}) => ({
        url: `/users`,
        method: 'POST',
        body: user,
      })
    })
  })
})

export const {useGetUsersQuery, useCreateUserMutation} = githubApi