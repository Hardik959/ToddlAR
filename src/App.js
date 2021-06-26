import React from "react";
import {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Alphabets from "./pages/Alphabets";
import Mathematics from "./pages/Mathematics";
import Animals from "./pages/Animals";
import Navbar from "./components/Navbar";

// -------------importing all QR codes for alphabets-------------

import a from "./images/alphabets/a.png";
import b from "./images/alphabets/b.png";
import c from "./images/alphabets/c.png";
import d from "./images/alphabets/d.png";
import e from "./images/alphabets/e.png";
import f from "./images/alphabets/f.png";
import g from "./images/alphabets/g.png";
import h from "./images/alphabets/h.png";
import i from "./images/alphabets/i.png";
import j from "./images/alphabets/j.png";
import k from "./images/alphabets/k.png";
import l from "./images/alphabets/l.png";
import m from "./images/alphabets/m.png";
import n from "./images/alphabets/n.png";
import o from "./images/alphabets/o.png";
import p from "./images/alphabets/p.png";
import q from "./images/alphabets/q.png";
import r from "./images/alphabets/r.png";
import s from "./images/alphabets/s.png";
import t from "./images/alphabets/t.png";
import u from "./images/alphabets/u.png";
import v from "./images/alphabets/v.png";
import w from "./images/alphabets/w.png";
import x from "./images/alphabets/x.png";
import y from "./images/alphabets/y.png";
import z from "./images/alphabets/z.png";




const App = () => {

  // --------------------------alphabets--------------------------

  const [alphabets, setAlphabets] = useState([
    {
      ar: "ar",
      // <iframe
      //   id='1d5c1d8c-959c-4312-a1dd-5c7cca66bfb9'
      //   src='https://www.vectary.com/viewer/v1/?model=1d5c1d8c-959c-4312-a1dd-5c7cca66bfb9&env=studio3'
      //   frameborder='0'
      //   width='100%'
      //   height='480'></iframe>
      qr: a,
    },
    {
      ar: "ar",
      // <iframe
      //   id='735527fb-b3ba-4232-8b90-25aaf441510a'
      //   src='https://www.vectary.com/viewer/v1/?model=735527fb-b3ba-4232-8b90-25aaf441510a&env=studio3'
      //   frameborder='0'
      //   width='100%'
      //   height='480'></iframe>
      qr: b,
    },
    {
      ar: "ar",
      // <iframe
      //   id='4c2de3ae-2193-4181-8ab8-c59e72288381'
      //   src='https://www.vectary.com/viewer/v1/?model=4c2de3ae-2193-4181-8ab8-c59e72288381&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>,
      qr: c,
    },
    {
      ar: "ar",
      // <iframe
      //   id='60fcb9e2-c764-432d-9290-fec6ec3d9b06'
      //   src='https://www.vectary.com/viewer/v1/?model=60fcb9e2-c764-432d-9290-fec6ec3d9b06&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: d,
    },
    {
      ar: "ar",
      // <iframe
      //   id='84c5ad54-82b1-4633-86b2-1af62fc5ec03'
      //   src='https://www.vectary.com/viewer/v1/?model=84c5ad54-82b1-4633-86b2-1af62fc5ec03&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: e,
    },
    {
      ar: "ar",
      // <iframe
      //   id='01e6c7ae-9f08-4ba4-8f17-aa0101dc1c6b'
      //   src='https://www.vectary.com/viewer/v1/?model=01e6c7ae-9f08-4ba4-8f17-aa0101dc1c6b&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: f,
    },
    {
      ar: "ar",
      // <iframe
      //   id='44d6a329-463a-486f-b518-22cf5a494491'
      //   src='https://www.vectary.com/viewer/v1/?model=44d6a329-463a-486f-b518-22cf5a494491&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: g,
    },
    {
      ar: "ar",
      // <iframe
      //   id='3d7f150e-c94b-416f-985b-6c7d7751de79'
      //   src='https://www.vectary.com/viewer/v1/?model=3d7f150e-c94b-416f-985b-6c7d7751de79&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: h,
    },
    {
      ar: "ar",
      // <iframe
      //   id='6b664480-d065-4f0b-a9a7-c69e775bcfbe'
      //   src='https://www.vectary.com/viewer/v1/?model=6b664480-d065-4f0b-a9a7-c69e775bcfbe&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: i,
    },
    {
      ar: "ar",
      // <iframe
      //   id='ab259749-33a9-4acc-83ad-5ecab0293bc2'
      //   src='https://www.vectary.com/viewer/v1/?model=ab259749-33a9-4acc-83ad-5ecab0293bc2&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: j,
    },
    {
      ar: "ar",
      // <iframe
      //   id='a429695c-575d-4149-84b8-b967aa581546'
      //   src='https://www.vectary.com/viewer/v1/?model=a429695c-575d-4149-84b8-b967aa581546&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: k,
    },
    {
      ar: "ar",
      // <iframe
      //   id='451d2b4e-0e04-4e50-a46c-216963a8d14d'
      //   src='https://www.vectary.com/viewer/v1/?model=451d2b4e-0e04-4e50-a46c-216963a8d14d&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: l,
    },
    {
      ar: "ar",
      // <iframe
      //   id='61856722-6321-4cce-acbc-8182ce6e11a9'
      //   src='https://www.vectary.com/viewer/v1/?model=61856722-6321-4cce-acbc-8182ce6e11a9&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: m,
    },
    {
      ar: "ar",
      // <iframe
      //   id='c4f129e1-bdd7-4622-8f5c-f90818e279c3'
      //   src='https://www.vectary.com/viewer/v1/?model=c4f129e1-bdd7-4622-8f5c-f90818e279c3&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: n,
    },
    {
      ar: "ar",
      // <iframe
      //   id='4bbcb8b3-44a9-45de-9281-38958cc7a587'
      //   src='https://www.vectary.com/viewer/v1/?model=4bbcb8b3-44a9-45de-9281-38958cc7a587&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: o,
    },
    {
      ar: "ar",
      // <iframe
      //   id='4f94d045-79a4-430c-9d56-45d43be7b275'
      //   src='https://www.vectary.com/viewer/v1/?model=4f94d045-79a4-430c-9d56-45d43be7b275&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: p,
    },
    {
      ar: "ar",
      // <iframe
      //   id='46979fb0-67a9-4361-9dd6-cf23c6ed1612'
      //   src='https://www.vectary.com/viewer/v1/?model=46979fb0-67a9-4361-9dd6-cf23c6ed1612&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: q,
    },
    {
      ar: "ar",
      // <iframe
      //   id='8315d23e-ccee-4e75-87db-3f66272043c0'
      //   src='https://www.vectary.com/viewer/v1/?model=8315d23e-ccee-4e75-87db-3f66272043c0&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: r,
    },
    {
      ar: "ar",
      // <iframe
      //   id='840257ba-2f9f-40d7-b9cf-8e2712b39af5'
      //   src='https://www.vectary.com/viewer/v1/?model=840257ba-2f9f-40d7-b9cf-8e2712b39af5&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: s,
    },
    {
      ar: "ar",
      // <iframe
      //   id='b4c0bd4c-d57e-4dc5-bf9a-c3452d7862d8'
      //   src='https://www.vectary.com/viewer/v1/?model=b4c0bd4c-d57e-4dc5-bf9a-c3452d7862d8&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>,
      qr: t,
    },
    {
      ar: "ar",
      // <iframe
      //   id='0fd155ed-efdc-47fc-974a-cfbacaa80089'
      //   src='https://www.vectary.com/viewer/v1/?model=0fd155ed-efdc-47fc-974a-cfbacaa80089&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>,
      qr: u,
    },
    {
      ar: "ar",
      // <iframe
      //   id='cf642c1c-f74b-4201-bcd9-f0287c8accd1'
      //   src='https://www.vectary.com/viewer/v1/?model=cf642c1c-f74b-4201-bcd9-f0287c8accd1&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: v,
    },
    {
      ar: "ar",
      // <iframe
      //   id='93c96a9c-d86e-43ae-872e-fe6f8125becf'
      //   src='https://www.vectary.com/viewer/v1/?model=93c96a9c-d86e-43ae-872e-fe6f8125becf&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: w,
    },
    {
      ar: "ar",
      // <iframe
      //   id='31604b08-d9e7-4957-8b79-ab0b5c31033a'
      //   src='https://www.vectary.com/viewer/v1/?model=31604b08-d9e7-4957-8b79-ab0b5c31033a&env=studio3'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: x,
    },
    {
      ar: "ar",
      // <iframe
      //   id='c61d0edf-612b-4a1b-8754-b8427d20fbaf'
      //   src='https://www.vectary.com/viewer/v1/?model=c61d0edf-612b-4a1b-8754-b8427d20fbaf&env=teufelsbergground2'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: y,
    },
    {
      ar: "ar",
      // <iframe
      //   id='c61d0edf-612b-4a1b-8754-b8427d20fbaf'
      //   src='https://www.vectary.com/viewer/v1/?model=c61d0edf-612b-4a1b-8754-b8427d20fbaf&env=teufelsbergground2'
      //   frameborder='0'
      //   width='100%'></iframe>
      qr: z,
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/alphabets'>
          <Alphabets alphabets={alphabets} />
        </Route>
        <Route path='/mathematics'>
          <Mathematics />
        </Route>
        <Route path='/animals'>
          <Animals />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
