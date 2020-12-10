import React from 'react';


function SearchTimebox ({refresch, handleSearch, handleSubmit,searchQuery}) {

    return (
   
    <div className="Timebox">
                <form onSubmit={handleSubmit} >
                <label>Wyszukiwanie timboxów <input value={searchQuery} onChange={handleSearch} placeholder="Search" type="text" /></label>
                <button>Wyszukaj timeboxy</button>
                
                <button onClick={refresch}>Odswież</button>
                </form>
                </div>
                 )
    }



export default SearchTimebox;