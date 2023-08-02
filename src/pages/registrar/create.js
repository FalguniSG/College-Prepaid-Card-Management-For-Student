import { useUser } from "@/hooks/user";
import CreateStudent from "../../components/CreateStudent";
import Sidebar from "../../components/Sidebar";

const CreateStudentAcc = () => {
  const { data } = useUser({ middleware: "auth" })

  return (
    <div className="flex flex-row">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-6">
        <CreateStudent />

      </div>
    </div>
  );
};


export default CreateStudentAcc;
