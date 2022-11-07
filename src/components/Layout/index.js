// VINSTAHS version 1.0 - Layout Component 
import { Story } from '../Story';
import { Posts } from '../Posts';
import { Suggestion } from '../Suggestion';
import './style.css';

export function Layout() {
    return (
        <>
            <div className="layout_deskop">
                <div className="deskop_container">
                    <div class="deskop_center hidden">adas</div>
                    <div class="desktop_content deskop_center"><Posts /></div>
                    <div>
                        <div class="component_fixed box" id="STORY_DESKTOP"><Story /></div>
                        <div class="component_fixed" id="SUGGESTION"><Suggestion /></div>
                    </div>

                    <div class="component_fake"></div>
                    <div class="deskop_center hidden">adas</div>
                </div>
            </div>

            <div className="layout_responsive">
                <div class="content_flex">
                    <div className="content_respons box" id="STORY"><Story /></div>
                </div>
                <div class="content_flex">
                    <div className="content_respons"><Posts /></div>
                </div>
            </div>
        </>
    )
}