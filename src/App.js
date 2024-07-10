import './App.css';
import AlbumFeature from './features/Album';

function App() {

  const footballer ={
    name: "Martin Lo",
    age: 25,
    isMale: true
  }
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      {/* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <p>{footballer.name} - tuổi: {footballer.age} - giới tính: {footballer.isMale ? "Male" : "Female"}</p>
      <ul>
        {colorList.map(color => (
          <li style={{color}}>{color}</li>     
        ))}
      </ul>

      <TodoFeature/>
      </header>  */}
      <AlbumFeature/>
    </div>
  );
}

export default App;
