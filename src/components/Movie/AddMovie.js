
import React, { useState } from 'react';

function AddMovie(props) {
    const[url, setUrl] = useState("");
    const[title, setTitle] = useState("");
    const[subtitle, setSubTitle] = useState("");
    const[description, setDescription] = useState("");

    function checkInput(input){
        if(input == "url")
        {
            if(url.length==0) return <span style={{color:"red"}}>{input} is required!</span>
        }
        else if(input == "title")
        {
            if(title.length == 0) return <span style={{color:"red"}}>{input} is required!</span>
        }
        else if(input == "subtitle")
        {
            if(subtitle.length == 0) return <span style={{color:"red"}}>{input} is required!</span>
        }
        else if(input == "description")
        {
            if(description.length == 0) return <span style={{color:"red"}}>{input} is required!</span>
        }
    }

    function AddMovie() {
            props.setMovies([...props.movies, {url,title,subtitle,description}])
            console.log(props.movies)
            setUrl('')
            setTitle('')
            setSubTitle('')
            setDescription('')
    }

    return(
        <div className="movie-card">
        <div className="movie-card card">
            <h4 className="card-title">Add new movie</h4>
            <input placeholder="Url" onChange={(e)=>{setUrl(e.target.value)}}></input>
            <p>{checkInput('url')}</p>
            <input placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}></input>
            <p>{checkInput('title')}</p>
            <input placeholder="Subtitle" onChange={(e)=>{setSubTitle(e.target.value)}}></input>
            <p>{checkInput('subtitle')}</p>
            <input placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}></input>
            <p>{checkInput('description')}</p>
            <button onClick={()=>{AddMovie()}}>Add</button>
        </div>    
        </div>
    )
}

export default AddMovie