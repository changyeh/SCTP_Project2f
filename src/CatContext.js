import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const CatContext = createContext();

const BASE_API_URL = "https://kittenable.onrender.com/api"

export default function CatContextData(props) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get(BASE_API_URL + "/cats");
            setCats(response.data);
        }
        loadData();
    }, []);

    const context = {
        getCats:() => {
            // todo: set a timer like every 10 minutes fetch all new cats
            return cats
        },
        async addCat(newCat) {
            const response = await axios.post(BASE_API_URL + "/cats", {
                ...newCat,
                cost: parseInt(newCat.cost)
            });

            newCat.id = response.data.insertedId;
            setCats([...cats, newCat]);
        },
        getCatById(catId) {
            return cats.find(c => c.id === parseInt(catId));
        },
        async updateCatById(catId, newCat) {
            const response = await axios.put(BASE_API_URL + "/cats/" + catId,{
                ...newCat,
                cost: parseInt(newCat.cost)
            });

            newCat.id = parseInt(catId);
    
            const index = cats.findIndex( c => c.id === parseInt(catId));
            const left = [...cats.slice(0, index)];
            const right = [...cats.slice(index+1)];
            const modified  =[ ...left, newCat, ...right];
   
            setCats(modified);
        },
        async deleteCatById(catId) {
            const index = cats.findIndex( c => c.id === parseInt(catId));
            const left = [...cats.slice(0, index)];
            const right = [...cats.slice(index+1)];
            const modified  =[ ...left, ...right];
   
            setCats(modified);
            const response = await axios.delete(BASE_API_URL + "/cats/" + catId);
        }
    }

    return <CatContext.Provider value={context}>
        {props.children}
    </CatContext.Provider>
}