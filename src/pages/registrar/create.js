import CreateStudent from "../../components/CreateStudent";
import Sidebar from "../../components/Sidebar";

const CreateStudentAcc = () => {
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
