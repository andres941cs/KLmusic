import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/UI/Table";
import { Karaoke } from "@models/Karaoke";
import { useEffect, useState } from "react";
import { changeVisibility, deleteKaraoke, getKaraokesByUser } from "@services/KaraokeData";
import { getProfile } from "@services/UserData";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { AddIcon, PostAddIcon } from "@assets/Icons/Add";
import { VisibilityIcon } from "@assets/Icons/Visibility";
import DeleteIcon from "@assets/Icons/Delete";
import { StackLayout } from "@components/Layouts/StackLayout";
// PENDIENTE - CAMBIAR EL ICONO DEL OJO
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

    const handleDelete = (id:number) => {
      deleteKaraoke(id).then(() => {
        toast.success('Karaoke deleted');
        const token = sessionStorage.getItem('token');
        // UPDATE KARAOKE LIST
        getProfile(token!).then((user) => {
          getKaraokesByUser(user.id).then((response) => {
            setKaraokes(response);
          });
        });
      });
    }

    const handleVisibility = (id:number) => {
      changeVisibility(id).then((response) => {
        toast.success(response);
        const token = sessionStorage.getItem('token');
        // UPDATE KARAOKE LIST
        getProfile(token!).then((user) => {
          getKaraokesByUser(user.id).then((response) => {
            setKaraokes(response);
          });
        });
      });
    }

    return (
      <StackLayout className="flex flex-col h-full text-foreground p-5">
        <div className="flex gap-3 justify-between w-full">
          <div className="flex gap-3">
            <h1>My Karaokes</h1>
            <AddIcon className="fill-foreground hover:fill-primary cursor-pointer" onClick={()=>navigate('/karaoke')} />
          </div>
          <PostAddIcon className="fill-foreground hover:fill-primary cursor-pointer" onClick={()=>navigate('/forms')} />
        </div>
        <Table>
          <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Karaoke</TableHead>
            <TableHead>Publication_date</TableHead>
            <TableHead className="text-center">Visibility</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
          {Karaokes ? Karaokes.map((karaoke:Karaoke) => (
            <TableRow key={karaoke.id}>
              <TableCell className="font-medium">{karaoke.id}</TableCell>
              <TableCell>
                  <span>{karaoke.lyric?.song?.name} - {karaoke.lyric?.song?.artist?.name}</span>
              </TableCell>
              <TableCell>{karaoke.publication_date}</TableCell>
              <TableCell className="text-center">{karaoke.isPublished==1?'True':'False'}</TableCell>
              <TableCell className="flex justify-end gap-4">
                  <VisibilityIcon className="fill-muted-foreground cursor-pointer" onClick={()=>handleVisibility(karaoke.id!)} />
                  {/* <span className="material-symbols-outlined m-auto text-muted-foreground text-xl mx-4">edit</span> */}
                  <DeleteIcon className="fill-muted-foreground cursor-pointer" onClick={()=>handleDelete(karaoke.id!)} />
              </TableCell>
            </TableRow>
          )): <TableRow><TableCell className="text-center" colSpan={5}>No data</TableCell></TableRow>}
          </TableBody>
        </Table>
        <Toaster richColors />
      </StackLayout>
    );
};
export default KaraokesPage;