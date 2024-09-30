
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer";

export default function WebsiteLayout() {

    

  return (
    <div>
      <header>
        <Header/>

      </header>

        <main> 
            <Outlet/>
        </main>
        <footer>

        <Footer/>
        </footer>


    
    </div>
  )
}
