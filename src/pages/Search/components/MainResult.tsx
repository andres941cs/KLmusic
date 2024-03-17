// import { Card } from "../../../components/UI/Card";

import { StackLayout } from "../../../components/Layouts/StackLayout";
import { Badge } from "../../../components/UI/Badge";
import Result from "./Results";
import Tabs from "./Tabs";


// function MainResult() {
//     function clear(){
        
//     }
//     return ( 
//         // <Card className="h-[375px] w-[500px]">
//         <>
//             {/* <div className="flex flex-col gap-5 p-5 md:w-[500px] bg-[#181818] border border-[#27272A] group hover:bg-[#282828] relative">
//                 <div className="h-[100px] w-[100px] rounded-sm bg-slate-100" ></div>
//                 <p className="text-foreground">Name Song</p>
//                 <p className="italic text-muted-foreground">Song <span className="font-normal text-foreground">Name Artist</span></p>
//                 <button className="absolute bottom-5 right-5 transition-opacity duration-300 opacity-0  z-10 group-hover:opacity-100"><span className="material-symbols-outlined text-[5rem]">play_circle</span></button>
//             </div> */}
//             {/* VERSION MOVIL */}
//             {/* INPUT */}
//             <div className="flex items-center bg-[#f7f7f7] dark:bg-[#585858] -m-5 py-1">
//                 <span className="material-symbols-outlined font-thin dark:text-white mx-2">arrow_left_alt</span>
//                 <input className="w-full h-10 bg-transparent text-foreground border-none focus:outline-none"></input>
//                 <span className="material-symbols-outlined font-thin dark:text-white mx-2">close</span>
//             </div>
//             {/* RESULTADOS */}
//             <div>
//                 <Badge variant="outline">Best Results</Badge>
//             </div>
//         </>    
//         // </Card>
//      );
// }

// export default MainResult;

function MainResult() {
    function clear(){
        
    }
    const tabs = [
        { label: 'Best Results', content: <Result/> },
        { label: 'Artists', content: <Badge variant="outline">Artists</Badge> },
        { label: 'Songs', content: <Badge variant="outline">Songs</Badge> },
        { label: 'Albums', content: <Badge variant="outline">Songs</Badge> },
    ];
    return ( 
        // <Card className="h-[375px] w-[500px]">
        <StackLayout>
            {/* VERSION MOVIL */}
            {/* INPUT */}
            <div className="flex items-center w-full bg-[#f7f7f7] dark:bg-[#585858] py-1">
                <span className="material-symbols-outlined font-thin dark:text-white mx-2">arrow_left_alt</span>
                <input className="w-full h-10 bg-transparent text-foreground border-none focus:outline-none"></input>
                <span className="material-symbols-outlined font-thin dark:text-white mx-2">close</span>
            </div>
            {/* RESULTADOS */}
            {/* <StackLayout orientation="row" className="gap-2 overflow-x-auto">
                <Badge variant="outline">Best Results</Badge>
                <Badge variant="outline">Artists</Badge>
                <Badge variant="outline">Songs</Badge>
                <Badge variant="outline">Albums</Badge>
            </StackLayout> */}

            <Tabs tabs={tabs} />

        </StackLayout>
        // </Card>
     );
}

export default MainResult;