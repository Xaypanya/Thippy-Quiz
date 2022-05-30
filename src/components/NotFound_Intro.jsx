import React,{useState, useEffect} from 'react'

export default function NotFound_Intro() {

    const [counter, setCounter] = useState(10)

    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      console.log('render trigger')
    }, [counter]);
  return (
    <>
        <img src="https://i.pinimg.com/originals/ec/4b/5c/ec4b5c1d3836a9f4524165c8bb399e45.gif" alt="notfound"/>
        <h2>ໂອ້... ທ່ານຄົ້ນພົບ Multiverse of sadness ແຕ່ເຮົາຕ້ອງສົ່ງທ່ານກັບບ້ານແລ້ວ!</h2>
        <h2>ຮອດຈຸດໝາຍໃນ {counter}</h2>
    </>
  )
}
