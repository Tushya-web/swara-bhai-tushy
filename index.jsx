import React, { useState, useCallback, useEffect } from 'react';

// --- Utility SVGs and Assets ---

const StickFiguresSVG = ({ className = "w-24 h-auto" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Girl (Right) */}
    <circle cx="65" cy="20" r="8" fill="#FFC0CB"/> {/* Head */}
    <rect x="62" y="28" width="6" height="30" fill="#FF69B4" rx="2"/> {/* Dress/Body */}
    <line x1="65" y1="28" x2="65" y2="58" stroke="#FF69B4" strokeWidth="2"/> {/* Neckline line */}
    <line x1="65" y1="35" x2="55" y2="45" stroke="#FF69B4" strokeWidth="2"/> {/* Left Arm */}
    <line x1="65" y1="35" x2="75" y2="45" stroke="#FF69B4" strokeWidth="2"/> {/* Right Arm */}
    <line x1="62" y1="58" x2="57" y2="70" stroke="#FF69B4" strokeWidth="2"/> {/* Left Leg */}
    <line x1="68" y1="58" x2="73" y2="70" stroke="#FF69B4" strokeWidth="2"/> {/* Right Leg */}
    <path d="M60 20 Q 62 15, 65 18 L 68 18 Q 70 15, 75 20" stroke="#FF69B4" fill="none" strokeWidth="1.5"/> {/* Hairbow */}

    {/* Boy (Left) */}
    <circle cx="35" cy="20" r="8" fill="#FFC0CB"/> {/* Head */}
    <rect x="32" y="28" width="6" height="30" fill="#4682B4"/> {/* Body */}
    <rect x="30" y="58" width="4" height="15" fill="#4682B4"/> {/* Left Pant Leg */}
    <rect x="36" y="58" width="4" height="15" fill="#4682B4"/> {/* Right Pant Leg */}
    <line x1="35" y1="35" x2="25" y2="45" stroke="#4682B4" strokeWidth="2"/> {/* Left Arm */}
    <line x1="35" y1="35" x2="45" y2="45" stroke="#4682B4" strokeWidth="2"/> {/* Right Arm */}
    <line x1="32" y1="28" x2="38" y2="28" stroke="#FFFFFF" strokeWidth="2"/> {/* Shirt Collar */}
  </svg>
);

const DiyaSVG = ({ className = "w-24 h-auto" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 80 Q 50 70, 90 80 L 90 95 H 10 Z" fill="#A52A2A" stroke="#8B1A1A" strokeWidth="2"/>
    <path d="M15 80 Q 50 73, 85 80 L 85 85 H 15 Z" fill="#E5CC99"/>
    <rect x="47" y="65" width="6" height="10" rx="3" fill="#A52A2A"/>
    <path d="M50 65 Q 55 60, 60 50 Q 50 40, 40 50 Q 45 60, 50 65 Z" fill="#FF8C00" />
    <path d="M50 60 Q 53 55, 56 48 Q 50 43, 44 48 Q 47 55, 50 60 Z" fill="#FFD700" />
    <circle cx="50" cy="48" r="2" fill="#FF4500" />
  </svg>
);

const HelloKittySVG = ({ className = "w-32 h-auto" }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
        <circle cx="40" cy="40" r="3" fill="#000000"/> {/* Left Eye */}
        <circle cx="60" cy="40" r="3" fill="#000000"/> {/* Right Eye */}
        <path d="M50 50 L 53 50 M 50 50 L 47 50" stroke="#FF69B4" strokeWidth="3"/> {/* Nose (mocked as line) */}
        <path d="M25 25 L 30 10 L 35 25 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/> {/* Left Ear */}
        <path d="M65 25 L 70 10 L 75 25 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/> {/* Right Ear */}
        <circle cx="70" cy="20" r="5" fill="#FF0000"/> {/* Bow (Right Ear) */}
    </svg>
);

// Particle Component for confetti/sparkle effects
const Particle = ({ x, y, emoji, delay }) => (
    <div
        className="particle-item"
        style={{
            left: `${x}px`,
            top: `${y}px`,
            animation: `float-up 2s ease-out forwards`,
            animationDelay: `${delay}ms`,
        }}
    >
        {emoji}
    </div>
);

// Floating Text Animation
const FloatingText = ({ text, delay = 0 }) => (
    <span
        className="inline-block"
        style={{
            animation: `float-bounce 2s ease-in-out infinite`,
            animationDelay: `${delay}ms`,
            display: 'inline-block',
        }}
    >
        {text}
    </span>
);

// --- Page Components ---

// Page 1: Main Greeting with animations
const Page1 = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate initial particles
        // This is necessary because window.innerWidth/Height is only available on mount
        const newParticles = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            emoji: ['🎀', '💕', '🌸', '✨', '💖'][Math.floor(Math.random() * 5)],
            delay: i * 100,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="text-center p-8 relative overflow-hidden">
            {/* Animated background particles */}
            {particles.map(p => (
                <Particle key={p.id} {...p} />
            ))}

            <div className="fade-in-down" style={{ animationDelay: '0.3s' }}>
                <p className="text-xl text-pink-500 font-semibold tracking-widest uppercase animate-pulse">
                    FOR MY LOVELY
                </p>
                <h2 className="text-6xl md:text-8xl font-serif font-extrabold text-pink-400 mb-4 tracking-tight animate-slide-in-left">
                    SISTER <span className="text-red-500 animate-bounce-emoji">♦</span>
                </h2>
                <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight animate-slide-in-right">
                    Happy <span className="text-pink-400 font-serif glow-text">Bhai Dooj</span> From Tushy
                    <br/>
                    DEAR SIS
                </h1>
            </div>

            <p className="max-w-md mx-auto mt-6 text-gray-600 fade-in-up" style={{ animationDelay: '0.6s' }}>
                You've always been my biggest supporter, my secret keeper, and my forever partner-in-crime.
                <br />
                <span className="text-amber-500 animate-spin-slow">🪔</span> On this <span className="font-bold text-pink-500">Bhai Dooj</span>, I just want to know how lucky I am to have you as my sister.
            </p>
            
            <div className="mt-8 flex justify-center fade-in-up" style={{ animationDelay: '0.9s' }}>
                <div className="animate-bounce-scale">
                    <StickFiguresSVG className="w-24 h-auto shadow-lg rounded-lg border-4 border-white hover:scale-110 transition-transform duration-300"/>
                </div>
            </div>
        </div>
    );
};

// Page 2: Letter with animations
const Page2 = () => {
    const [showHeart, setShowHeart] = useState(false);

    useEffect(() => {
        setShowHeart(true);
    }, []);

    return (
        <div className="relative p-8">
            <h2 className="text-xs tracking-widest text-gray-500 text-center uppercase mb-1 fade-in animate-pulse">
                A LETTER
            </h2>
            <h1 className="text-4xl font-serif font-extrabold text-pink-400 text-center mb-6 animate-slide-in-down">
                FROM YOUR BHAI <span className="text-red-500 animate-bounce-emoji">♦</span>
            </h1>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-pink-100 relative scale-in">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-300 rounded-full animate-float opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-red-300 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>

                <h3 className="text-2xl font-serif text-red-500 mb-4 fade-in-up">
                    Dear <span className="glow-text">Swara</span> <span className="text-red-400 animate-pulse">💕</span>
                </h3>

                <p className="text-gray-700 leading-relaxed indent-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    I just want to remind you how special you are to me. May your life shine as bright as your smile, and may chocolates always find their way to you <span className="animate-spin-emoji">✨</span>.
                </p>

                <p className="mt-8 text-right text-lg text-gray-800 font-semibold fade-in-up" style={{ animationDelay: '0.6s' }}>
                    — With love, your brother <span className="text-pink-500 animate-heartbeat">💖</span>
                </p>

                <div className={`absolute top-10 right-0 w-20 h-20 transition-all duration-500 ${showHeart ? 'animate-bounce-in-scale' : ''}`}>
                    <div className="w-full h-full bg-yellow-300 rounded-full shadow-lg transform rotate-6 flex items-center justify-center">
                        <span className="text-5xl animate-bounce">🧒</span>
                    </div>
                </div>

                <div className="absolute bottom-10 left-10 w-16 h-16 animate-spin-slow">
                    <div className="w-16 h-16 rounded-full border-4 border-red-400 border-dashed flex items-center justify-center bg-white/50 transform">
                        <span className="text-red-500 text-xl animate-heartbeat">❤️</span>
                    </div>
                </div>
            </div>
            {/* To match the image more closely: */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-24 h-auto">
                <HelloKittySVG className="w-full h-auto"/>
            </div>
        </div>
    );
};

// Page 3: Memory Carousel with animations
const Page3 = () => {
    const [activeImage, setActiveImage] = useState(0);
    const memories = [
        { emoji: '😊', text: 'Best Sister Ever' },
        { emoji: '🎉', text: 'Always Together' },
        { emoji: '💫', text: 'Forever Friends' },
    ];

    const handleNext = () => setActiveImage((prev) => (prev + 1) % memories.length);
    const handlePrev = () => setActiveImage((prev) => (prev - 1 + memories.length) % memories.length);

    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-serif font-extrabold text-pink-500 mb-8 fade-in-down">
                Our Precious Memories <span className="text-gray-600 animate-spin-emoji">📸</span>
            </h1>

            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-2xl border border-pink-100 relative scale-in">
                <p className="text-sm flex justify-between text-gray-600 mb-4 fade-in-up">
                    <span className="font-semibold text-gray-800 animate-pulse">FROM: Bhai 💫</span>
                    <span className="text-red-500 animate-pulse">TO: My Lovely Sister 💖</span>
                </p>

                <div className="relative flex justify-center items-center h-80 overflow-hidden border border-gray-200 rounded-lg bg-gradient-to-br from-pink-50 to-red-50">
                    <div className="fade-carousel" key={activeImage}>
                        <div className="flex flex-col items-center justify-center h-full">
                            <span className="text-7xl animate-bounce-scale">{memories[activeImage].emoji}</span>
                            <span className="mt-4 text-2xl font-bold text-red-500 glow-text animate-float">
                                {memories[activeImage].text}
                            </span>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 text-4xl text-pink-300 hover:text-pink-500 transition-all duration-200 hover:scale-125 active:scale-90"
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 text-4xl text-pink-300 hover:text-pink-500 transition-all duration-200 hover:scale-125 active:scale-90"
                    >
                        {">"}
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 flex gap-2">
                        {memories.map((_, i) => (
                            <div
                                key={i}
                                className={`transition-all duration-300 rounded-full ${
                                    i === activeImage ? 'w-3 h-3 bg-pink-500' : 'w-2 h-2 bg-pink-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-sm flex justify-between text-gray-500 mt-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <span className="font-medium">DATE: Bhai Dooj | VALID FOR: Forever ✨</span>
                    <span className="text-pink-500 font-semibold">With love, your brother 💖</span>
                </p>
            </div>
        </div>
    );
};

// Page 4: Tic-Tac-Toe Game with enhanced animations
const Page4 = () => {
    const initialBoard = ['X', 'X', 'X', 'X', null, 'X', 'X', 'X', 'X'];
    const [board, setBoard] = useState(initialBoard);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [particles, setParticles] = useState([]);

    const handleCellClick = useCallback((index) => {
        if (isUnlocked) return;

        if (index === 4) {
            setIsUnlocked(true);
            setBoard(prev => prev.map((val, i) => i === 4 ? '🍫' : val));
            
            // Create particle burst
            const newParticles = Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                emoji: ['🍫', '🎉', '✨', '💝'][Math.floor(Math.random() * 4)],
                delay: i * 30,
            }));
            setParticles(newParticles);
        }
    }, [isUnlocked]);

    return (
        <div className="text-center p-8 relative overflow-hidden">
            <h1 className="text-4xl font-serif font-extrabold text-pink-500 mb-8 fade-in-down">
                Fill in the blanks to get a chocolate <span className="text-red-500 animate-spin-emoji">🍫</span>
            </h1>

            <div className="relative max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-2xl border border-pink-100 scale-in">
                
                {/* Tic-Tac-Toe Grid */}
                <div className="grid grid-cols-3 gap-3">
                    {board.map((cell, index) => (
                        <button
                            key={index}
                            onClick={() => handleCellClick(index)}
                            disabled={cell !== null || isUnlocked}
                            className={`
                                w-full h-20 text-4xl font-black rounded-lg transition-all duration-200 
                                ${cell === 'X' ? 'bg-pink-100 text-pink-400 animate-pulse' : ''}
                                ${cell === '🍫' ? 'bg-green-100 text-6xl shadow-xl animate-bounce-scale' : ''}
                                ${cell === null && !isUnlocked ? 'bg-white border border-pink-200 hover:bg-pink-50 cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'}
                                flex items-center justify-center
                            `}
                            style={{ opacity: cell === 'X' ? 0.7 : 1 }}
                        >
                            {cell === 'X' ? (
                                <span className="animate-bounce">🍫</span>
                            ) : (
                                cell
                            )}
                        </button>
                    ))}
                </div>

                {/* Particle Burst */}
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle-burst"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
                            animation: `burst-out 1s ease-out forwards`,
                            animationDelay: `${p.delay}ms`,
                        }}
                    >
                        {p.emoji}
                    </div>
                ))}

                {/* Success Pop-up/Overlay */}
                {isUnlocked && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
                        <div className="pop-success">
                            <h2 className="text-3xl font-serif font-extrabold text-pink-500 mb-2 animate-bounce-text">
                                You successfully unlocked a chocolate
                            </h2>
                            <p className="text-2xl font-bold text-red-500 animate-bounce">treat, yay! 🍫</p>
                            <div className="mt-6 text-6xl animate-spin-emoji">🎉</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Page 5: Music Player with animations
const Page5 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [status, setStatus] = useState("PAUSED");
    const [progress, setProgress] = useState(0);

    const handlePlayPause = () => {
        const newStatus = !isPlaying;
        setIsPlaying(newStatus);
        setStatus(newStatus ? "PLAYING" : "PAUSED");

        if (newStatus) {
            const interval = setInterval(() => setProgress(p => (p < 27 ? p + 1 : 0)), 1000);
            setTimeout(() => { 
                clearInterval(interval); 
                setProgress(0); 
                setStatus("PAUSED"); 
                setIsPlaying(false); 
            }, 27000);
            return () => clearInterval(interval);
        }
    };

    const handleSkip = (forward) => {
        setStatus(forward ? "⏭️ Skipped Forward" : "⏮️ Skipped Back");
        setTimeout(() => setStatus(isPlaying ? "PLAYING" : "PAUSED"), 800);
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-serif font-extrabold text-pink-500 mb-8 flex items-center justify-center fade-in-down">
                A Few Songs For You <span className="text-red-400 ml-2 animate-heartbeat">💖</span>
            </h1>

            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-pink-100 scale-in relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-float"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-red-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="relative w-40 h-40 mx-auto rounded-xl shadow-lg border-4 border-white overflow-hidden bg-pink-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <div className={`${isPlaying ? 'animate-bounce-scale' : ''}`}>
                        <StickFiguresSVG className="w-full h-full p-4"/>
                    </div>
                    {isPlaying && (
                        <>
                            <div className="absolute inset-0 border-4 border-pink-400 rounded-xl animate-pulse"></div>
                            <div className="absolute inset-2 border-2 border-pink-300 rounded-lg animate-spin-slow"></div>
                        </>
                    )}
                </div>

                <div className="mt-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <p className={`text-xs tracking-widest ${isPlaying ? 'text-green-500 animate-pulse' : 'text-gray-600'} uppercase font-bold`}>
                        {status}
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 glow-text">Ashiyan</h3>
                </div>

                {/* Mock Progress Bar */}
                <div className="mt-6 flex items-center space-x-2 fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <p className="text-sm text-gray-600">0:{String(progress).padStart(2, '0')}</p>
                    <div className="flex-grow h-2 bg-pink-200 rounded-lg overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-pink-400 to-red-400 rounded-lg transition-all duration-100"
                            style={{ width: `${(progress / 27) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600">0:27</p>
                </div>

                {/* Controls */}
                <div className="mt-8 flex justify-center space-x-6 fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <button onClick={() => handleSkip(false)} className="text-pink-400 hover:text-pink-600 transition-all duration-200 hover:scale-125 active:scale-95 disabled:opacity-50" disabled={!isPlaying}>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6H8V18H6ZM9.5 12L18 18V6L9.5 12Z" /></svg>
                    </button>
                    <button 
                        onClick={handlePlayPause} 
                        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${isPlaying ? 'bg-gradient-to-br from-pink-600 to-red-600 text-white' : 'bg-gradient-to-br from-pink-400 to-pink-500 text-white'}`}
                    >
                        {isPlaying ? (
                             <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19H8V5H6V19ZM16 5V19H18V5H16Z" /></svg>
                        ) : (
                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5V19L19 12L8 5Z" /></svg>
                        )}
                    </button>
                    <button onClick={() => handleSkip(true)} className="text-pink-400 hover:text-pink-600 transition-all duration-200 hover:scale-125 active:scale-95 disabled:opacity-50" disabled={!isPlaying}>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 18V6H18V18H16ZM6 6V18L14.5 12L6 6Z" /></svg>
                    </button>
                </div>

                <small className="mt-4 block text-xs text-gray-500 fade-in-up" style={{ animationDelay: '0.9s' }}>
                    Note: Audio source is a placeholder and must be replaced in a real deployment.
                </small>
            </div>
        </div>
    );
};

// Page 6: Thank You with celebration animations
const Page6 = () => {
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
        // Initialize confetti only when the component mounts
        const newConfetti = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: -10,
            emoji: ['🎊', '🎉', '💖', '✨', '🌸'][Math.floor(Math.random() * 5)],
            delay: i * 80,
        }));
        setConfetti(newConfetti);
    }, []);

    return (
        <div className="text-center p-8 relative overflow-hidden">
            {/* Confetti Animation */}
            {confetti.map(c => (
                <div
                    key={c.id}
                    className="confetti-item"
                    style={{
                        left: `${c.x}px`,
                        animation: `fall-down 3s ease-in forwards`,
                        animationDelay: `${c.delay}ms`,
                    }}
                >
                    {c.emoji}
                </div>
            ))}

            <h2 className="text-md tracking-widest text-gray-500 uppercase font-semibold mb-2 fade-in-down">
                ♦ FROM YOUR BHAI, WITH LOVE FROM TUSHYA ♦
            </h2>
            <h1 className="text-7xl font-serif font-extrabold text-pink-500 mb-4 glow-text fade-in-down" style={{ animationDelay: '0.3s' }}>
                Thank <span className="animate-bounce-scale">You</span>
            </h1>
            <h2 className="text-3xl font-black text-gray-800 mb-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
                FOR ALWAYS BEING THERE
            </h2>

            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-pink-100 relative scale-in">
                <div className="absolute -top-8 -right-8 text-6xl animate-spin-emoji">🎀</div>
                <div className="absolute -bottom-8 -left-8 text-6xl animate-spin-emoji" style={{ animationDelay: '1s' }}>💫</div>

                <p className="text-gray-700 leading-relaxed max-w-xs mx-auto fade-in-up">
                    You make every small thing brighter and I'm lucky to have you — thanks for being the sweetest part of my days. <span className="text-red-500 animate-bounce">🥳</span>
                </p>
                <p className="mt-4 text-sm text-gray-600 italic fade-in-up" style={{ animationDelay: '0.3s' }}>
                    made with <span className="text-pink-500 animate-heartbeat">💖</span>, chocolates & sparkles — always yours.
                </p>

                <div className="mt-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="inline-block animate-bounce-scale">
                        <HelloKittySVG className="w-32 h-auto transform hover:rotate-12 transition-transform duration-300"/>
                    </div>
                </div>

                <div className="mt-8 text-6xl font-serif font-bold text-yellow-600 opacity-30 animate-float">
                    Thank You
                </div>
            </div>
        </div>
    );
};

// --- Main Application Component ---

export default function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const totalPages = 6;

    const handleNext = () => setPageIndex(prev => Math.min(prev + 1, totalPages - 1));
    const handleBack = () => setPageIndex(prev => Math.max(prev - 1, 0)); // Completed function definition

    // Array of all page components for easy rendering
    const Pages = [Page1, Page2, Page3, Page4, Page5, Page6];
    const CurrentPage = Pages[pageIndex];

    return (
        <div className="min-h-screen flex flex-col font-sans antialiased text-gray-800 bg-pink-50/50"
             style={{ backgroundColor: '#fff7ed', fontFamily: 'Inter, sans-serif' }}>
            
            <main className="flex-grow flex items-center justify-center p-4 md:p-8">
                {/* Wrapping component with key forces remounting, enabling the page-transition animation */}
                <div key={pageIndex} className="w-full max-w-6xl page-transition">
                    <CurrentPage />
                </div>
            </main>

            {/* Navigation Controls */}
            <footer className="p-4 md:p-6 flex justify-between items-center w-full max-w-4xl mx-auto">
                <button
                    onClick={handleBack}
                    disabled={pageIndex === 0}
                    className={`
                        flex items-center space-x-2 px-4 py-2 rounded-full transition duration-300 active:scale-95
                        ${pageIndex === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}
                    `}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    <span>← Back</span>
                </button>

                <p className="text-sm text-gray-500">
                    Page {pageIndex + 1} of {totalPages}
                </p>

                <button
                    onClick={handleNext}
                    disabled={pageIndex === totalPages - 1}
                    className={`
                        flex items-center space-x-2 px-4 py-2 rounded-full transition duration-300 active:scale-95
                        ${pageIndex === totalPages - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'}
                    `}
                >
                    <span>Next →</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </footer>

            {/* Custom Keyframes and Global Styles */}
            <style>{`
                /* Page Transition Animation */
                @keyframes page-transition-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .page-transition {
                    animation: page-transition-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                
                /* Pop-up Success Animation */
                .pop-success {
                    text-align: center;
                    padding: 2rem;
                    background: white;
                    border-radius: 1rem;
                    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
                    border: 4px solid #f9a8d4;
                    transform: scale(0.95);
                    animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    max-width: 90%;
                }

                /* Font simulation for the elegant titles */
                .font-serif {
                    font-family: 'Georgia', 'Times New Roman', serif;
                }

                /* Custom Keyframes for Game Success Pop-up */
                @keyframes bounce-in {
                    0% { transform: scale(0.5); opacity: 0; }
                    80% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); }
                }
                .animate-bounce-in {
                    animation: bounce-in 0.3s forwards;
                }
                /* Existing and other animations */
                @keyframes float-up { 0% { opacity: 0; transform: translateY(0) rotate(0deg); } 100% { opacity: 0.8; transform: translateY(-300px) rotate(360deg); } }
                .particle-item { position: absolute; font-size: 1.5rem; pointer-events: none; }
                
                @keyframes burst-out { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(2) translateY(-50px); } }
                .particle-burst { position: absolute; font-size: 2rem; pointer-events: none; }

                @keyframes fall-down { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(500px) rotate(360deg); opacity: 0; } }
                .confetti-item { position: absolute; font-size: 2rem; pointer-events: none; }

                /* Mobile-specific adjustments (max-width: 768px - Tailwind's 'md' breakpoint) */
                @media (max-width: 768px) {
                    /* Adjust large title sizes on Page 1 (Greeting) */
                    .page-transition > div:nth-child(1) h2 { /* Targeting SISTER */
                        font-size: 4rem; 
                    }
                    .page-transition > div:nth-child(1) h1 { /* Targeting Happy DEAR SIS */
                        font-size: 2.5rem; 
                    }

                    /* Adjust title size on Page 6 (Thank You) */
                    .page-transition > div:nth-child(6) h1 { /* Targeting Thank You Title */
                        font-size: 4rem; 
                    }
                    .page-transition > div:nth-child(6) h2 { /* Targeting FOR ALWAYS BEING THERE */
                        font-size: 1.5rem; 
                    }

                    /* Adjust pop-up text sizes on Page 4 */
                    .pop-success h2 {
                        font-size: 1.5rem; 
                    }
                    .pop-success p {
                        font-size: 1.25rem; 
                    }
                }

            `}</style>
        </div>
    );
}
