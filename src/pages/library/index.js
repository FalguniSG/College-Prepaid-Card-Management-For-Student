import IssueBook from "../../components/Library/IssueBook";
import SearchUser from "../../components/SearchUser";
import SidebarLib from "../../components/SidebarLib";
import UserCard from "../../components/UserCard";

const Home = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
            <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          <SearchUser />
          <UserCard />
        </div>
      </div>
    );
  };
  
  export default Home;
  