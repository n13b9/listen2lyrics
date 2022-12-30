import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key','36289bf063msh6dd53fd84bd2802p1a6541jsna4e2a379aaf4');
  
        return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopTracks: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({songid}) => `/songs/get-details?key=${songid}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/track?locale=${countryCode}` }),
        getTopCharts: builder.query({ query: () => '/charts/list' }),
        getSongsBySearch:builder.query({query:(searchTerm) => `/search?term=${searchTerm}` }),
    }),
        
});


export const {
    useGetTopTracksQuery,
    useGetSongDetailsQuery,
    useGetSongsByCountryQuery,
    useGetTopChartsQuery,
    useGetSongsBySearchQuery,
    useGetSongsRelatedQuery,
} = shazamCoreApi;



//getSongsRelated: builder.query({ query: ({songid} ) => `/songs/list-recommendations?key=${songid}` }),