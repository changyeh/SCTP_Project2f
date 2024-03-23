import { useEffect, useState } from "react";
import CatListing from "../CatListing";
import { useLocation } from "react-router-dom";

export default function CatListingPage() {

    const [showFlash, setShowFlash] = useState(true);
    const location = useLocation(); 

    useEffect(()=>{
        if (location.state?.message) {
            setTimeout(()=>{
                setShowFlash(false);
            }, 5000)
        }
    }, [])

    return <>
        {
            location.state?.message && showFlash && <div className="alert alert-success">
                {location.state.message}
            </div>
        }
        <h1>All Fluffy Cats Available</h1>
        <CatListing/>
    </>
}