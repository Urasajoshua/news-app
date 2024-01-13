import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2'
})

const apiKey='?country=us&apiKey=3c30bdccaa5a40379459ebe82e067626'


const getTopOnline = api.get('/top-headlines' + apiKey)

export default{
    getTopOnline
}