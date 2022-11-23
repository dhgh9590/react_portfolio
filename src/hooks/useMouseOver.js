import { useCallback, useEffect } from 'react';
import { useState } from 'react';

//마우스가 ref에 올라왔는지 떠났는지 true,false 값을 반환 해주는 커스텀 훅
//ref를 전달 해주는 컴포넌트에서는 반드시 배열로 전달 해줘야 함!
export default function useMouseOver(ref) {
  const [over, setOver] = useState(false);

  const handleMouseOver = useCallback(() => setOver(true), []); //마우스가 올라가면 true값을 반환
  const handleMouseOut = useCallback(() => setOver(false), []); //마우스가 나가면 false값을 반환

  useEffect(() => {
    //각각의 ref마다 할일
    ref.forEach(item => {
      item.current.addEventListener('mouseover', handleMouseOver); //마우스가 ref에 올라가면 handleMouseOver 함수 실행
    });

    ref.forEach(item => {
      item.current.addEventListener('mouseout', handleMouseOut); //마우스가 ref에서 나가면 handleMouseOut 함수 실행
    });
  }, [ref, handleMouseOver, handleMouseOut]);

  return over;
}
