import { StackLayout } from "../../../components/Layouts/StackLayout";

function Result() {
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            <StackLayout orientation="row" className="w-full justify-between  hover:bg-accent p-2">
                <StackLayout orientation="row" className="gap-2 ">
                    <div className="h-12 w-12 bg-green-500 rounded-full"></div>
                    <p>Name Artist</p>
                </StackLayout>
                <span className="material-symbols-outlined">navigate_next</span>
            </StackLayout>
            <StackLayout orientation="row" className="w-full justify-between  hover:bg-accent p-2">
                <StackLayout orientation="row" className="gap-2 ">
                    <div className="h-12 w-12 bg-green-500 rounded-full"></div>
                    <p>Name Artist</p>
                </StackLayout>
                <span className="material-symbols-outlined">navigate_next</span>
            </StackLayout>
        </StackLayout>
     );
}

export default Result;