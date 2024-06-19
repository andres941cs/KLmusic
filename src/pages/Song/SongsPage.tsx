import { MouseEvent, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@components/UI/Table'
import { Song } from 'src/models/Songs';
import { format } from '@utils/index';
import { useNavigate } from "react-router-dom";
import { getKaraokes } from '@services/KaraokeData';
import ScheduleIcon from '@assets/Icons/ScheduleIcon';
import { StackLayout } from '@components/Layouts/StackLayout';

function SongsPage() {
  const [songs, setSongs] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getKaraokes().then((data) => setSongs(data));
  }, [])

  const playKaraoke = (id:number) => navigate(`/player/${id}`);

  const navigateTo = (e:MouseEvent<HTMLSpanElement>,route:string) => {
    e.stopPropagation();
    navigate(route)
  }
    return ( 
        <StackLayout className="h-full overflow-auto text-foreground">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center sm:text-left sm:w-[100px]">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className='hidden sm:table-cell'>Album</TableHead>
                <TableHead className="flex items-center justify-end"><ScheduleIcon size={16} className='fill-muted-foreground'/></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {songs.map((songs:Song) => (
                <TableRow onClick={()=>playKaraoke(songs.id_karaoke!)} key={songs.id}>
                  <TableCell className="text-center font-medium">{songs.id_karaoke}</TableCell>
                  <TableCell>
                    <div className='flex gap-3'>
                      <img src={songs.image} alt={songs.name} className="w-[40px] h-[40px] rounded-sm object-cover"/>
                      <div className='flex flex-col'>
                        <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/song/${songs.id!}`)}>{songs.name}</span>
                        <span onClick={(e)=>navigateTo(e,`/artist/${songs.artist?.id!}`)} className='text-gray-500 text-sm hover:underline cursor-pointer'>{songs.artist?.name}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/album/${songs.album?.id}`)}>{songs.album?.name ? songs.album.name : "Álbum desconocido"}</span>
                  </TableCell>
                  <TableCell className="text-right">{format(songs.duration)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StackLayout>
          
     );
}

export default SongsPage;