import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@components/UI/Table"
import { format } from "../../../utils/index";
import { useNavigate } from "react-router-dom";
import { Song } from "src/models/songs";
import { useEffect, useState } from "react";
const TableSong = (songs:Song[]) => {
    // const { data, isLoading } = useQuery('songs', fetchSongs);
    const navigate = useNavigate();
    const {data} = songs;
    console.log(data);
  
    const playKaraoke = (id) => {
        navigate(`/player/${id}`)
      }
    //   const [songs, setSongs] = useState([]);
    // console.log(data);
    // if (!)) {
    //     // Manejo del caso en que data no es un array
    //     return <p>Los datos no son válidos.</p>;
    //   }
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
        {data.map((songs:Song) => (
          <TableRow onClick={()=>playKaraoke(songs.id)} key={songs.id}>
            <TableCell className="font-medium">{songs.id}</TableCell>
            <TableCell>
              <div className='flex gap-3'>
                <img
                  src={songs.image}	
                  alt={songs.name}
                  className="w-[40px] h-[40px] rounded-sm object-cover"
                />
                <div className='flex flex-col'>
                {songs.name}
                <span className='text-gray-500 text-sm'>{songs.artist.name}</span>
                </div>
              </div>
              
            </TableCell>
            <TableCell>{songs.album?.name ? songs.album.name : "Álbum desconocido"}</TableCell>
            <TableCell className="text-right">{format(songs.duration)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* AQUI VA LA PAGINACION */}
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    );
    }
export default TableSong;