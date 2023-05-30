import React from "react";
// import "./Procedure.css"
export default function ShowNewProcedure ({visible, onClose}) {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <div className="show">
      <div className="content">
        <div className="border-2 justify-center shadow-lg w-auto rounded-md sm:p-10">
          <form>
            <div className="text-sm w-50">
              <label>Experiment</label>
              <input
                type="text"
                placeholder="Experiment Title"
                className="bg-gray-50 p-2.5 mb-2 border text-sm hover:border-black rounded border-gray-300 focus:border-[#F1C232] block focus:outline-[#F1C232] w-full h-9 py-1"
              />

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                Lab Type
              </label>
              <input
                type="text"
                placeholder="Lab Name"
                className="bg-gray-50 p-2.5 mb-2 border text-sm hover:border-black rounded border-gray-300 focus:border-[#F1C232] block focus:outline-[#F1C232] w-full h-9 py-1"
              />

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                Department
              </label>
              <input
                type="text"
                placeholder="Department"
                className="bg-gray-50 p-2.5 mb-2 border text-sm hover:border-black rounded border-gray-300 focus:border-[#F1C232] block focus:outline-[#F1C232] w-full h-9 py-1"
              />

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                Year
              </label>
              <select className="focus:border-[#F1C232] mb-2 border focus:border-b-2 focus:outline-none w-20 h-9 z-20 border-slate-300 hover:border-black rounded">
                <option value="one" className="p-2 hover:bg-gray-100">
                  1
                </option>
                <option value="two" className="p-2 text-sm hover:bg-gray-100">
                  2
                </option>
                <option value="three" className="p-2 text-sm hover:bg-gray-100">
                  3
                </option>
                <option value="four" className="p-2 hover:bg-gray-100">
                  4
                </option>
              </select>

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                Semester
              </label>
              <select className="focus:border-[#F1C232] mb-2 border focus:border-b-2 focus:outline-none w-20 h-9 z-20 border-slate-300 hover:border-black rounded">
                <option value="one" className="p-2 text-sm hover:bg-gray-100">
                  1
                </option>
                <option value="two" className="p-2 text-sm hover:bg-gray-100">
                  2
                </option>
                <option value="three" className="p-2 text-sm hover:bg-gray-100">
                  3
                </option>
                <option value="four" className="p-2 text-sm hover:bg-gray-100">
                  4
                </option>
                <option value="five" className="p-2 text-sm hover:bg-gray-100">
                  5
                </option>
                <option value="six" className="p-2 text-sm hover:bg-gray-100">
                  6
                </option>
                <option value="seven" className="p-2 text-sm hover:bg-gray-100">
                  7
                </option>
                <option value="eight" className="p-2 text-sm hover:bg-gray-100">
                  8
                </option>
              </select>

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                Institute
              </label>
              <input
                type="text"
                placeholder="Institute"
                className="bg-gray-50 p-2.5 mb-2 border text-sm hover:border-black rounded border-gray-300 focus:border-[#F1C232] block focus:outline-[#F1C232] w-full h-9 py-1"
              />

              <label
                className={`bg-white w-full flex items-center justify-between rounded`}
              >
                University
              </label>
              <input
                type="text"
                placeholder="University"
                className="bg-gray-50 p-2.5 mb-2 border text-sm hover:border-black rounded border-gray-300 focus:border-[#F1C232] block focus:outline-[#F1C232] w-full h-9 py-1"
              />
            </div>
          </form>
          <br />

          <div className="grid px-3 flex-wrap grid-cols-2 gap-10">
            <button
              className="hover:scale-100 text-sm drop-shadow-lg hover:shadow-lg flex justify-center items-center focus:outline-none h-8 w-16 rounded-md bg-[#F1C232]"
              type="button"
            >
              SAVE
            </button>
            <button
            onClick={handleOnClose}
              className="hover:scale-100 text-white text-sm drop-shadow-lg hover:shadow-lg flex justify-center items-center focus:outline-none h-8 w-16 rounded-md bg-[#F50057]"
              type="button"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
