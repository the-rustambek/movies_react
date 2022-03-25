import { useState } from "react";
import "./Search.css";

const Search = ({searchMovies}) =>{

const[search,setSearch]= useState("");
const [type,setType]=useState("all");

const handleKey=(e)=>{
if(e.key==="Enter"){
searchMovies(search,type)

}
}

const handleFilter = (e)=>{
setType(e.target.dataset.type);
searchMovies(search, e.target.dataset.type)
}

return(
<div className="row">
    <div className="input-field">
        <input type="search" placeholder="Search" className="validate" value={search} onChange={(e)=>
        setSearch(e.target.value)} onKeyDown={handleKey} />
        <button className="btn search-btn" onClick={()=>
            searchMovies(search,type)}>
            Search Movies
        </button>
    </div>
    <div>
        <label>
        <input type="radio" className="with-gap" name="type" data-type="all" onChange={handleFilter}
            checked={type==="all" } />
        <span>All</span>
        </label>
        <label>
        <input type="radio" className="with-gap" name="type" data-type="movie" onChange={handleFilter}
            checked={type==="movie" } />
        <span>Movies Only</span>
        </label>
        <label>
        <input type="radio" className="with-gap" name="type" data-type="series" onChange={handleFilter}
            checked={type==="series" } />
        <span>Series Only</span>
        </label>
    </div>


</div>
)
}

export default Search;