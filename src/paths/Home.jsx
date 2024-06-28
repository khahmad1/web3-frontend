import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Home(){
    return(<>
        <Navbar/>
        <article className="section">
            <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur accumsan felis, vitae rutrum lectus vestibulum sed. Aenean tincidunt, sapien tincidunt commodo molestie, enim lectus varius purus, ac convallis leo massa non mi. Nullam at pulvinar orci. Etiam in consequat mauris. Proin nec dapibus lacus. Suspendisse facilisis, ipsum vitae ultrices viverra, arcu elit tristique ipsum, ut faucibus turpis est in risus. Praesent fermentum, risus sed convallis congue, augue elit porta quam, a sollicitudin quam neque sit amet lacus. Praesent sodales, tortor non sagittis posuere, est felis sollicitudin diam, vitae congue turpis dui eu ligula. In lacus libero, consectetur a sem ac, consequat tristique nisl. Nulla augue nulla, tempor non felis sit amet, consequat mattis dolor. In sem augue, semper vitae vehicula vitae, tincidunt in libero. Sed purus odio, pretium quis nisi at, vestibulum interdum orci. 
            </p>
            <Link to="/about">Learn more</Link>
        </article>
    </>)
}