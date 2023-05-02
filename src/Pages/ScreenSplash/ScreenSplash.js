import React from 'react'
import MainHeader from '../../Components/MainHeader/MainHeader';
import ImageSlider from '../../Components/Slider/ImageSlider';
import Footer from '../../Components/UI/Footer/Footer';
import CardDescription from './CardDescription/CardDescription';
import classes from './ScreenSplash.module.css';

function ScreenSplash() {

  return (
    <div>
      <MainHeader/>
      <ImageSlider></ImageSlider>
    <h2 className={classes.h2}>Features where SmartMeds Provides..</h2>
    <div className={classes.cardDescription}>
        <CardDescription title='NFC Enabled Medication'></CardDescription>
        <CardDescription title='Smart Prescription'></CardDescription>
        <CardDescription title='Contactless & Secure'></CardDescription>
      </div>
    <Footer></Footer>
    </div>
  )
}

export default ScreenSplash
