import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const Draw = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [painting, setPainting] = useState(false);
    const [filling, setFilling] = useState(false);
    const [colorEvent, setColorEvent] = useState(false);
    const [currentColor, setCurrentColor] = useState('#934242');
    const [lineWidth, setLineWidth] = useState(2.5);

    // ... 다른 상태 변수들
    useImperativeHandle(ref, () => ({
        initCanvas: () => {
            setTimeout(() => {
                const canvas = canvasRef.current;
                if (canvas) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                const ctx = canvas.getContext('2d');
                setCtx(ctx);
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                ctx.strokeStyle = currentColor;
                ctx.fillStyle = currentColor;
                ctx.lineWidth = lineWidth;
                console.log('test')
                }
            }, 10);
        },
    }));

    const stopPainting = () => {
        setPainting(false);
    };
    
    const startPainting = () => {
        setPainting(true);
    };

    const onMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
            console.log('stop')
        } else {
            console.log('start')
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    const handleCanvasClick = () => {
        // handleCanvasClick 로직
    };

    // const handleCM = (e) => {
        // preventDefault();
    //     // 우클릭방지
    // };

    // const handleSaveClick = () => {
    //     // handleSaveClick 로직
    // };

    return (
        <canvas
            ref={canvasRef}
            className={`canvas`}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
            onClick={handleCanvasClick}
            // onContextMenu={handleCM}
        />
    );
});

export default Draw;
