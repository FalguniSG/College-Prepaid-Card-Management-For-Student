import IssueBook from "../../components/Library/IssueBook";
import SidebarLib from "../../components/SidebarLib";

const Home = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
            <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          <IssueBook />
        </div>
      </div>
    );
  };
  
  export default Home;
  