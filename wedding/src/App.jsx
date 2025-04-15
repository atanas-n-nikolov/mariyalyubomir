import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const targetDate = new Date('2025-06-07T17:00:00');
    const [now, setNow] = useState(new Date());
    const [timeLeft, setTimeLeft] = useState({});
    const [isMainSectionVisible, setIsMainSectionVisible] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (isMainSectionVisible) {
        const height = window.innerHeight;
        document.documentElement.style.setProperty('--viewport-height', `${height}px`);
      }
    };

    window.addEventListener('resize', resizeHandler);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsMainSectionVisible(entry.intersectionRatio === 1);
    }, { threshold: 1 });

    const mainSection = document.querySelector('.main-section');
    if (mainSection) observer.observe(mainSection);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      observer.disconnect();
    };
  }, [isMainSectionVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            setNow(currentTime);
            const difference = targetDate - currentTime;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);
    return (
        <div className="wrapper">
            <section className="main-section" style={{ height: 'var(--viewport-height)' }}>
                <header>
                    <h2>Сватбата на</h2>
                    <h1>Мария и Любомир</h1>
                </header>
                <div className="timer">
                    <div className="section">
                        <p className="data">{timeLeft.days}</p>
                        <p className="time">дни</p>
                    </div>
                    <div className="section">
                        <p className="data">{timeLeft.hours}</p>
                        <p className="time">часа</p>
                    </div>
                    <div className="section">
                        <p className="data">{timeLeft.minutes}</p>
                        <p className="time">мин.</p>
                    </div>
                    <div className="section">
                        <p className="data">{timeLeft.seconds}</p>
                        <p className="time">сек.</p>
                    </div>
                </div>
                <h3 className="data">7 юни (събота) 2025 г.</h3>
                <div className="place-wrapper">
                    <div className="place">
                        <p>17:00ч.</p>
                        <p>Ресторант Алекзандър</p>
                    </div>
                    <div className="location">
                        <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40aa858885a28299:0xbe0e608a52b3ccca?sa=X&ved=1t:8290&ictx=111"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="/location-pin.svg" alt="Локация" />
                            <p>виж на картата</p>
                        </a>
                    </div>
                </div>
                <div className="flowers">
                    <img src="left.svg" alt="цветя ляво" />
                    <img src="right.svg" alt="цветя дясно" />
                </div>
            </section>
            <article>
                <div className="card">
                    <h4>Скъпи приятели,</h4>
                    <p>Решихме да отпразнуваме любовта си по най-добрия възможен начин - с едно голямо грандиозно парти!</p>
                    <p>Няма ритуали, няма подписване на документи, няма "по закон вече сте семейство"...<br />Просто празник, смях и хората, които обичаме!</p>
                    <p>На <strong>7 юни 2025</strong> ще си кажем най-съкровеното "Да" и ще започнем новото си приключение като семейство.</p>
                    <p>А <strong>Милена</strong> и <strong>Светослав</strong> заедно с нас се вълнуват, защото те ще ни кумуват!</p>
                    <p>Искаме да сме заедно с Вас в този специален ден, без формалности , а с истинска радост и споделени моменти!</p>
                </div>
                <img src="wood.svg" alt="декорация дърво" />
                <div className="card">
                    <p>Моля потвърдете присъствието си до 15.05.2025г, за да знаем колко чаши да напълним!</p>
                    <p>Учтиво Ви молим да оставите цветята в природата , където ще можем всички да им се радваме!</p>
                    <div className="hero">
                        <img src="test.jpg" alt="снимка младоженци" />
                    </div>
                    <h4>Очакваме Ви!</h4>
                </div>
            </article>
        </div>
    )
}

export default App;
