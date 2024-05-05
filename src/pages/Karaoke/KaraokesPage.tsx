import { Card } from "@components/UI/Card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@components/UI/Table";
import { Karaoke } from "@models/Karaoke";
import { useEffect, useState } from "react";
import { getKaraokesByUser } from "@services/Karaoke.services";
// import { Karaoke } from "@models/Karaoke";

const KaraokesPage = () => {
    const user = {
        id: 1,
        name: 'Admin'
    }
    const [Karaokes, setKaraokes] = useState<Karaoke[]>([]);
    useEffect(() => {
        getKaraokesByUser(user.id).then((response) => {
            setKaraokes(response);
        });
    }, [])

    return (
        <Card>
          <div className="flex gap-3">
            <h1>My Karaokes</h1>
            <span className="material-symbols-outlined hover:bg-muted-foreground rounded-full">add</span>
          </div>
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
                {karaoke.lyric?.song.name}
                <span className='text-gray-500 text-sm'>{karaoke.publication_date}</span>
                </div>
            </TableCell>
            <TableCell>{karaoke.publication_date}</TableCell>
            <TableCell>{karaoke.isPublished}</TableCell>
            <TableCell className="text-right">
                <div className="flex gap-1"> 
                <span className="material-symbols-outlined m-auto text-muted-foreground text-xl">visibility</span>
                    <span className="material-symbols-outlined m-auto text-muted-foreground text-xl">edit</span>
                    <span className="material-symbols-outlined m-auto text-muted-foreground text-xl">delete</span>
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