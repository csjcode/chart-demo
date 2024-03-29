import * as React from "react";
import ReactDOM from "react-dom/client";

import "./table.css";

import {
  getCoreRowModel,
  ColumnDef,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { makeData, Person } from "./makeData";
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
    header: () => <span>Type</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>USD</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "age",
    header: () => "WEN",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "visits",
    header: () => <span>SOL</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Price",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "progress",
    header: "Maker",
    footer: (props) => props.column.id,
  },
];

export function MyTable() {
  const data = React.useMemo(() => makeData(20), []);

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });
  const getRowClassName = (row: any) => {
    const status = row.original.status; // Adjust based on how your data defines price movement
    if (status === "buy") return "text-green";
    if (status === "sell") return "text-red";
    return "text-silver"; // Assuming 'unchanged' or any other status results in silver
  };
  return (
    <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
      <div className="h-2" />
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ position: "relative", width: header.getSize() }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      }`}
                    ></div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={getRowClassName(row)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
}
