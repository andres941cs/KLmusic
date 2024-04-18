import { Card } from '@components/UI/Card';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from './components/Table'
import { useEffect, useState } from 'react';
function SongPage() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    
  })
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
        {songs.map((songs) => (
          <TableRow key={songs.id}>
            <TableCell className="font-medium">{songs.id}</TableCell>
            <TableCell>{songs.name}</TableCell>
            <TableCell>{songs.abum.name}</TableCell>
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

export default SongPage;