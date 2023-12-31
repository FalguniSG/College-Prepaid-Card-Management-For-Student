import { useUser } from "@/hooks/user";
import CreateAdmin from "../../components/CreateAdmin";
import Sidebar from "../../components/Sidebar";

const CreateSupplierAcc = () => {
  const { data } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-6">
        <CreateAdmin />

      </div>
    </div>
  );
};


export default CreateSupplierAcc;
