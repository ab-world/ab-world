'use client';

import { useEffect, useRef } from 'react';

const CanvasArea = ({ contexts, backgrund = '#F4F4F4' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const font = `${contexts.fontSize}px ${contexts.fontFamily}`;
        const text = contexts.text;

        ctx.font = font;
        const textWidth = ctx.measureText(text).width;
        const textheight = contexts.fontSize * 1.5;

        canvas.width = textWidth;
        canvas.height = textheight;

        // 배경
        ctx.fillStyle = backgrund;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 폰트
        ctx.font = font;
        ctx.fillStyle = '#171717';
        ctx.textBaseline = 'middle';

        const y = canvas.height / 2;

        ctx.fillText(text, 0, y);
    }, [contexts]);

    return <canvas ref={canvasRef} style={{ width: 'min-content' }} />;
};

export default CanvasArea;
