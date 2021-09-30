import bigSperm from '../../common/images/secondPage/bigSperm.png'
import mediumSperm from '../../common/images/secondPage/mediumSperm.png'
import smallSperm from '../../common/images/secondPage/smallSperm.png'
import smallSperm2 from '../../common/images/secondPage/smallSperm2.png'
import smallSperm3 from '../../common/images/secondPage/smallSperm3.png'
import './secondPage.css'

function secondPage(){
    return (
        <div>
            <img className='bigSperm' src={bigSperm} alt='big sperm'/>
            <img className='mediumSperm' src={mediumSperm} alt='medium sperm'/>
            <img className='smallSperm' src={smallSperm} alt='small sperm'/>
            <img className='smallSperm2' src={smallSperm2} alt='small sperm2'/>
            <img className='smallSperm3' src={smallSperm3} alt='small sperm3'/>
            <p className='title'>ТЕКСТ СООБЩЕНИЯ</p>
            <div className='bodyTxt'><div className='txt'>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. <p>В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. </p>Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32

Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</div></div>
        </div>
    )
}

export default secondPage;