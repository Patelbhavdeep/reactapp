
import Display from './Display'
import Components from './Components'

const App = () => {

  let url = "https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=2"
  let HigherOrderComponent = Components(Display, url)


  return (
    <div>
      <HigherOrderComponent />
    </div>
  )
}

export default App
