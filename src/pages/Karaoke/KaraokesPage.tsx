import { Card } from "@components/UI/Card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../Song/components/Table";
import { Button } from "@components/UI";

const KaraokesPage = () => {
    const user = {
        id: 1,
        name: 'Admin'
    }
    const Karaokes = [
        {
            id: 1,
            name: 'Song 1',
            album: 'Album 1',
            duration: '3:00'
        },
        {
            id: 2,
            name: 'Song 2',
            album: 'Album 2',
            duration: '3:00'
        },
        {
            id: 3,
            name: 'Song 3',
            album: 'Album 3',
            duration: '3:00'
        }
    ]
    return (
        <Card>
        <h1>My Karaokes</h1>
        <Table>
        <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Title Song</TableHead>
          <TableHead>Publication_date</TableHead>
          <TableHead>Visibility</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Karaokes.map((karaoke:Karaoke) => (
          <TableRow key={karaoke.id}>
            <TableCell className="font-medium">{karaoke.id}</TableCell>
            <TableCell>
                <div className='flex flex-col'>
                {karaoke.name}
                <span className='text-gray-500 text-sm'>{karaoke.album}</span>
                </div>
            </TableCell>
            <TableCell>{karaoke.publication_date}</TableCell>
            <TableCell>{karaoke.isPublished}</TableCell>
            <TableCell className="text-right">
                <div className="flex gap-3">
                    <Button >Change Visibity</Button>
                    <Button className="items-center">Edit</Button>
                    <Button className="items-center">Delete</Button>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* AQUI VA LA PAGINACION */}
        <TableRow>
          {/*<TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
          */}
        </TableRow>
      </TableFooter>
    </Table>
        </Card>
    );
};
export default KaraokesPage;