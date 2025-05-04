import { ArrowUpRight, DollarSign } from "lucide-react";
import React from "react";

const RecentTransactions = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <DollarSign /> Recent Transactions
        </h3>
        <button className="text-sm text-violet-500 hover:underline">
          See all
        </button>
      </div>
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="March 28th"
            price="$9.75"
            order={1}
          />
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="March 28th"
            price="$9.75"
            order={2}
          />
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="March 28th"
            price="$9.75"
            order={3}
          />
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="March 28th"
            price="$9.75"
            order={4}
          />
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="March 28th"
            price="$9.75"
            order={5}
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5 flex items-center gap-1 text-violet-600 underline">
        {cusId} <ArrowUpRight />
      </td>
      <td>{sku}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>{order}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8"></button>
      </td>
    </tr>
  );
};

export default RecentTransactions;
