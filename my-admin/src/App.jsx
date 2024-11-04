import { Admin, Resource, ListGuesser, PrevNextButtonClasses } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';
import {RunnerEdit, RunnerList, RunnerShow } from "./Runners";


import { Dashboard } from './Dashboard';
import { MapShow } from "./Map";

const pbProvider = PocketBaseProvider("https://jubilant-space-fortnight-v6vgw55669qjcp4p5-8090.app.github.dev/");

const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}>
  <Resource name="Runners" list={RunnerList}  show={RunnerShow} edit={RunnerEdit}/>
  <Resource name="Map" show={MapShow}/>
  </Admin>
);

export default App;
