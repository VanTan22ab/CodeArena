import React from 'react';
import './myNavbar.css';

export default function myNavbar() {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img className="logoImg" src='logoCode.jpg' alt='' />
        <div className='logoName'>
          <svg class='first-svg' width="125" height="46" viewBox="0 0 125 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_8)">
              <path d="M11.5 0.500001H15.25V4.25H11.5V0.500001ZM7.75 0.500001H11.5V4.25H7.75V0.500001ZM7.75 4.25H11.5V8H7.75V4.25ZM11.5 4.25H15.25V8H11.5V4.25ZM15.25 4.25H19V8H15.25V4.25ZM15.25 0.500001H19V4.25H15.25V0.500001ZM19 0.500001H22.75V4.25H19V0.500001ZM22.75 0.500001H26.5V4.25H22.75V0.500001ZM22.75 4.25H26.5V8H22.75V4.25ZM19 4.25H22.75V8H19V4.25ZM22.75 8H26.5V11.75H22.75V8ZM26.5 4.25H30.25V8H26.5V4.25ZM26.5 8H30.25V11.75H26.5V8ZM26.5 26.75H30.25V30.5H26.5V26.75ZM26.5 30.5H30.25V34.25H26.5V30.5ZM22.75 30.5H26.5V34.25H22.75V30.5ZM22.75 26.75H26.5V30.5H22.75V26.75ZM19 30.5H22.75V34.25H19V30.5ZM22.75 34.25H26.5V38H22.75V34.25ZM19 34.25H22.75V38H19V34.25ZM15.25 34.25H19V38H15.25V34.25ZM15.25 30.5H19V34.25H15.25V30.5ZM11.5 34.25H15.25V38H11.5V34.25ZM7.75 34.25H11.5V38H7.75V34.25ZM7.75 30.5H11.5V34.25H7.75V30.5ZM11.5 30.5H15.25V34.25H11.5V30.5ZM11.5 26.75H15.25V30.5H11.5V26.75ZM7.75 26.75H11.5V30.5H7.75V26.75ZM4 30.5H7.75V34.25H4V30.5ZM4 26.75H7.75V30.5H4V26.75ZM4 23H7.75V26.75H4V23ZM4 19.25H7.75V23H4V19.25ZM4 15.5H7.75V19.25H4V15.5ZM4 11.75H7.75V15.5H4V11.75ZM4 8H7.75V11.75H4V8ZM7.75 8H11.5V11.75H7.75V8ZM4 4.25H7.75V8H4V4.25ZM11.5 8H15.25V11.75H11.5V8ZM7.75 11.75H11.5V15.5H7.75V11.75ZM7.75 15.5H11.5V19.25H7.75V15.5ZM7.75 19.25H11.5V23H7.75V19.25ZM7.75 23H11.5V26.75H7.75V23ZM41.5098 8H45.2598V11.75H41.5098V8ZM37.7598 8H41.5098V11.75H37.7598V8ZM37.7598 11.75H41.5098V15.5H37.7598V11.75ZM41.5098 11.75H45.2598V15.5H41.5098V11.75ZM45.2598 8H49.0098V11.75H45.2598V8ZM49.0098 8H52.7598V11.75H49.0098V8ZM52.7598 8H56.5098V11.75H52.7598V8ZM52.7598 11.75H56.5098V15.5H52.7598V11.75ZM49.0098 11.75H52.7598V15.5H49.0098V11.75ZM52.7598 19.25H56.5098V23H52.7598V19.25ZM56.5098 11.75H60.2598V15.5H56.5098V11.75ZM56.5098 15.5H60.2598V19.25H56.5098V15.5ZM56.5098 19.25H60.2598V23H56.5098V19.25ZM56.5098 23H60.2598V26.75H56.5098V23ZM56.5098 26.75H60.2598V30.5H56.5098V26.75ZM56.5098 30.5H60.2598V34.25H56.5098V30.5ZM52.7598 30.5H56.5098V34.25H52.7598V30.5ZM52.7598 26.75H56.5098V30.5H52.7598V26.75ZM52.7598 23H56.5098V26.75H52.7598V23ZM52.7598 15.5H56.5098V19.25H52.7598V15.5ZM49.0098 30.5H52.7598V34.25H49.0098V30.5ZM52.7598 34.25H56.5098V38H52.7598V34.25ZM49.0098 34.25H52.7598V38H49.0098V34.25ZM45.2598 34.25H49.0098V38H45.2598V34.25ZM41.5098 34.25H45.2598V38H41.5098V34.25ZM37.7598 34.25H41.5098V38H37.7598V34.25ZM37.7598 30.5H41.5098V34.25H37.7598V30.5ZM41.5098 30.5H45.2598V34.25H41.5098V30.5ZM37.7598 26.75H41.5098V30.5H37.7598V26.75ZM34.0098 30.5H37.7598V34.25H34.0098V30.5ZM34.0098 26.75H37.7598V30.5H34.0098V26.75ZM34.0098 23H37.7598V26.75H34.0098V23ZM34.0098 19.25H37.7598V23H34.0098V19.25ZM34.0098 15.5H37.7598V19.25H34.0098V15.5ZM34.0098 11.75H37.7598V15.5H34.0098V11.75ZM37.7598 15.5H41.5098V19.25H37.7598V15.5ZM37.7598 19.25H41.5098V23H37.7598V19.25ZM37.7598 23H41.5098V26.75H37.7598V23ZM45.2598 30.5H49.0098V34.25H45.2598V30.5ZM45.2598 11.75H49.0098V15.5H45.2598V11.75ZM90.2695 11.75V15.5H86.5195V11.75H90.2695ZM90.2695 8V11.75H86.5195V8H90.2695ZM86.5195 8V11.75H82.7695V8H86.5195ZM86.5195 11.75V15.5H82.7695V11.75H86.5195ZM86.5195 15.5V19.25H82.7695V15.5H86.5195ZM86.5195 19.25V23H82.7695V19.25H86.5195ZM86.5195 23V26.75H82.7695V23H86.5195ZM90.2695 23V26.75H86.5195V23H90.2695ZM90.2695 19.25V23H86.5195V19.25H90.2695ZM90.2695 15.5V19.25H86.5195V15.5H90.2695ZM90.2695 26.75V30.5H86.5195V26.75H90.2695ZM86.5195 26.75V30.5H82.7695V26.75H86.5195ZM86.5195 30.5V34.25H82.7695V30.5H86.5195ZM86.5195 34.25V38H82.7695V34.25H86.5195ZM90.2695 34.25V38H86.5195V34.25H90.2695ZM90.2695 30.5V34.25H86.5195V30.5H90.2695ZM71.5195 34.25V38H67.7695V34.25H71.5195ZM67.7695 30.5V34.25H64.0195V30.5H67.7695ZM67.7695 26.75V30.5H64.0195V26.75H67.7695ZM67.7695 23V26.75H64.0195V23H67.7695ZM67.7695 19.25V23H64.0195V19.25H67.7695ZM67.7695 15.5V19.25H64.0195V15.5H67.7695ZM67.7695 11.75V15.5H64.0195V11.75H67.7695ZM71.5195 19.25V23H67.7695V19.25H71.5195ZM71.5195 23V26.75H67.7695V23H71.5195ZM71.5195 26.75V30.5H67.7695V26.75H71.5195ZM71.5195 30.5V34.25H67.7695V30.5H71.5195ZM71.5195 15.5V19.25H67.7695V15.5H71.5195ZM75.2695 11.75V15.5H71.5195V11.75H75.2695ZM75.2695 8V11.75H71.5195V8H75.2695ZM71.5195 8V11.75H67.7695V8H71.5195ZM71.5195 11.75V15.5H67.7695V11.75H71.5195ZM79.0195 8V11.75H75.2695V8H79.0195ZM90.2695 0.500001V4.25H86.5195V0.500001H90.2695ZM86.5195 0.500001V4.25H82.7695V0.500001H86.5195ZM86.5195 4.25V8H82.7695V4.25H86.5195ZM90.2695 4.25V8H86.5195V4.25H90.2695ZM79.0195 34.25V38H75.2695V34.25H79.0195ZM75.2695 34.25V38H71.5195V34.25H75.2695ZM75.2695 30.5V34.25H71.5195V30.5H75.2695ZM79.0195 30.5V34.25H75.2695V30.5H79.0195ZM82.7695 30.5V34.25H79.0195V30.5H82.7695ZM82.7695 8V11.75H79.0195V8H82.7695ZM82.7695 11.75V15.5H79.0195V11.75H82.7695ZM79.0195 11.75V15.5H75.2695V11.75H79.0195ZM101.529 8H105.279V11.75H101.529V8ZM97.7793 8H101.529V11.75H97.7793V8ZM97.7793 11.75H101.529V15.5H97.7793V11.75ZM101.529 11.75H105.279V15.5H101.529V11.75ZM105.279 8H109.029V11.75H105.279V8ZM109.029 8H112.779V11.75H109.029V8ZM112.779 8H116.529V11.75H112.779V8ZM112.779 11.75H116.529V15.5H112.779V11.75ZM109.029 11.75H112.779V15.5H109.029V11.75ZM116.529 11.75H120.279V15.5H116.529V11.75ZM116.529 15.5H120.279V19.25H116.529V15.5ZM116.529 30.5H120.279V34.25H116.529V30.5ZM112.779 30.5H116.529V34.25H112.779V30.5ZM112.779 15.5H116.529V19.25H112.779V15.5ZM109.029 30.5H112.779V34.25H109.029V30.5ZM112.779 34.25H116.529V38H112.779V34.25ZM109.029 34.25H112.779V38H109.029V34.25ZM105.279 34.25H109.029V38H105.279V34.25ZM101.529 34.25H105.279V38H101.529V34.25ZM97.7793 34.25H101.529V38H97.7793V34.25ZM97.7793 30.5H101.529V34.25H97.7793V30.5ZM101.529 30.5H105.279V34.25H101.529V30.5ZM97.7793 26.75H101.529V30.5H97.7793V26.75ZM94.0293 30.5H97.7793V34.25H94.0293V30.5ZM94.0293 26.75H97.7793V30.5H94.0293V26.75ZM94.0293 23H97.7793V26.75H94.0293V23ZM94.0293 19.25H97.7793V23H94.0293V19.25ZM94.0293 15.5H97.7793V19.25H94.0293V15.5ZM94.0293 11.75H97.7793V15.5H94.0293V11.75ZM97.7793 15.5H101.529V19.25H97.7793V15.5ZM97.7793 19.25H101.529V23H97.7793V19.25ZM97.7793 23H101.529V26.75H97.7793V23ZM105.279 30.5H109.029V34.25H105.279V30.5ZM105.279 11.75H109.029V15.5H105.279V11.75ZM112.779 19.25H116.529V23H112.779V19.25ZM116.529 19.25H120.279V23H116.529V19.25ZM101.529 23H105.279V26.75H101.529V23ZM105.279 23H109.029V26.75H105.279V23ZM109.029 23H112.779V26.75H109.029V23ZM112.779 23H116.529V26.75H112.779V23ZM116.529 23H120.279V26.75H116.529V23ZM109.029 19.25H112.779V23H109.029V19.25ZM105.279 19.25H109.029V23H105.279V19.25ZM101.529 19.25H105.279V23H101.529V19.25Z" fill="#ED5867" />
            </g>
            <defs>
              <filter id="filter0_d_1_8" x="0" y="0.5" width="124.279" height="45.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_8" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_8" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg class='second-svg' width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.28571 2.71429H6.42857V4.85714H4.28571V2.71429ZM6.42857 2.71429H8.57143V4.85714H6.42857V2.71429ZM6.42857 0.571429H8.57143V2.71429H6.42857V0.571429ZM8.57143 2.71429H10.7143V4.85714H8.57143V2.71429ZM8.57143 4.85714H10.7143V7H8.57143V4.85714ZM10.7143 4.85714H12.8571V7H10.7143V4.85714ZM6.42857 4.85714H8.57143V7H6.42857V4.85714ZM4.28571 4.85714H6.42857V7H4.28571V4.85714ZM2.14286 4.85714H4.28571V7H2.14286V4.85714ZM2.14286 7H4.28571V9.14286H2.14286V7ZM0 7H2.14286V9.14286H0V7ZM4.28571 7H6.42857V9.14286H4.28571V7ZM2.14286 9.14286H4.28571V11.2857H2.14286V9.14286ZM2.14286 11.2857H4.28571V13.4286H2.14286V11.2857ZM2.14286 13.4286H4.28571V15.5714H2.14286V13.4286ZM4.28571 13.4286H6.42857V15.5714H4.28571V13.4286ZM6.42857 13.4286H8.57143V15.5714H6.42857V13.4286ZM8.57143 13.4286H10.7143V15.5714H8.57143V13.4286ZM10.7143 13.4286H12.8571V15.5714H10.7143V13.4286ZM12.8571 13.4286H15V15.5714H12.8571V13.4286ZM12.8571 11.2857H15V13.4286H12.8571V11.2857ZM12.8571 9.14286H15V11.2857H12.8571V9.14286ZM12.8571 7H15V9.14286H12.8571V7ZM10.7143 7H12.8571V9.14286H10.7143V7ZM8.57143 7H10.7143V9.14286H8.57143V7ZM10.7143 9.14286H12.8571V11.2857H10.7143V9.14286ZM10.7143 11.2857H12.8571V13.4286H10.7143V11.2857ZM10.7143 15.5714H12.8571V17.7143H10.7143V15.5714ZM12.8571 15.5714H15V17.7143H12.8571V15.5714ZM12.8571 17.7143H15V19.8571H12.8571V17.7143ZM12.8571 19.8571H15V22H12.8571V19.8571ZM10.7143 19.8571H12.8571V22H10.7143V19.8571ZM10.7143 17.7143H12.8571V19.8571H10.7143V17.7143ZM8.57143 15.5714H10.7143V17.7143H8.57143V15.5714ZM6.42857 15.5714H8.57143V17.7143H6.42857V15.5714ZM4.28571 15.5714H6.42857V17.7143H4.28571V15.5714ZM2.14286 15.5714H4.28571V17.7143H2.14286V15.5714ZM2.14286 17.7143H4.28571V19.8571H2.14286V17.7143ZM2.14286 19.8571H4.28571V22H2.14286V19.8571ZM0 19.8571H2.14286V22H0V19.8571ZM0 17.7143H2.14286V19.8571H0V17.7143ZM0 15.5714H2.14286V17.7143H0V15.5714ZM0 13.4286H2.14286V15.5714H0V13.4286ZM0 11.2857H2.14286V13.4286H0V11.2857ZM0 9.14286H2.14286V11.2857H0V9.14286ZM17.1484 7H19.2913V9.14286H17.1484V7ZM17.1484 4.85714H19.2913V7H17.1484V4.85714ZM19.2913 4.85714H21.4342V7H19.2913V4.85714ZM19.2913 7H21.4342V9.14286H19.2913V7ZM19.2913 9.14286H21.4342V11.2857H19.2913V9.14286ZM19.2913 11.2857H21.4342V13.4286H19.2913V11.2857ZM19.2913 13.4286H21.4342V15.5714H19.2913V13.4286ZM17.1484 13.4286H19.2913V15.5714H17.1484V13.4286ZM17.1484 11.2857H19.2913V13.4286H17.1484V11.2857ZM17.1484 9.14286H19.2913V11.2857H17.1484V9.14286ZM17.1484 15.5714H19.2913V17.7143H17.1484V15.5714ZM19.2913 15.5714H21.4342V17.7143H19.2913V15.5714ZM19.2913 17.7143H21.4342V19.8571H19.2913V17.7143ZM19.2913 19.8571H21.4342V22H19.2913V19.8571ZM17.1484 19.8571H19.2913V22H17.1484V19.8571ZM17.1484 17.7143H19.2913V19.8571H17.1484V17.7143ZM21.4342 7H23.577V9.14286H21.4342V7ZM23.577 7H25.7199V9.14286H23.577V7ZM25.7199 7H27.8627V9.14286H25.7199V7ZM25.7199 4.85714H27.8627V7H25.7199V4.85714ZM23.577 4.85714H25.7199V7H23.577V4.85714ZM21.4342 9.14286H23.577V11.2857H21.4342V9.14286ZM27.8627 7H30.0056V9.14286H27.8627V7ZM25.7199 9.14286H27.8627V11.2857H25.7199V9.14286ZM36.4342 4.85714H38.577V7H36.4342V4.85714ZM34.2913 4.85714H36.4342V7H34.2913V4.85714ZM34.2913 7H36.4342V9.14286H34.2913V7ZM36.4342 7H38.577V9.14286H36.4342V7ZM38.577 4.85714H40.7199V7H38.577V4.85714ZM40.7199 4.85714H42.8627V7H40.7199V4.85714ZM42.8627 4.85714H45.0056V7H42.8627V4.85714ZM42.8627 7H45.0056V9.14286H42.8627V7ZM40.7199 7H42.8627V9.14286H40.7199V7ZM45.0056 7H47.1484V9.14286H45.0056V7ZM45.0056 9.14286H47.1484V11.2857H45.0056V9.14286ZM45.0056 17.7143H47.1484V19.8571H45.0056V17.7143ZM42.8627 17.7143H45.0056V19.8571H42.8627V17.7143ZM42.8627 9.14286H45.0056V11.2857H42.8627V9.14286ZM40.7199 17.7143H42.8627V19.8571H40.7199V17.7143ZM42.8627 19.8571H45.0056V22H42.8627V19.8571ZM40.7199 19.8571H42.8627V22H40.7199V19.8571ZM38.577 19.8571H40.7199V22H38.577V19.8571ZM36.4342 19.8571H38.577V22H36.4342V19.8571ZM34.2913 19.8571H36.4342V22H34.2913V19.8571ZM34.2913 17.7143H36.4342V19.8571H34.2913V17.7143ZM36.4342 17.7143H38.577V19.8571H36.4342V17.7143ZM34.2913 15.5714H36.4342V17.7143H34.2913V15.5714ZM32.1484 17.7143H34.2913V19.8571H32.1484V17.7143ZM32.1484 15.5714H34.2913V17.7143H32.1484V15.5714ZM32.1484 13.4286H34.2913V15.5714H32.1484V13.4286ZM32.1484 11.2857H34.2913V13.4286H32.1484V11.2857ZM32.1484 9.14286H34.2913V11.2857H32.1484V9.14286ZM32.1484 7H34.2913V9.14286H32.1484V7ZM34.2913 9.14286H36.4342V11.2857H34.2913V9.14286ZM34.2913 11.2857H36.4342V13.4286H34.2913V11.2857ZM34.2913 13.4286H36.4342V15.5714H34.2913V13.4286ZM38.577 17.7143H40.7199V19.8571H38.577V17.7143ZM38.577 7H40.7199V9.14286H38.577V7ZM42.8627 11.2857H45.0056V13.4286H42.8627V11.2857ZM45.0056 11.2857H47.1484V13.4286H45.0056V11.2857ZM36.4342 13.4286H38.577V15.5714H36.4342V13.4286ZM38.577 13.4286H40.7199V15.5714H38.577V13.4286ZM40.7199 13.4286H42.8627V15.5714H40.7199V13.4286ZM42.8627 13.4286H45.0056V15.5714H42.8627V13.4286ZM45.0056 13.4286H47.1484V15.5714H45.0056V13.4286ZM40.7199 11.2857H42.8627V13.4286H40.7199V11.2857ZM38.577 11.2857H40.7199V13.4286H38.577V11.2857ZM36.4342 11.2857H38.577V13.4286H36.4342V11.2857ZM49.2969 7H51.4397V9.14286H49.2969V7ZM49.2969 4.85714H51.4397V7H49.2969V4.85714ZM51.4397 4.85714H53.5826V7H51.4397V4.85714ZM51.4397 7H53.5826V9.14286H51.4397V7ZM51.4397 9.14286H53.5826V11.2857H51.4397V9.14286ZM51.4397 11.2857H53.5826V13.4286H51.4397V11.2857ZM51.4397 13.4286H53.5826V15.5714H51.4397V13.4286ZM49.2969 13.4286H51.4397V15.5714H49.2969V13.4286ZM49.2969 11.2857H51.4397V13.4286H49.2969V11.2857ZM49.2969 9.14286H51.4397V11.2857H49.2969V9.14286ZM49.2969 15.5714H51.4397V17.7143H49.2969V15.5714ZM51.4397 15.5714H53.5826V17.7143H51.4397V15.5714ZM51.4397 17.7143H53.5826V19.8571H51.4397V17.7143ZM51.4397 19.8571H53.5826V22H51.4397V19.8571ZM49.2969 19.8571H51.4397V22H49.2969V19.8571ZM49.2969 17.7143H51.4397V19.8571H49.2969V17.7143ZM60.0112 19.8571H62.154V22H60.0112V19.8571ZM62.154 19.8571H64.2969V22H62.154V19.8571ZM62.154 17.7143H64.2969V19.8571H62.154V17.7143ZM62.154 15.5714H64.2969V17.7143H62.154V15.5714ZM62.154 13.4286H64.2969V15.5714H62.154V13.4286ZM62.154 11.2857H64.2969V13.4286H62.154V11.2857ZM62.154 9.14286H64.2969V11.2857H62.154V9.14286ZM62.154 7H64.2969V9.14286H62.154V7ZM60.0112 11.2857H62.154V13.4286H60.0112V11.2857ZM60.0112 13.4286H62.154V15.5714H60.0112V13.4286ZM60.0112 15.5714H62.154V17.7143H60.0112V15.5714ZM60.0112 17.7143H62.154V19.8571H60.0112V17.7143ZM60.0112 9.14286H62.154V11.2857H60.0112V9.14286ZM53.5826 7H55.7254V9.14286H53.5826V7ZM55.7254 7H57.8683V9.14286H55.7254V7ZM57.8683 7H60.0112V9.14286H57.8683V7ZM57.8683 4.85714H60.0112V7H57.8683V4.85714ZM60.0112 4.85714H62.154V7H60.0112V4.85714ZM60.0112 7H62.154V9.14286H60.0112V7ZM55.7254 4.85714H57.8683V7H55.7254V4.85714ZM79.3025 22H77.1596V19.8571H79.3025V22ZM79.3025 19.8571H77.1596V17.7143H79.3025V19.8571ZM77.1596 19.8571H75.0167V17.7143H77.1596V19.8571ZM75.0167 22H72.8739V19.8571H75.0167V22ZM72.8739 22H70.731V19.8571H72.8739V22ZM70.731 22H68.5882V19.8571H70.731V22ZM70.731 19.8571H68.5882V17.7143H70.731V19.8571ZM72.8739 19.8571H70.731V17.7143H72.8739V19.8571ZM68.5882 19.8571H66.4453V17.7143H68.5882V19.8571ZM68.5882 17.7143H66.4453V15.5714H68.5882V17.7143ZM68.5882 9.14286H66.4453V7H68.5882V9.14286ZM70.731 9.14286H68.5882V7H70.731V9.14286ZM70.731 17.7143H68.5882V15.5714H70.731V17.7143ZM72.8739 9.14286H70.731V7H72.8739V9.14286ZM70.731 7H68.5882V4.85714H70.731V7ZM72.8739 7H70.731V4.85714H72.8739V7ZM75.0167 7H72.8739V4.85714H75.0167V7ZM77.1596 7H75.0167V4.85714H77.1596V7ZM79.3025 7H77.1596V4.85714H79.3025V7ZM79.3025 9.14286H77.1596V7H79.3025V9.14286ZM77.1596 9.14286H75.0167V7H77.1596V9.14286ZM79.3025 11.2857H77.1596V9.14286H79.3025V11.2857ZM81.4453 9.14286H79.3025V7H81.4453V9.14286ZM81.4453 11.2857H79.3025V9.14286H81.4453V11.2857ZM81.4453 13.4286H79.3025V11.2857H81.4453V13.4286ZM81.4453 15.5714H79.3025V13.4286H81.4453V15.5714ZM81.4453 17.7143H79.3025V15.5714H81.4453V17.7143ZM81.4453 19.8571H79.3025V17.7143H81.4453V19.8571ZM79.3025 17.7143H77.1596V15.5714H79.3025V17.7143ZM79.3025 15.5714H77.1596V13.4286H79.3025V15.5714ZM79.3025 13.4286H77.1596V11.2857H79.3025V13.4286ZM75.0167 9.14286H72.8739V7H75.0167V9.14286ZM75.0167 19.8571H72.8739V17.7143H75.0167V19.8571ZM79.3025 19.8571H81.4453V22H79.3025V19.8571ZM75.0167 11.2857H77.1596V13.4286H75.0167V11.2857ZM72.8739 11.2857H75.0167V13.4286H72.8739V11.2857ZM70.731 11.2857H72.8739V13.4286H70.731V11.2857ZM68.5882 11.2857H70.731V13.4286H68.5882V11.2857ZM66.4453 13.4286H68.5882V15.5714H66.4453V13.4286ZM68.5882 13.4286H70.731V15.5714H68.5882V13.4286ZM75.0167 13.4286H77.1596V15.5714H75.0167V13.4286ZM72.8739 13.4286H75.0167V15.5714H72.8739V13.4286ZM70.731 13.4286H72.8739V15.5714H70.731V13.4286Z" fill="black" />
          </svg>
        </div>
      </div>
      <div className='center'>
          <ul>
            <li>About The Courses</li>
            <li>Feature</li>
            <li>Trainning Format</li>
            <li>Review</li>
            <li>Media</li>
          </ul>
        </div>
        <button className='btn-start'>Start Learning</button>
    </div>
  )
}

