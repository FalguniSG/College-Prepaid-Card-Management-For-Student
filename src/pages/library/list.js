import Booklist from "../../components/BookList";
import SidebarLib from "../../components/SidebarLib";

const BookLists = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
          <SidebarLib />
        </div>
        <div className="w-4/5 p-6">
          
          <Booklist />
       
        </div>
      </div>
    );
  };
  
  export default BookLists;
  