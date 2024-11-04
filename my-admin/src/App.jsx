import { Admin, Resource, ListGuesser, PrevNextButtonClasses } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';
import { PostList, PostShow } from "./Posts";

const pbProvider = PocketBaseProvider("https://jubilant-space-fortnight-v6vgw55669qjcp4p5-8090.app.github.dev/");

const App = () => (
  <Admin 
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList}  show={PostShow}/>
  </Admin>
);

export default App;
