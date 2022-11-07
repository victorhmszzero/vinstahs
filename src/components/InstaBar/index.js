// VINSTAHS version 1.0 - SideBar Component 
import { GoThreeBars } from 'react-icons/go';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BsChat, BsHeart, BsPlusSquare } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import VinstaHs from './images/Vinstahs_icon.svg';
import Vinstahs_logo from './images/Vinstahs_logo.svg';
import './style.css'

export function InstaBar() {
    return (
        <>
            <header className="sidebar">
                <div className="bar_content">
                    <div className="logo_container">
                        <a href="#"className="logo_item">
                            <img src={VinstaHs} className="logo_vector" alt="logo"draggable="false" />
                            <img src={Vinstahs_logo} className="logo_vector" id="LOGOTYPE" alt="logo" />
                        </a>
                    </div>
                    <IconContext.Provider value={{ size: "24px" }}>
                        <ul className="button_container">
                            <ul>
                                <li className="icon_button">
                                    <AiFillHome />
                                    <span>Inicio</span>
                                </li>
                                <li className="icon_button">
                                    <AiOutlineSearch />
                                    <p>Pesquisar</p>
                                </li>
                                <li className="icon_button">
                                    <BsChat />
                                    <p>Mensagens</p>
                                </li>
                                <li className="icon_button">
                                    <BsHeart />
                                    <p>Notificações</p>
                                </li>
                                <li className="icon_button">
                                    <BsPlusSquare />
                                    <p>Publicação</p>
                                </li>
                                <li className="icon_button">
                                    <img src="https://avatars.githubusercontent.com/u/110677740?v=4" />
                                    <p>Perfil</p>
                                </li>
                            </ul>
                            <li className="icon_button">
                                <GoThreeBars />
                                <p>Mais Opções</p>
                            </li>
                        </ul>
                    </IconContext.Provider>
                </div>
            </header>
        </>
    );
};