import Navigation from "./components/Navigation/Navigation";
import SaladMaker from "./components/SaladMaker/SaladMaker";
import UserContext from "./components/User/User";

const user = {
  name: 'Ken',
  favorites: [
    'avocado',
    'carrot',
  ]
}
function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
