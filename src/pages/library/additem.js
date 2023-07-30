import AddNewBook from "../../components/Library/AddBook";
import SidebarLib from "../../components/SidebarLib";

const AddBook = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
          <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          <AddNewBook />
       
        </div>
      </div>
    );
  };
  
  export default AddBook;
  