import Footer from "@/components/Footer";
import Land from "@/components/Land";
import Header from "@/components/ui/Header";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div className= "flex flex-col min-h-screen">
        <Header/>
        <Land/>
        <div className= "container mx-auto flex-1 py-10">{children}</div>
        <Footer/>
    </div>
    );
};
export default Layout;