import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@components/UI/Table"
import { format } from "@utils/index"
import { useNavigate } from "react-router-dom";
import { Song } from "@models/songs";


interface TableSongProps {
    data: Song[]
}
const TableSong = ({data}:TableSongProps) => {
    // const { data, isLoading } = useQuery('songs', fetchSongs);
    const navigate = useNavigate();
    console.log(data);
  
    const playKaraoke = (id:number) => {
        navigate(`/player/${id}`)
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
          <TableRow onClick={()=>playKaraoke(song.id)} key={song.id}>
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
                <span className='text-gray-500 text-sm'>{song.artist.name}</span>
                </div>
              </div>
              
            </TableCell>
            <TableCell>{song.album?.name ? song.album.name : "Álbum desconocido"}</TableCell>
            <TableCell className="text-right">{format(song.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* AQUI VA LA PAGINACION */}
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
    );
    }
export default TableSong;