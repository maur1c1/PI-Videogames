import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_PLATFORMS,
    GET_DETAILS,
    ORDER_BY_NAME,
    GENRES_FILTER,
    PLATFORMS_FILTER,
    FILTER_CREATED,
    GET_BY_NAME,
    CLEAR_DETAIL,
    CLEAR_VIDEOGAMES,
    SET_FILTER,
    CLEAR_FILTERS,
    SET_PAGE,
    GET_VIDEOGAMES_COPY,

} from "./actions";

const initialState = {

    allGamesCopy: [],
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    details: {},

    filters: {

        genres: "All",
        platforms: "All",
        origin: "All",
        order: "",
    },

    page: 1,
};
