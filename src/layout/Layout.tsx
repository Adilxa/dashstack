import Aside from '../components/Aside/Aside';
import style from './layou.module.css';

interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className={style.wrapper}>
            <Aside />
            <div className={style.content}>
                <header>
                    dsadsa
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout