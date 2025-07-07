import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataTableProps {
  headers: string[];
  data: (string | number)[][];
  title?: string;
}

const DataTable = ({ headers, data, title }: DataTableProps) => {
  return (
    <div className="mb-6">
      {title && <h3 className="text-lg font-medium mb-3 text-primary">{title}</h3>}
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-primary">
              {headers.map((header, index) => (
                <TableHead key={index} className="text-primary-foreground font-semibold">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-muted/50">
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className="font-medium">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;