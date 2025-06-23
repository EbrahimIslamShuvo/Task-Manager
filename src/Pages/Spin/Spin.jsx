import React, { useRef, useState } from 'react';

const categories = [
    'Work',
    'Study',
    'Personal' // Capitalized for consistency
];

const colors = [
    '#60E5AE', '#E343E6', '#3B82F6'
];

const Spin = () => {
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);
    const [angle, setAngle] = useState(0);
    const [transition, setTransition] = useState('none');
    const wheelRef = useRef(null);

    const spinWheel = () => {
        if (spinning) return;
        setResult(null);
        setSpinning(true);
        setTransition('transform 3s cubic-bezier(0.33,1,0.68,1)');

        const selected = Math.floor(Math.random() * categories.length);
        const segmentAngle = 360 / categories.length;
        // Spins 3 full turns plus lands on the correct segment centered
        const randomSpin = 3 * 360 + (360 - selected * segmentAngle - segmentAngle / 2);
        setAngle(randomSpin);

        setTimeout(() => {
            setSpinning(false);
            setResult(categories[selected]);
            // Reset angle smoothly to keep it within 360 degrees
            setTimeout(() => {
                setTransition('none');
                setAngle(randomSpin % 360);
            }, 500);
        }, 3000);
    };

    return (
        <div className="bg-white relative w-10/12 mx-auto rounded-lg mt-12 p-10 shadow">
            <div className="">
                <div className="">
                    <h1 className='text-3xl font-semibold'>Spin</h1>
                </div>
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="relative w-64 h-64 mb-8">
                        <div
                            ref={wheelRef}
                            className="w-full h-full rounded-full border-4 border-red-500"
                            style={{
                                transition: transition,
                                transform: `rotate(${angle}deg)`
                            }}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 200 200">
                                {categories.map((cat, i) => {
                                    const startAngle = (360 / categories.length) * i;
                                    const endAngle = startAngle + 360 / categories.length;
                                    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                                    const x1 = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
                                    const y1 = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);
                                    const x2 = 100 + 100 * Math.cos((Math.PI * endAngle) / 180);
                                    const y2 = 100 + 100 * Math.sin((Math.PI * endAngle) / 180);
                                    const midAngle = startAngle + (360 / categories.length) / 2;
                                    const textX = 100 + 70 * Math.cos((Math.PI * midAngle) / 180);
                                    const textY = 100 + 70 * Math.sin((Math.PI * midAngle) / 180);

                                    return (
                                        <g key={cat}>
                                            <path
                                                d={`M100,100 L${x1},${y1} A100,100 0 ${largeArc} 1 ${x2},${y2} Z`}
                                                fill={colors[i % colors.length]}
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <text
                                                x={textX}
                                                y={textY}
                                                textAnchor="middle"
                                                alignmentBaseline="middle"
                                                fontSize="14"
                                                fill="#fff"
                                                transform={`rotate(${midAngle},${textX},${textY})`}
                                                style={{ userSelect: 'none' }}
                                            >
                                                {cat}
                                            </text>
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Pointer */}
                        <div
                            className="absolute top-30 -right-2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-500"
                            style={{ zIndex: 10, transform: 'translateX(50%) rotate(-90deg)' }}
                            aria-label="Pointer"
                            role="presentation"
                        />
                    </div>
                    <p className='mb-5 text-lg font-semibold'>Spin Wheel to pick your task</p>
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
                        onClick={spinWheel}
                        disabled={spinning}
                    >
                        {spinning ? 'Spinning...' : 'Spin'}
                    </button>

                    {result && (
                        <div className="mt-6 text-xl font-bold text-green-600 animate-bounce">
                            Result: {result}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Spin;
