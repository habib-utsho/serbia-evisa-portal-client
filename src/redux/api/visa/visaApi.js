import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const visa = createApi({
  reducerPath: "visaAPI",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_BASE_URL }),

  endpoints: (builder) => ({
    createVisa: builder.mutation({
      query: (visaData) => {
        return {
          url: `/visa`,
          method: "POST",
          body: visaData,
        };
      },
    }),

    getAllVisa: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/visa",
          method: "GET",
          params,
        };
      },
    }),

    getSingleVisa: builder.query({
      query: (id) => `/visa/${id}`,
    }),

    updateVisa: builder.mutation({
      query: (visaData) => {
        return {
          url: `/visa/${visaData._id}`,
          method: "PATCH",
          body: visaData,
        };
      },
    }),

    deleteVisa: builder.mutation({
      query: (id) => {
        return {
          url: `/visa/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllVisaQuery,
  useGetSingleVisaQuery,
  useLazyGetSingleVisaQuery,
  useCreateVisaMutation,
  useUpdateVisaMutation,
  useDeleteVisaMutation,
} = visa;
