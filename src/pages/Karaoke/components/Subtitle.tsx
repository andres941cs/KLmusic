import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";

function Subtitle() {
    
    return ( 
        // <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
        <form className="h-full">
        <StackLayout className="h-full">
            {/* ACTIONS */}
            <div>Options
                <Button>Save</Button>
            </div>
            {/* LYRICS */}
            <StackLayout className="w-[900px] h-[110px]">
                {/* <div className="w-full h-24 border">

                </div> */}
                <StackLayout gap={3} orientation="row">
                    <div className="w-[629px] h-[100px] border"> 
                        <Textarea className="h-full resize-none"></Textarea>
                    </div>
                    <span className="material-symbols-outlined text-foreground">delete</span>
                    <StackLayout justifyContent="between" className="h-full">
                        <div className="w-40 h-10 border"><InputTime/></div>
                        <div className="w-40 h-10 border"></div>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>
        </form>
     );
}

export default Subtitle;