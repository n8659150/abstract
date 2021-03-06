import absPagination from './absPagination'
import brickArticle from './brickArticle'
import brickAudio from './brickAudio'
import brickGallery from './brickGallery'
import brickLink from './brickLink'
import brickQuote from './brickQuote'
import brickSlide from './brickSlide'
import brickSlider from './brickSlider'
import brickVideo from './brickVideo'
import commentList from './commentList'
import replyBox from './replyBox'
const abstractUI = {
    install: function (Vue) {
        Vue.component('absPagination', absPagination);
        Vue.component('brickArticle', brickArticle);
        Vue.component('brickAudio', brickAudio);
        Vue.component('brickGallery', brickGallery);
        Vue.component('brickLink', brickLink);
        Vue.component('brickQuote', brickQuote);
        Vue.component('brickSlide', brickSlide);
        Vue.component('brickSlider', brickSlider);
        Vue.component('brickVideo', brickVideo);
        Vue.component('commentList', commentList);
        Vue.component('replyBox', replyBox);
    }
};

export default abstractUI