import RFIDCardRechargeForm from "../../components/RFIDCardRechargeForm.js";
import Sidebar from "../../components/Sidebar";
import UsersTable from "../../components/UsersTable.js";


const Home = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/5"> 
          <Sidebar /> 
      </div>
      <div className="w-4/5 p-6">
         <UsersTable />
         <RFIDCardRechargeForm />
         
      </div>
    </div>
  );
};

export default Home;
