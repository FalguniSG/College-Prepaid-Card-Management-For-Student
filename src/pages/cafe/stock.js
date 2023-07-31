
import CafeStockTable from "../../components/CafeStockTable";
import SidebarCafe from "../../components/SidebarCafe";
import StockUpdate from "../../components/StockItem";

const UpdateStock = () => {
    return (
      <div className="flex flex-row">
        <div className="w-1/5"> 
            <SidebarCafe />
        </div>
        <div className="w-4/5 p-6">
            {/* <StockUpdate /> */}
            <CafeStockTable />
        </div>
      </div>
    );
  };

  
export default UpdateStock;
