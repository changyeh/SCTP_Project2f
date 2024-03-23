import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { CatContext } from "../CatContext";
import CatForm from "../CatForm.js";

export default function EditCatPage() {
    
    const params = useParams();
    const navigate = useNavigate();
    const catId = params.catId;

    const context = useContext(CatContext);
    const catToEdit = context.getCatById(catId);

    return <>
        <h1>Editing Cat: {catToEdit.name}</h1>
        <CatForm initialValue={catToEdit}
                    label="Edit Cat"
                    onSubmit={(cat)=>{
                        context.updateCatById(catId, cat)
                        navigate('/')
                     }}
        />
    </>
}