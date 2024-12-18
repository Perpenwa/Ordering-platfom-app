//importing dependencies 
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

//Setting up mobile navigations
const MobileNav = () => {
    return(
        <Sheet>
           <SheetTrigger>
            <Menu className= "text-orange-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to AgroProducts.com</span>
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Login</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;