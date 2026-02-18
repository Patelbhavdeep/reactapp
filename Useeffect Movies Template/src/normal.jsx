import React, { useEffect, useState } from 'react'

const App = () => {

  let [card, setCard] = useState([])
  let [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${count}`)
      .then((req) => req.json())
      .then((res) => {
        
          setCard((prev) => [...prev, ...res.results]);

       
      })
     
  }, [count])

  let handleMore = () => {
      setCount((prev) => prev + 1)
  }
   return (
    <>
      {card.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.title}</h1> {/* 👈 title show karo */}
          </div>
        );
      })}

      <button onClick={handleMore}>View More</button>
    </>
  );
};

export default App;
