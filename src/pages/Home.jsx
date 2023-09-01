import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  const shadowStyles = {
    textShadow: '0px 1px 0 rgb(0,0,0),0px -1px 0 rgb(0,0,0),1px 0px 0 rgb(0,0,0),-1px 0px 0 rgb(0,0,0),1px 1px 0 rgb(0,0,0),1px -1px 0 rgb(0,0,0),-1px 1px 0 rgb(0,0,0),-1px -1px 0 rgb(0,0,0),0px 2px 0 rgb(0,0,0),0px -2px 0 rgb(0,0,0),2px 0px 0 rgb(0,0,0),-2px 0px 0 rgb(0,0,0),2px 2px 0 rgb(0,0,0),2px -2px 0 rgb(0,0,0),-2px 2px 0 rgb(0,0,0),-2px -2px 0 rgb(0,0,0)'
  };

  const shadowStyles2 = {
    textShadow: '0px 1px 0 rgb(229,215,96),0px -1px 0 rgb(229,215,96),1px 0px 0 rgb(229,215,96),-1px 0px 0 rgb(229,215,96),1px 1px 0 rgb(229,215,96),1px -1px 0 rgb(229,215,96),-1px 1px 0 rgb(229,215,96),-1px -1px 0 rgb(229,215,96),0px 2px 0 rgb(229,215,96),0px -2px 0 rgb(229,215,96),2px 0px 0 rgb(229,215,96),-2px 0px 0 rgb(229,215,96),2px 2px 0 rgb(229,215,96),2px -2px 0 rgb(229,215,96),-2px 2px 0 rgb(229,215,96),-2px -2px 0 rgb(229,215,96)'
  };


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='/JavaScript-Emblem.png'
              alt="logo"
              className="w-16 h-16 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <div className="head-text">
               <h1 style={shadowStyles2}>THREE</h1><h1 className='text-[#E6D75F]' style={shadowStyles}>Shirt</h1>
              </div>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
                Создайте свою уникальную и эксклюзивную рубашку с помощью нашего нового инструмента 3D-индивидуализации.  <strong>Дайте волю своему воображению</strong>{" "} и определите свой собственный стиль.
              </p>

              <CustomButton
                type="filled"
                title="Кастомизировать"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home