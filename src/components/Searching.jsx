import React, {useState} from 'react';
import axios from 'axios';
import Request from './Request'

const FilmReq = () => {
  const [data,setData]= useState("");
  const [filmYear, setFilmYear] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [plot, setPlot] = useState("");

  const updateFilmYear = (e) => {
      e.preventDefault(); 
      setFilmYear(e.target.value);
  }
  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }
  const updatePlot = (e) => {
    e.preventDefault(); 
    setPlot(e.target.value);
}

  const makeRequest =(e) => {
      axios.get("http://www.omdbapi.com/?apikey=6a873a7a&t=" + filmTitle + "&y=" + filmYear + "&plot=" + plot)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      });
  };

  return (
  <>
      <div>
        <p>Title:</p>
        <input type="text" onChange={(e)=>updateTitle(e)} />
        <p>Year:</p>
        <input type="text" onChange={(e)=>updateFilmYear(e)} />
        <p/>
        <select onChange={(e)=>updatePlot(e)}>
            <option value = "short" selected>Short</option>
            <option value = "full">Full</option>
        </select>
        <button onClick={(e) => makeRequest(e)}>Click me</button>
        {/* <Request data={data} /> */}
        <h4>Movie Title:</h4>
        <p>{data.Title}</p>
        <h4>Release Year:</h4>
        <p>{data.Year}</p>
        <h4>Movie Genre:</h4>
        <p>{data.Genre}</p>
        <h4>Movie Plot:</h4>
        <p>{data.Plot}</p>
      </div>
  </>
  );
}

export default FilmReq; 