import virus7 from '../../common/images/firstPage/virus7.png';
import virus5 from '../../common/images/firstPage/virus5.png';
import virus4 from '../../common/images/firstPage/virus4.png';
import pinkSperm1 from '../../common/images/firstPage/pink_sperm_1.png';
import pinkSperm2 from '../../common/images/firstPage/pink_sperm_2.png';
import bakti1 from '../../common/images/firstPage/bakti_1.png';
import virus8 from '../../common/images/firstPage/virus8.png';
import virus4Copy from '../../common/images/firstPage/virus4copy.png';
import virus4Copy2 from '../../common/images/firstPage/virus4copy2.png';
import btnNext from '../../common/images/firstPage/btn.png';
import textContent from '../../common/images/firstPage/txt.png';
import './firstPage.css';

function FirstPage(){
    return (
        <div>
            <img className='virus7' src={virus7} alt='virus 7'/>
            <img className='virus5' src={virus5} alt='virus 5'/>
            <img className='virus4' src={virus4} alt='virus 4'/>
            <img className='pinkSperm1' src={pinkSperm1} alt='pink sperm 1'/>
            <img className='bakti1' src={bakti1} alt='bacteria'/>
            <img className='pinkSperm2' src={pinkSperm2} alt='pink sperm 2'/>
            <img className='virus8' src={virus8} alt='virus 8'/>
            <img className='virus4Copy' src={virus4Copy} alt='virus 4 copy'/>
            <img className='virus4Copy2' src={virus4Copy2} alt='virus 4 copy 2'/>
            <img className='textContent' src={textContent} alt='text of content'/>
            <img className='btnNext' src={btnNext} alt='button to go next'/>
        </div>
    )
}

export default FirstPage;