/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
    <div className="container mx-auto px-4 sm:px-8 font-Montserrat">
      <div className="py-8">
        <div className="my-2 flex sm:flex-row flex-col items-center w-full justify-between">
          <div>
            <h2 className="text-gray-100 text-m">Transactions</h2>
          </div>
          <div className="relative border rounded-md p-1">
            <div className="pointer-events-none absolute top-[6px] left-8 flex items-center text-gray-700">
              <img
                src={"/Icons/fi_filter.svg"}
                alt="filter icon"
                className="w-4 h-5"
              />
            </div>
            <select className="h-full rounded-r sm:rounded-r-none block appearance-none w-full bg-white text-gray-700 py-1 px-4 pl-12 text-xs leading-tight focus:outline-none focus:bg-white">
              <option>Filter</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {tableHeaders.map((item, idx) => (
                    <th
                      key={idx}
                      className="px-5 py-3 border-b-2 border-purple-200 text-left font-bold text-purple-400 uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TransactionTableData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.date}
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.txnId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
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
                    <td className="px-5 py-5 bg-white text-sm">
                      <Link
                        href={item.receipt}
                        className="text-gray-900 whitespace-no-wrap"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-5 py-5 bg-white border-t border-purple-200 flex items-center justify-between">
              <div className="flex items-center">
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
                <span className="text-xs xs:text-sm text-gray-900">
                  Items per page
                </span>
              </div>
              <div className=" mt-2 gap-1">
                <button className="px-2 py-1 text-center text-black text-xs">
                  &lt; Prev
                </button>
                <button className="px-2 py-1 text-center text-black text-xs">
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
                <span className="text-xs">of 1 page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranactionTable;
