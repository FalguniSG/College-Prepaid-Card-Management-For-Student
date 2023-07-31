
import LibFinePay from "../../components/Library/Payment";
import ReturnBook from "../../components/Library/ReturnBook";
import SearchUser from "../../components/SearchUser";
import SidebarLib from "../../components/SidebarLib";
import UserCard from "../../components/UserCard";

const LibHome = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
            <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          <SearchUser />
          <UserCard />
          <ReturnBook />
          <LibFinePay />
        </div>
      </div>
    );
  };
  
  export default LibHome;
  