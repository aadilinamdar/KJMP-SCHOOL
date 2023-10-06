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
            <a href="mailto:kjmphighschool1984@gmail.com">kjmphighschool1984@gmail.com</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Address</span>
            <p>Nehrunagar Vidyalay, Kolhapur, Swatantra Sainik Vasahat, 416004, Maharashtra, India</p>
          </div>
          <ul className={css.menu}>
            <li>+91 &nbsp;95521 12087</li>
            <li><a target="_blank" href="https://www.google.com/maps/place/Krantijyoti+Mahatma+Phule+High+School+Kolhapur/@16.6780466,74.2406467,17.29z/data=!4m6!3m5!1s0x3bc101796848193d:0xfbe0e7124ca2383e!8m2!3d16.6776384!4d74.243689!16s%2Fg%2F11ss3bcrx9?entry=ttu"> Location 📍</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
