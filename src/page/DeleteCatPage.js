import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { CatContext } from "../CatContext";

export default function DeleteCatPage() {

    const params = useParams();
    const navigate = useNavigate();
    const catId = params.catId;

    const context = useContext(CatContext);
    const catToDelete = context.getCatById(catId);

    return <>
        <h1>Deleting Cat: {catToDelete.name}</h1>
        <div className="p-3 mb-2 bg-warning">
            <button
                className="btn btn-danger"
                label="Yes"
                onClick={() => {
                    context.deleteCatById(catId)
                    navigate('/')
                }}
            >Yes</button>
            <button
                className="ms-3 btn btn-secondary"
                label="No"
                onClick={() => {
                    navigate('/')
                }}
            >No</button>
        </div>
    </>
}