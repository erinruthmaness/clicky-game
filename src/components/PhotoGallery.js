import img1 from "../images/$abba1$.jpg";
import img2 from "../images/$abba2$.jpg";
import img3 from "../images/$abba3$.jpg";
import img4 from "../images/$abba4$.jpg";
import img5 from "../images/$abba5$.jpg";
import img6 from "../images/$abba6$.jpg";
import img7 from "../images/$abba7$.jpg";
import img8 from "../images/$abba8$.jpg";
import img9 from "../images/$abba9$.jpg";
import img10 from "../images/$abba10$.jpg";
import img11 from "../images/$abba11$.jpg";
import img12 from "../images/$abba12$.jpg";
import img13 from "../images/$abba13$.jpg";
import img14 from "../images/$abba14$.jpg";
import img15 from "../images/$abba15$.jpg";
import img16 from "../images/$abba16$.jpg";

const photoGallery = {
    imgArray: [img1, img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img11, img12, img13, img14, img15, img16],
    shuffleArray: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}


export default photoGallery;
