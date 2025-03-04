import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-json-server";
import { UserList } from "./users";

const dataProvider = simpleRestProvider("https://jsonplaceholder.typicode.com");

function AdminPanel() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default AdminPanel;
