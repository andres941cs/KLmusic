import { Card } from '@components/UI/Card';
import { useEffect, useState } from 'react';
import { getSongs } from '../../services/Songs.services';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from './components/Table'
import { Song } from 'src/models/songs';

function SongsPage() {
  const [songs, setSongs] = useState([])
  
  useEffect(() => {
    getSongs().then((data) => { 
      setSongs(data);
    });
    
  }, [])
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
          <TableRow key={songs.id}>
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
                <span className='text-gray-500 text-sm'>{songs.album}</span>
                </div>
              </div>
              
            </TableCell>
            <TableCell>{songs.album}</TableCell>
            {/* <TableCell>{songs.album.name}</TableCell> */}
            <TableCell className="text-right">{songs.duration}</TableCell>
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
        </Card>
          
     );
}

export default SongsPage;