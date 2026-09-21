import { X } from "lucide-react";

const LocationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600/70">
      <div className="h-85 w-md bg-gray-200 shadow-2xl rounded-2xl p-4">

        <div className="flex justify-between items-center"> 
          <h2 className="text-2xl font-bold">Where are you today?</h2>

          <button
            onClick={onClose}
            className="bg-gray-300 text-red-600 rounded-full border p-1 hover:bg-red-600 hover:text-white"
          >
            <X />
          </button>
        </div>

        <div>
          <form>
            <input
              placeholder="Enter City Name"
              type="text"
              className="w-full border"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
