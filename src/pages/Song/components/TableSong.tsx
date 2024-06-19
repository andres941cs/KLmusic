import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/UI/Table"
import { format } from "@utils/index"
import { useNavigate } from "react-router-dom";
import { Song } from "@models/Songs";
import { MouseEvent } from "react";
import ScheduleIcon from "@assets/Icons/ScheduleIcon";

interface TableSongProps { data: Song[] }
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
            <TableHead className="text-center sm:text-left sm:w-[100px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className='hidden sm:table-cell'>Album</TableHead>
            <TableHead className="flex items-center justify-end"><ScheduleIcon size={16} className='fill-muted-foreground'/></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((song:Song) => (
            <TableRow onClick={(e)=>navigateTo(e,`/song/${song.id!}`)} key={song.id}>
              <TableCell className="text-center font-medium">{song.id}</TableCell>
              <TableCell>
                <div className='flex gap-3'>
                  <img src={song.image} alt={song.name} className="w-[40px] h-[40px] rounded-sm object-cover"/>
                  <div className='flex flex-col'>
                    {song.name}
                  <span onClick={(e)=>navigateTo(e,`/artist/${song.artist?.id}`)} className='text-gray-500 text-sm hover:underline cursor-pointer'>{song.artist?.name}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className='hidden sm:table-cell'>
                <span className='hover:text-primary hover:underline cursor-pointer' onClick={(e)=>navigateTo(e,`/album/${song.album?.id}`)}>{song.album?.name ? song.album.name : "Álbum desconocido"}</span>
                </TableCell>
              <TableCell className="text-right">{format(song.duration)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
    }
export default TableSong;