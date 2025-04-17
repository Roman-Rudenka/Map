import React from 'react';
import styles from '../styles/App.module.scss';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import  MapWithMarkers  from '../components/MapWithMarkers.jsx';

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <MapWithMarkers />
      <Footer />
    </div>
  );
}
