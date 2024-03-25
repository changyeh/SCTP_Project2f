import { useContext } from "react";
import { CatContext } from "./CatContext";
import { useNavigate } from "react-router-dom";

export default function CatListing() {
    const context = useContext(CatContext);
    const navigate = useNavigate();

    return <ul className="list-group">
        {
            context.getCats().map( c => <li key={c.id} className="list-group-item">
                <h2>{c.name}</h2>
                <div>
                    {c.description}
                </div>
                <div>
                    ${parseInt(c.cost)/100}
                </div>
                <button className="btn btn-primary mt-3"
                    onClick={()=>{
                        navigate("/edit/" + c.id);
                    }}
                >Edit</button>
            </li>)
        }
    </ul>
}