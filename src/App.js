import logo from "./logo.svg";
import "./App.css";
// import { useFetch } from "@hooks";

function App() {
  // const { data, setData, error, loading } = useFetch(
  //   "'https://api.restful-api.dev/objects'",
  // );
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}...</p>;
  return (
    <div className="App">
      <div>
        <h1>Welcome</h1>
        {/* {data?.length > 0 &&
          data?.map((item) => (
            <div key={item.id} style={{ border: "2px solid black" }}>
              <p>{item.name}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
}

export default App;
