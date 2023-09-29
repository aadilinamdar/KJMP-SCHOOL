import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Krantijyoti Mahatma
            Phule Highschool
          </span>
          <span className="primaryText">
            <a href="mailto:zainkeepscode@gmail.com">demomail@gmail.com</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Address</span>
            <p>Nehrunagar Vidyalay, Kolhapur, Swatantra Sainik Vasahat, 416004, Maharashtra, India</p>
          </div>
          <ul className={css.menu}>
            <li>+91 &nbsp;70664  22855</li>
            <li><a href=""> Location 📍</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
