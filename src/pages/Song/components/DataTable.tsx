// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/UI/Table"

// const DataTable = ({ data }) => {
//     return (
// <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">#</TableHead>
//           <TableHead>Title</TableHead>
//           <TableHead>Album</TableHead>
//           <TableHead className="text-right"><span className="material-symbols-outlined text-base">schedule</span></TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data.map((songs:any) => (
//           <TableRow onClick={()=>goTo(data.id)} key={songs.id}>
//             <TableCell className="font-medium">{songs.id}</TableCell>
//             <TableCell>
//               <div className='flex gap-3'>
//                 <img
//                   src={songs.image}	
//                   alt={songs.name}
//                   className="w-[40px] h-[40px] rounded-sm object-cover"
//                 />
//                 <div className='flex flex-col'>
//                 {songs.name}
//                 <span className='text-gray-500 text-sm'>{songs.artist.name}</span>
//                 </div>
//               </div>
              
//             </TableCell>
//             <TableCell>{songs.album?.name ? songs.album.name : "Álbum desconocido"}</TableCell>
//             {/* <TableCell>{songs.album.name}</TableCell> */}
//             <TableCell className="text-right">{format(songs.duration)}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         {/* AQUI VA LA PAGINACION */}
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">$2,500.00</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
// }