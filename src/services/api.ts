
import axios from 'axios';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/";

const searchByName = (search:string) => {
    return axios.get(`${URL}/search.php?s=${search}`)
        .then(response => response.data)
}

const searchByIngredient = (search:string) => {
    return axios.get(`${URL}/filter.php?i=${search}`)
        .then(response => response.data)
}

const searchIngredient = (search:string) => {
    return axios.get(`${URL}/search.php?i=${search}`)
    .then(response => response.data)
}

const filterByAlcoholic = (bool:boolean) => {
    const filter = bool ? 'Alcoholic' : 'Non_Alcoholic'; 
    return axios.get(`${URL}/filter.php?a=${filter}`)
        .then(response => response.data)
}

const filterByCategory = (filter:string) => {
    return axios.get(`${URL}/filter.php?c=${filter}`)
        .then(response => response.data)
}

const filterByGlass = (filter:string) => {
    return axios.get(`${URL}/filter.php?g=${filter}`)
        .then(response => response.data)
}

const getGlasses = () => {
    return axios.get(`${URL}/list.php?g=list`)
        .then(response => response.data)
}
const getCategories = () => {
    return axios.get(`${URL}/list.php?c=list`)
        .then(response => response.data)
}
const getIngredients = () => {
    return axios.get(`${URL}/list.php?i=list`)
        .then(response => response.data)
}
const getAlcoholic = () => {
    return axios.get(`${URL}/list.php?a=list`)
        .then(response => response.data)
}

const lookupId = (id:number) => {
    return axios.get(`${URL}/lookup.php?i=${id}`)
        .then(response => response.data)
}

const random = () => {
    return axios.get(`${URL}/random.php`)
        .then(response => response.data)
}

export { filterByAlcoholic, filterByCategory, filterByGlass, 
    getAlcoholic, getCategories, getGlasses, getIngredients, lookupId,
    random, searchByName, searchByIngredient, searchIngredient};
