import RFIDCardRechargeForm from "../../components/RFIDCardRechargeForm.js";
import SearchUser from "../../components/SearchUser";
import SidebarAcc from "../../components/SidebarAcc";
import UserCard from "../../components/UserCard.js";

const CardRecharge = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5">
          <SidebarAcc />
        </div>
        <div className="w-4/5 p-6">
          <SearchUser />
          <UserCard />
          <RFIDCardRechargeForm />
        </div>
      </div>
    );
  };
  
  export default CardRecharge;
  