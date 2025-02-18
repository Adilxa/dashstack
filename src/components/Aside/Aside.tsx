import { Link } from "react-router";
import style from "./Aside.module.css";
import { useLocation } from "react-router";

interface IAsideData {
    title: string;
    link: string
}

const AsideArrData: IAsideData[] = [
    {
        title: 'Dashboard',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    }
]

const Aside = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <aside>
            <h1 className={style.logo}>DashStack</h1>
            <div className={style.linkList}>
                {
                    AsideArrData.map((el) => (
                        <Link style={location.pathname == el.link ?
                            { background: 'blue', color: "#fff", padding: '10px 20px' }
                            : { padding: '10px 20px' }} to={el.link}>{el.title}</Link>
                    ))
                }
            </div>
        </aside>
    )
}


export default Aside