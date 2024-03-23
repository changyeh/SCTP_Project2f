import { useContext } from "react";
import CatForm from "../CatForm.js";
import { CatContext } from "../CatContext";
import { useNavigate } from "react-router-dom";

export default function AddCatPage() {

    const context = useContext(CatContext);
    const navigate = useNavigate();

    return <>
        <h1>Add New Cat</h1>
        <CatForm
            label="Add Cat"
            onSubmit={(cat) => {
                context.addCat(cat);
                navigate('/', {
                    'state': {
                        'message': 'New cat has been added'
                    }
                });
            }} />
    </>
}