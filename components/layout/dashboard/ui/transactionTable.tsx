import Image from "next/image";
import { TransactionTableData } from "@/constants/data/dashboard";

const tableHeaders: string[] = [
  "DATE",
  "TXN ID",
  "AMOUNT",
  "STATUS",
  "RECEIPT",
];

const TranactionTable = () => {
  return (
    <div className="mx-auto px-3 py-8 sm:px-8 font-Montserrat w-full">
      <div className="my-2 px-1 flex items-center justify-between">
        <h2 className="text-gray-100 text-m">Transactions</h2>
        <div className="relative border rounded-md p-1">
          <div className="pointer-events-none absolute top-[6px] left-8 flex items-center text-gray-700">
            <Image
              src={"/Icons/fi_filter.svg"}
              alt="filter icon"
              width={16}
              height={16}
            />
          </div>
          <select className="h-full rounded-r sm:rounded-r-none block appearance-none w-full bg-white text-gray-700 py-1 px-4 pl-12 text-xs leading-tight focus:outline-none focus:bg-white">
            <option>Filter</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Table Container with Scroll */}
      <div className="w-full shadow rounded-lg">
        <div className="overflow-x-auto md:overflow-x-hidden">
          <table className="w-full min-w-full md:min-w-0 leading-normal">
            <thead>
              <tr>
                {tableHeaders.map((item, idx) => (
                  <th
                    key={idx}
                    className="md:px-5 md:py-3 px-3 py-2 text-center md:text-left border-b-2 border-purple-200 font-bold text-purple-400 text-sm md:text-base uppercase tracking-wider"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TransactionTableData.map((item, idx) => (
                <tr key={idx}>
                  <td className="md:p-5 p-3 bg-white text-sm">
                    <p className="text-gray-900 whitespace-nowrap">
                      {item.date}
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-nowrap">
                          {item.txnId}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-nowrap">
                      {item.amount}
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span
                      className={
                        item.status === "paid"
                          ? "text-green-400 relative inline-block px-3 py-1 font-semibold leading-tight"
                          : "text-red-600 relative inline-block px-3 py-1 font-semibold leading-tight"
                      }
                    >
                      <span className="relative">{item.status}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm cursor-pointer">
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-5 py-5 bg-white border-t border-purple-200 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative rounded-md">
              <select className="h-full rounded-md block appearance-none w-full bg-gray-50 text-gray-700 py-2 pl-2 text-xs pr-6 leading-tight focus:outline-none focus:bg-white">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <span className="text-xs xs:text-sm text-gray-900 ml-2">
              Items per page
            </span>
          </div>
          <div className="flex gap-2 mb-4 md:mb-0">
            <button className="px-3 py-1 text-center text-black text-xs border rounded">
              &lt; Prev
            </button>
            <button className="px-3 py-1 text-center text-black text-xs border rounded">
              Next &gt;
            </button>
          </div>
          <div className="flex items-center">
            <div className="relative rounded-md">
              <select className="h-full rounded-md block appearance-none w-full bg-gray-50 text-gray-700 py-2 pl-2 text-xs pr-6 leading-tight focus:outline-none focus:bg-white">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <span className="text-xs ml-2">of 1 page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranactionTable;
