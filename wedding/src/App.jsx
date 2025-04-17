import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lazy } from 'react';
import './App.css';

function App() {
    const targetDate = new Date('2025-06-07T17:00:00');
    const [now, setNow] = useState(new Date());
    const [timeLeft, setTimeLeft] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);
    return (
        <div className="wrapper">
            <section className="main-section">
                <motion.header
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2>Сватбата на</h2>
                    <h1>Мария и Любомир</h1>
                </motion.header>

                {isLoading ? (
                    <div className="loader-wrapper">
                        <motion.div
                            className="loader-circle"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                        <p>Зареждане...</p>
                    </div>
                ) : (
                    <motion.div
                        className="timer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
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
                    </motion.div>
                )}

                <motion.h3
                    className="data"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                    7 юни (събота) 2025 г.
                </motion.h3>

                <motion.div
                    className="place-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                    <div className="place">
                        <p>17:00ч.</p>
                        <p>Ресторант Алекзандър</p>
                    </div>
                    <div className="location">
                        <a
                            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40aa858885a28299:0xbe0e608a52b3ccca?sa=X&ved=1t:8290&ictx=111"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/location-pin.svg" alt="Локация" />
                            <p>виж на картата</p>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="flowers"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                    <img className="left" src="left.svg" alt="цветя ляво" />
                    <img className="right" src="right.svg" alt="цветя дясно" />
                </motion.div>
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
                <img src="wood.svg" alt="декорация дърво" loading="lazy" />
                <div className="card">
                    <p>Моля потвърдете присъствието си до 15.05.2025г, за да знаем колко чаши да напълним!</p>
                    <p>Учтиво Ви молим да оставите цветята в природата , където ще можем всички да им се радваме!</p>
                    <div className="hero">
                        <img
                            src="test.jpg"
                            alt="снимка младоженци"
                            width="600"
                            height="400"
                            importance="high"
                            loading="lazy"
                        />
                    </div>
                    <h4>Очакваме Ви!</h4>
                </div>
            </article>
        </div>
    )
}

export default App;
