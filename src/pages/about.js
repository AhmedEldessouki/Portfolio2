/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { colors, mediaQueries, weights, h1L } from '../styles';
import Layout from '../components/layout';

function About() {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const container = css`
    display: flex;
    flex-direction: column;
    margin: 10% auto;
    grid-gap: 10px;
    padding: 0 9%;
    align-items: center;
    justify-items: center;
    p {
      text-align: justify;
      font-size: 123%;
      width: 85%;
      margin-bottom: 0;
    }
    ${mediaQueries.phoneLarge} {
    }
    ${mediaQueries.s} {
      p {
        font-size: 80%;
      }
    }
  `;

  function getMyAge() {
    const today = new Date();
    const todaysYear = today.getFullYear();
    const myBirthday = new Date('apr 4 1989');
    const myBirthyear = myBirthday.getFullYear();
    const myBirthdayThisYear = new Date(myBirthday);
    myBirthdayThisYear.setFullYear(todaysYear);

    return todaysYear - myBirthyear - (today < myBirthdayThisYear ? 1 : 0);
  }

  return (
    <Layout
      headerData={{
        title: 'Ahmed ElDessouki',
        height: '300px',
        tittleMarginBottom: '20px',
        tittlePadding: '20px',
        children: (
          <>
            <h2 css={h1L}>Coding Towards a Better Tomorrow.</h2>
          </>
        ),
      }}>
      <div css={container}>
        <Image
          fixed={data.imageOne.childImageSharp.fixed}
          alt="Ahmed ElDessouki's Picture"
        />
        <p>
          I am Ahmed Eldessouki. I am
          {` ${getMyAge()} `}
          years old from Cairo, Egypt currently living in Istanbul, Turkey. I
          looking for a new opportunity as a Front-End Developer. I graduated
          from University Of Wales. I worked at RoomMe as an entry level
          Front-End Developer. I am a very passionate about Front-End Developer.
          Always developing myself. A strength of mine, is my ability to be
          observant of small details and to stay up-to-date with the newest
          technologies and techniques.
        </p>
        <h1>Nam quid possumus facere melius?</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inquit,
          respondet: Quia, nisi quod honestum est, nullum est aliud bonum! Non
          quaero iam verumne sit; Crasso, quem semel ait in vita risisse
          Lucilius, non contigit, ut ea re minus agelastoj ut ait idem,
          vocaretur. Duo Reges: constructio interrete. Portenta haec esse dicit,
          neque ea ratione ullo modo posse vivi; Et ais, si una littera commota
          sit, fore tota ut labet disciplina. Immo vero, inquit, ad beatissime
          vivendum parum est, ad beate vero satis. Quod vestri non item. Quibus
          natura iure responderit non esse verum aliunde finem beate vivendi, a
          se principia rei gerendae peti; Quam ob rem utique idem faciunt, ut si
          laevam partem neglegerent, dexteram tuerentur, aut ipsius animi, ut
          fecit Erillus, cognitionem amplexarentur, actionem relinquerent. Cum
          autem venissemus in Academiae non sine causa nobilitata spatia,
          solitudo erat ea, quam volueramus. Itaque homo in primis ingenuus et
          gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum
          ad Q. De maximma autem re eodem modo, divina mente atque natura mundum
          universum et eius maxima partis administrari. Bonum incolumis acies:
          misera caecitas.{' '}
        </p>

        <dl>
          <dt>
            <dfn>Recte, inquit, intellegis.</dfn>
          </dt>
          <dd>
            At vero illa, quae Peripatetici, quae Stoici dicunt, semper tibi in
            ore sunt in iudiciis, in senatu.
          </dd>
          <dt>
            <dfn>Magna laus.</dfn>
          </dt>
          <dd>
            His singulis copiose responderi solet, sed quae perspicua sunt longa
            esse non debent.
          </dd>
        </dl>

        <ul>
          <li>Nam his libris eum malo quam reliquo ornatu villae delectari.</li>
          <li>
            Varietates autem iniurasque fortunae facile veteres philosophorum
            praeceptis instituta vita superabat.
          </li>
          <li>Quia nec honesto quic quam honestius nec turpi turpius.</li>
          <li>Quid ergo?</li>
        </ul>

        <p>
          Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint,
          philosophi ante fiant. Fatebuntur Stoici haec omnia dicta esse
          praeclare, neque eam causam Zenoni desciscendi fuisse.{' '}
        </p>

        <h2>Occultum facinus esse potuerit, gaudebit;</h2>

        <p>
          In primo enim ortu inest teneritas ac mollitia quaedam, ut nec res
          videre optimas nec agere possint. Quid est igitur, cur ita semper deum
          appellet Epicurus beatum et aeternum? Nec enim, dum metuit, iustus
          est, et certe, si metuere destiterit, non erit; Sin te auctoritas
          commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
          anteponebas? At enim, qua in vita est aliquid mali, ea beata esse non
          potest. Quare ad ea primum, si videtur; Dicet pro me ipsa virtus nec
          dubitabit isti vestro beato M. Color egregius, integra valitudo, summa
          gratia, vita denique conferta voluptatum omnium varietate. Facete M.
          Nullus est igitur cuiusquam dies natalis. Quodsi Graeci leguntur a
          Graecis isdem de rebus alia ratione compositis, quid est, cur nostri a
          nostris non legantur? Non prorsus, inquit, omnisque, qui sine dolore
          sint, in voluptate, et ea quidem summa, esse dico. Quis est enim, in
          quo sit cupiditas, quin recte cupidus dici possit? Sed quae tandem
          ista ratio est?{' '}
        </p>
      </div>
      {/* TODO:
   1) Fill out my info
   2) add picture
   3)  need to add github link
  */}
    </Layout>
  );
}

export default About;
