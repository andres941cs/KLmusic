import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/UI/Table"
import { format } from "@utils/index"
import { useNavigate } from "react-router-dom";
import { Song } from "@models/songs";
import { MouseEvent } from "react";

interface TableSongProps {
    data: Song[]
}
const TableSong = ({data}:TableSongProps) => {
    const navigate = useNavigate();

    const navigateTo = (e:MouseEvent<HTMLSpanElement>  ,route:string) => {
      e.stopPropagation();
      navigate(route)
    }

    return (
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
          {data.map((song:Song) => (
            <TableRow onClick={(e)=>navigateTo(e,`/song/${song.id!}`)} key={song.id}>
              <TableCell className="font-medium">{song.id}</TableCell>
              <TableCell>
                <div className='flex gap-3'>
                  <img
                    src={song.image}	
                    alt={song.name}
                    className="w-[40px] h-[40px] rounded-sm object-cover"
                  />
                  <div className='flex flex-col'>
                  {song.name}
                  <span onClick={(e)=>navigateTo(e,`/artist/${song.artist?.id}`)} className='text-gray-500 text-sm hover:underline cursor-pointer'>{song.artist?.name}</span>
                  </div>
                </div>
                
              </TableCell>
              <TableCell>
                <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/album/${song.album?.id}`)}>{song.album?.name ? song.album.name : "Álbum desconocido"}</span>
                </TableCell>
              <TableCell className="text-right">{format(song.duration)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* PAGINACION */}
      </Table>
    );
    }
export default TableSong;