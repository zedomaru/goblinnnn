import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai';
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiDribbbleFill,
  RiArrowDownFill,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import './App.scss';

function App() {
  const [open, setOpen] = useState(false);
  const handleClickBurger = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <a href="#" className="logo">
          GOBLIN FAMILY
        </a>
        <ul className={`nav-list ${open ? 'open' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Clans</a>
          </li>
          <li>
            <a href="#">Town Hall</a>
          </li>
          <li>
            <a href="#">Troops</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div id="menu-icon">
          {open ? (
            <AiOutlineClose onClick={handleClickBurger} />
          ) : (
            <BiMenu onClick={handleClickBurger} />
          )}
        </div>
      </header>
      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h5>#2 Trending</h5>
          <h4>Lead Supercell</h4>
          <h1>Goblins</h1>
          <p>
            Join million of player worldwide as you build your village, <br />{' '}
            raise a clan, and compete in epic Clan Wars!
          </p>
          <a href="#">Compare</a>
          <a href="#" className="ctaa">
            <AiOutlineCaretRight className="icon" /> Watch Gameplay
          </a>
        </motion.div>
        <motion.div
          className="hero-img"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="img/goblin.svg" />
        </motion.div>
      </section>
      <motion.div
        className="icons"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href="#">
          <RiInstagramFill className="i" />
        </a>
        <a href="#">
          <RiYoutubeFill className="i" />
        </a>
        <a href="#">
          <RiDribbbleFill className="i" />
        </a>
      </motion.div>
      <div className="scroll-down">
        <a href="#" className="arrowdown">
          <RiArrowDownFill />
        </a>
      </div>
    </>
  );
}

export default App;
