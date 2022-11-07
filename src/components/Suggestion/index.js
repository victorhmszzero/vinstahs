/// VINSTAHS Suggestion Component version 1.0
import { IconContext } from 'react-icons/lib';
import { useEffect, useState } from 'react';
import './style.css';

export function Suggestion() {
    const [limitUsers] = useState(6);
    const [suggestsUsers, setUsers] = useState([]);
    const sliceUsers = suggestsUsers.slice(0, limitUsers);

    useEffect(() => {
        fetch(`https://api.github.com/users/victorhmszzero/followers`)
            .then((response) => {
                return response.json();
            }).then((result) => {
                setUsers(result);
            }).catch((err) => {
                throw new Error(err);
            });
    }, []);

    return (
        <>
            <div id="SUGGESTION">
                <IconContext.Provider value={{ size: "56px" }}>
                    <div className="suggestion_line">
                        <div className='suggestion_informations suggestion_profile'>
                            <img src="https://avatars.githubusercontent.com/u/110677740?v=4" />
                            <div>
                                <span>victor_vhms</span>
                                <p>Victor Hugo MS</p>
                            </div>
                        </div>
                        <button>Mudar</button>
                    </div>
                </IconContext.Provider >

                <div className="suggestion_line" id="BUTTON_SEE_ALL">
                    <div className='suggestion_informations'> <p>Sugestões para você</p></div>
                    <button>Ver todos</button>
                </div>

                {sliceUsers.map((suggestion, key) => (
                    <div className="suggestion_line" key={key}>
                        <div className='suggestion_informations suggestion_recomends'>
                            <img src={`http://github.com/${suggestion.login}.png`} />
                            <div>
                                <span>{suggestion.login}</span>
                                <p>Seguido por instituto.proa</p>
                            </div>
                        </div>
                        <button>Seguir</button>
                    </div>
                ))}
                
                <footer>
                    <p>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull; Locations &bull; Language</p>
                    <p>INSPIRED BY INSTAGRAM FROM META<br />&copy; 2022 VINSTAHS BY VICTORHMSZZERO</p>
                </footer>
            </div>
        </>
    );
}