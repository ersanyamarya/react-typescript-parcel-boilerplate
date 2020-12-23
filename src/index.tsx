import React, { lazy, ReactElement, Suspense } from 'react'
import { render } from 'react-dom'
import { Global, css } from '@emotion/react'
import { Router, RouteComponentProps } from '@reach/router'

import { Navigation } from './components'

const Forms = lazy(() => import('./pages/forms'))
const Texts = lazy(() => import('./pages/texts'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const COLORS = {
  blue: '#4190c4',
  attention: '#ff2266',
  brilliantShadow: '#fafafa',
  white: '#ffffff',
  tederaticGrey: '#4a4a4a',
}

const NotFound = () => <div>Sorry, nothing here.</div>
const Application = () => (
  <>
    <Global
      styles={css`
        :root {
          --weeve-blue: ${COLORS.blue};
          --weeve-attention: ${COLORS.attention};
          --brilliant-shadow:${COLORS.brilliantShadow};
          --pure-white: ${COLORS.white};
          --weeve-tedratic-grey: ${COLORS.tederaticGrey};
          --shadow-4a4a4a-10: #4a4a4a1a;
          --weeve-turquoise: #41c4b7;
          --weeve-mint: #a2ece2;
          --weeve-yellow: #ffd23b;

          --weeve-corner-radius: 5px;
          --weeve-shadow-light: 3px 3px 3px var(--shadow-4a4a4a-10);
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        * + * {
          margin-top: 0rem;
        }
        html,
        body {
          width: 100vw;
          height: 100vh;
          padding: 0;
          font-size: 16px;
          font-family: Roboto;
          color: var(--weeve-blue);
        }
        body::-webkit-scrollbar {
          display: none;
        }
        body: {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          // padding: 1rem;
        }
        h1 {
          font-weight: bold;
          font-size: 3rem;
          line-height: 3rem;
        }
        h2 {
          font-weight: medium;
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        h3 {
          font-weight: medium;
          font-size: 2rem;
          line-height: 2.6rem;
        }
        h4 {
          font-weight: bold;
          font-size: 1.625rem;
          line-height: 2.125rem;
        }
        h5 {
          font-size: 1.125rem;
          line-height: 1.5rem;
          font-family: Roboto Mono;
        }
        p {
          font-weight: 300px;
          font-size: 0.75rem;
          line-height: 1rem;
        }
        nav * a {
          margin: 0 1rem;
          padding: 0.75rem 2.5rem;
          text-decoration: none;
          line-height: 2.6rem;
          border-radius: var(--weeve-corner-radius);
          color: var(--weeve-tedratic-grey);
          background-color: var(--weeve-turquoise);
          transition: all 0.15s;
          &:hover {
            box-shadow: 5px 5px 5px var(--shadow-4a4a4a-10);
          }
          &.active-class {
            background-color: var(--weeve-mint);
          }
        }
        label {
          font-weight: bold;
          padding 1rem;
        }
        input,
        select {
          margin: 1rem;
          cursor: pointer;
          font-weight: medium;
          font-size: 0.875rem;
          line-height: 1rem;
          padding: 0.75rem 1.5rem;
          outline: none;
          border: 1px solid var(--pure-white);
          border-radius: var(--weeve-corner-radius);
          background: var(--pure-white) 0% 0% no-repeat padding-box;
          box-shadow: var(--weeve-shadow-light);
          border-radius: var(--weeve-corner-radius);
          &:active,
          &:focus {
            border: 1px solid var(--weeve-turquoise);
          }
        }
        input[type=checkbox]{
          background-color: var(--weeve-mint)
          font-size: 48px;
          height:24px;
          width:24px;
        }
       option {
          border: 1px solid #e5e5e5;
          padding: 10px;
        }
        label{
          padding:1rem;
          font-weight: bold;
        }
        button {
          margin: 1rem;
          position: relative;
          cursor: pointer;
          font-weight: medium;
          font-size: 0.875rem;
          line-height: 1.25rem;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          padding: 0.75rem 1.75rem;
          background: transparent linear-gradient(107deg, var(--weeve-mint) 0%, var(--weeve-turquoise) 100%) 0% 0%
            no-repeat padding-box;
          box-shadow: var(--weeve-shadow-light);
          border-radius: var(--weeve-corner-radius);
          border: 0;
          outline: none;
          color: var(--weeve-tedratic-grey);
          transition: transform 0.15s;

          // &:after {
          //   position: absolute;
          //   border-radius: 50%;
          //   background-color: var(--weeve-turquoise);
          //   opacity: 50%;
          //   content: '';
          //   left: 50%;
          //   top: 50%;
          //   width: 300px;
          //   height: 300px;
          //   margin-left: calc(-300px / 2);
          //   margin-top: calc(-300px / 2);

          //   transform: scale(0);
          // }
          // &:not(:active):after {
          //   animation: ripple 0.75s ease-out;
          // }
          // &:after {
          //   visibility: hidden;
          // }
          // &:focus:after {
          //   visibility: visible;
          // }
          &.border {
            border: 1px solid var(--weeve-turquoise);
            background: transparent;
          }
          &:hover {
            transform: scale(1.1);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
          }
          20% {
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
        .card-dark{
          background-color: var(--weeve-tedratic-grey) ;
          color: var(--brilliant-shadow);
          border-radius: var(--weeve-corner-radius);
          box-shadow: var(--weeve-shadow-light);
        }
      `}
    />
    <Navigation />
    <Suspense fallback={<h1>loading route …</h1>}>
      <Router>
        <RouterPage path="/forms" pageComponent={<Forms />} />
        <RouterPage path="/texts" pageComponent={<Texts />} />
        <RouterPage default pageComponent={<NotFound />} />
      </Router>
    </Suspense>
  </>
)

render(<Application />, document.getElementById('root'))
