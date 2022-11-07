

import PetLove_icon from './images/Vector.svg';
import linkedin from './images/Linkedin.png';
import instagram from './images/instagram.png';
import gitHub from './images/GitHub.png';

import './style.css'
export function Footer() {
    return (
        <>
            <div className="footer just_flex">
                <div className="footer">
                    <img id="pet_logo" src={PetLove_icon} alt="AD" />
                    <div className='footer_link'>
                        <span>Inicio</span>
                        <p>Cadastra-se</p>
                        <p>Login</p>
                        <p>Adoções</p>
                        <p>Solicitar resgatador</p>
                    </div>
                    <div className='footer_link'>
                        <span>Sobre nós</span>
                        <p>Quem somos</p>
                        <p>Empresas</p>
                        <p>Parceiros</p>
                    </div>
                    <div className='footer_link'>
                        <span>Contatos</span>
                        <p>56435-34431</p>
                        <p>(11) 9345-5641</p>
                        <p>amiMais@gmail.com.br</p>

                    </div>
                </div>
                <div className="social_rede">
                    <img className="social_rede" src={linkedin} alt="ADa" />
                    <img className="social_rede" src={instagram} alt="ADaa" />
                    <img className="social_rede" src={gitHub} alt="ADaaa" />
                </div>

            </div>
            <div className="footerBottom">
                <p>Todos direitos reservados © 2022</p>
            </div>

        </>
    )
}