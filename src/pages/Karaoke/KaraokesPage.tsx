import { Card } from "@components/UI/Card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@components/UI/Table";
import { Karaoke } from "@models/Karaoke";
import { useEffect, useState } from "react";
import { getKaraokesByUser } from "@services/Karaoke.services";
import { getProfile } from "@services/User.services";
import { useNavigate } from "react-router-dom";

const KaraokesPage = () => {
    const [Karaokes, setKaraokes] = useState<Karaoke[]>([]);
    const navigate  = useNavigate();
    useEffect(() => {
      const token = sessionStorage.getItem('token');
      getProfile(token!).then((user) => {
        getKaraokesByUser(user.id).then((response) => {
          setKaraokes(response);
        });
      });
    }, []);

    return (
      <Card className="flex flex-col">
        <div className="flex gap-3">
          <h1>My Karaokes</h1>
          <span onClick={()=>navigate('/karaoke')} className="material-symbols-outlined cursor-pointer rounded-full">add</span>
        </div>
        <Table>
          <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Karaoke</TableHead>
            <TableHead>Publication_date</TableHead>
            <TableHead>Visibility</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {Karaokes ? Karaokes.map((karaoke:Karaoke) => (
          <TableRow key={karaoke.id}>
            <TableCell className="font-medium">{karaoke.id}</TableCell>
            <TableCell>
                <div className='flex flex-col'>
                  {karaoke.lyric?.song?.name}
                  <span className='text-gray-500 text-sm'>{karaoke.lyric?.song?.name}</span>
                </div>
            </TableCell>
            <TableCell>{karaoke.publication_date}</TableCell>
            <TableCell>{karaoke.isPublished}</TableCell>
            <TableCell className="text-right">
                <span className="material-symbols-outlined m-auto text-muted-foreground text-xl mx-4">visibility</span>
                <span className="material-symbols-outlined m-auto text-muted-foreground text-xl mx-4">edit</span>
                <span className="material-symbols-outlined m-auto text-muted-foreground text-xl mx-4">delete</span>
            </TableCell>
          </TableRow>
        )): <TableRow><TableCell className="text-center" colSpan={5}>No data</TableCell></TableRow>}
        </TableBody>
        <TableFooter>
          {/* AQUI VA LA PAGINACION */}
          <TableRow>
          </TableRow>
        </TableFooter>
    </Table>
        </Card>
    );
};
export default KaraokesPage;