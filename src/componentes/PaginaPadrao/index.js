import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"

function PaginaPadrao({children}) {
    return (
        <main>
            <Banner />
            <Outlet />
            {children}
        </main>
    )
}

export default PaginaPadrao