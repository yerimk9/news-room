"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function AnalogClock() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      const [seconds, minutes, hours] = [
        date.getSeconds(),
        date.getMinutes(),
        date.getHours(),
      ];

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = hours * 30 + minutes * 0.5 + seconds * (0.5 / 60);

      if (secondRef.current)
        secondRef.current.style.transform = `rotate(${secondDeg}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `rotate(${minuteDeg}deg)`;
      if (hourRef.current)
        hourRef.current.style.transform = `rotate(${hourDeg}deg)`;
    };

    tick(); // 초기 설정
    const interval = setInterval(tick, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);
  return (
    <div className="analog-clock">
      <div className="analog-clock__case">
        <span className="analog-clock__frame">
          <Image
            className="analog-clock__frame-img"
            src="https://q.livesense.co.jp/images/index/clock.svg"
            alt=""
            decoding="async"
            width={92}
            height={92}
          />
        </span>
        <span className="analog-clock__hour" ref={hourRef}>
          <Image
            className="analog-clock__hour-img"
            src="https://q.livesense.co.jp/images/index/hour.svg"
            alt=""
            decoding="async"
            fill
          />
        </span>
        <span className="analog-clock__min" ref={minuteRef}>
          <Image
            className="analog-clock__min-img"
            src="https://q.livesense.co.jp/images/index/minutes.svg"
            alt=""
            decoding="async"
            fill
          />
        </span>
        <span className="analog-clock__sec" ref={secondRef}>
          <Image
            className="analog-clock__sec-img"
            src="https://q.livesense.co.jp/images/index/seconds.svg"
            alt=""
            decoding="async"
            fill
          />
        </span>
      </div>
    </div>
  );
}

export default AnalogClock;
