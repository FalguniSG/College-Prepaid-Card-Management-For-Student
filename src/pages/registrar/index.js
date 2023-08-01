import SearchUser from "../../components/SearchUser.js";
import Sidebar from "../../components/Sidebar.js";
import UsersTable from "../../components/UsersTable.js";



const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-6">
        <SearchUser />
        <UsersTable />

      </div>
    </div>
  );
};

export default Home;
