import Footer from "../Components/Footer";
import Head from "../Components/Head";
import Header from "../Components/Header"
interface Props{
    children : React.ReactNode;
}
const Layout=({children}: Props)=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Head />
            <div className="container mx-auto py-10 flex-1 "style={{ width: '70%' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;