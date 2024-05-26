import { Card } from '@components/UI/Card';
import { MouseEvent, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from '../../components/UI/Table'
import { Song } from 'src/models/songs';
import { format } from '../../utils/index';
import { useNavigate } from "react-router-dom";
import { getKaraokes } from '@services/Karaoke.services';

function SongsPage() {
  const [songs, setSongs] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getKaraokes().then((data) => setSongs(data));
  }, [])

  const playKaraoke = (id:number) => {
    navigate(`/player/${id}`)
  }

  const navigateTo = (e:MouseEvent<HTMLSpanElement>,route:string) => {
    e.stopPropagation();
    navigate(route)
  }
    return ( 
        <Card className="p-0">
          <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Album</TableHead>
          <TableHead className="text-right"><span className="material-symbols-outlined text-base">schedule</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((songs:Song) => (
          <TableRow onClick={()=>playKaraoke(songs.id_karaoke!)} key={songs.id}>
            <TableCell className="font-medium">{songs.id_karaoke}</TableCell>
            <TableCell>
              <div className='flex gap-3'>
                <img
                  src={songs.image}	
                  alt={songs.name}
                  className="w-[40px] h-[40px] rounded-sm object-cover"
                />
                <div className='flex flex-col'>
                <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/song/${songs.id!}`)}>{songs.name}</span>
                <span onClick={(e)=>navigateTo(e,`/artist/${songs.artist?.id!}`)} className='text-gray-500 text-sm hover:underline cursor-pointer'>{songs.artist?.name}</span>
                </div>
              </div>
              
            </TableCell>
            <TableCell>
              <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/album/${songs.album?.id}`)}>{songs.album?.name ? songs.album.name : "Álbum desconocido"}</span>
            </TableCell>
            <TableCell className="text-right">{format(songs.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* AQUI VA LA PAGINACION */}
      </TableFooter>
    </Table>
        </Card>
          
     );
}

export default SongsPage;