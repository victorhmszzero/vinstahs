// VINSTAHS version 1.0 - Posts Component 
import { FiSend } from 'react-icons/fi';
import { SlOptions } from 'react-icons/sl';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

import { useState } from 'react';
import './style.css';

export function Posts() {
    return (
        <>
            <Post title={p1_title} profile={p1_profile} image={p1_image} details={p1_details} likes={p1_likes} time={p1_time} border="story_border" />
            <Post title={p2_title} profile={p2_profile} image={p2_image} details={p2_details} likes={p2_likes} time={p2_time} border="story_border" />
            <Post title={p4_title} profile={p4_profile} image={p4_image} details={p4_details} likes={p4_likes} time={p4_time} />
            <Post title={p5_title} profile={p5_profile} image={p5_image} details={p5_details} likes={p5_likes} time={p5_time} border="story_border" />
            <Post title={p3_title} profile={p3_profile} image={p3_image} details={p3_details} likes={p3_likes} time={p3_time}  />
            <Post title={p6_title} profile={p6_profile} image={p6_image} details={p6_details} likes={p6_likes} time={p6_time} />
        </>
    );
}

const Post = ({ title, profile, image, details, likes, time, border = "simple_border" }) => {

    const [like_state, like_change] = useState("Unliked");
    const like_fuction = () => {
        like_change(!like_state);
    };

    var like_icon;
    if (like_state) {
        like_icon = <AiOutlineHeart />;
    } else {
        like_icon = <AiFillHeart />;
    };

    return (
        <>
            <div id="POST" >
                <header>
                    <div className="post_title">
                        <div className={border}><img src={profile} /></div>
                        <span>{title}</span>
                    </div>
                    <SlOptions className="post_icon options_icon"/>
                </header>                
                <img className="post_img" src={image} />
                <div className="post_details">
                    <section className="post_buttons">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <div>
                                <div className={like_state ? "unliked" : "liked"}>
                                    <button className="post_icon" onClick={like_fuction}>{like_icon}</button>
                                </div>
                                <div className="post_icon"><BsChat /></div>
                                <div className="post_icon"><FiSend /></div>
                            </div>
                            <BsBookmark />
                        </IconContext.Provider>
                    </section>
                    <span className="post_info_likes">{likes}</span>
                    <div className="post_description"><p>{details}</p></div>
                    <div className="post_time"><time>{time}</time></div>
                    <div className="post_coment">
                        <div>
                            <IconContext.Provider value={{ size: "20px" }}>
                                <div className="post_icon"><BsEmojiSmile /></div>
                                <input placeholder="Adicione um comentario." />
                            </IconContext.Provider>
                        </div>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Posts Informations
const p1_title = "instituto.proa";
const p2_title = "amimais_oficial";
const p4_title = "gabs.lindo";
const p5_title = "hope_of_chaos";
const p3_title = "team_cherry_games";
const p6_title = "vigorzzerotm_arts";

const p1_profile = "https://cdn.discordapp.com/attachments/773372240686350356/1028772480141234186/logo_instituto_proa.jpg";
const p2_profile = "https://avatars.githubusercontent.com/u/117034172?v=4";
const p3_profile = "https://pbs.twimg.com/profile_images/511835367960367104/ZCN36RZ8_400x400.png";
const p4_profile = "https://avatars.githubusercontent.com/u/33496735?v=4";
const p5_profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1038956348630642688/image.png";
const p6_profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1038958096229339167/unknown.png";

const p1_image = "https://cdn.discordapp.com/attachments/1026668645033709692/1038855435966484490/image.png";
const p2_image = "https://media.discordapp.net/attachments/1026668645033709692/1038856973564772352/image.png?width=559&height=559";
const p3_image = "https://cdn.discordapp.com/attachments/1026668645033709692/1038990539896410232/OffbeatWhirlwindBaleenwhale-mobile.gif";
const p4_image = "https://media-exp1.licdn.com/dms/image/D4D2DAQE34R_AroCFcQ/profile-treasury-image-shrink_800_800/0/1664121991001?e=1668380400&v=beta&t=3BzIY18FwZ-ZxLRivDAHf9zUvUYpFDix73JUttMIKSQ";
const p5_image = "https://cdn.discordapp.com/attachments/1026668645033709692/1038948858748735588/Hope.png";
const p6_image = "https://cdn.discordapp.com/attachments/1026668645033709692/1038950770835464213/image.png";

const p1_likes = "1587 curtidas";
const p2_likes = "61 curtidas";
const p3_likes = "750 curtidas";
const p4_likes = "601 curtidas";
const p5_likes = "42 curtidas";
const p6_likes = "520 curtidas";

const p1_time = "Há 1 hora";
const p2_time = "Há 11 horas";
const p4_time = "Há 2 meses";
const p5_time = "Há 28 dias";
const p3_time = "Há 11 meses";
const p6_time = "Há 2 anos";

const p1_details = <><span>instituto.proa</span> Desenvolva novas habilidades e conquiste seu primeiro emprego! 💼🥇</>;
const p2_details = <><span>amimais_oficial</span> Sejam bem-vindos ao instagram do AmiMais 🧡</>;
const p4_details = <><span>carmosz_</span> É muito bom saber que além de professor, sairei do proa com um amigo pra vida ❤️</>;
const p5_details = <><span>aronf.r</span> Foi incrível fazer parte deste projeto contigo e com todos os outros membros do grupo, tu manja muito Victor!</>;
const p3_details = <><span>HK_Silksong</span> Silksong is a cruel lie, and all Hollow Knight players must cry</>;
const p6_details = <><span>linkgame.com.co</span> 😃🙌</>;