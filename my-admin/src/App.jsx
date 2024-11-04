import { Admin, Resource, ListGuesser, PrevNextButtonClasses } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';
import { PostList, PostShow } from "./Runners";


import { Dashboard } from './Dashboard';


const pbProvider = PocketBaseProvider("https://jubilant-space-fortnight-v6vgw55669qjcp4p5-8090.app.github.dev/");

const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}>
  <Resource name="Runners" list={PostList}  show={PostShow}/>
  </Admin>
);

export default App;
