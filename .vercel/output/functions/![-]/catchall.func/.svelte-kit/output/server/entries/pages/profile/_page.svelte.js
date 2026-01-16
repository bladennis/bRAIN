import { x as await_block, y as ensure_array_like } from "../../../chunks/index.js";
import { H as HeaderHome, N as Nav } from "../../../chunks/HeaderHome.js";
import { GraphQLClient, gql } from "graphql-request";
import { k as escape_html } from "../../../chunks/context.js";
function GegevensHuis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const getData = async () => {
      const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`;
      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`
        }
      });
      const query = gql`
    query {
      gegevens(stage: DRAFT, last: 1) {
        aantalRegenpijpen
        dakOppervlakte
        inhoudRegenton
        typeDak
        postcode
        huisnummer
      }
    }
    `;
      const data = await graphQLClient.request(query);
      console.log(data.gegevens);
      return data;
    };
    await_block($$renderer2, getData(), () => {
    }, (data) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(data.gegevens);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let gegevens = each_array[$$index];
        $$renderer2.push(`<section class="gegevens svelte-q0bv1r"><h2 class="svelte-q0bv1r">Gegevens</h2> <section class="svelte-q0bv1r"><section class="svelte-q0bv1r"><p class="svelte-q0bv1r">Daktype</p> <p class="svelte-q0bv1r">${escape_html(gegevens.typeDak)}</p></section> <div class="svelte-q0bv1r"></div></section> <section class="svelte-q0bv1r"><section class="svelte-q0bv1r"><p class="svelte-q0bv1r">Aantal vierkante meter van het huis</p> <p class="svelte-q0bv1r">${escape_html(gegevens.dakOppervlakte)}</p></section> <div class="svelte-q0bv1r"></div></section> <section class="svelte-q0bv1r"><section class="svelte-q0bv1r"><p class="svelte-q0bv1r">Aantal regenpijpen</p> <p class="svelte-q0bv1r">${escape_html(gegevens.aantalRegenpijpen)}</p></section> <div class="svelte-q0bv1r"></div></section> <section class="svelte-q0bv1r"><section class="svelte-q0bv1r"><p class="svelte-q0bv1r">Aantal liter in de regenton</p> <p class="svelte-q0bv1r">${escape_html(gegevens.inhoudRegenton)}</p></section> <div class="svelte-q0bv1r"></div></section></section>`);
      }
      $$renderer2.push(`<!--]-->`);
    });
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const getData = async () => {
      const endpoint = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clilodskp031201uhbhpdaltk/master`;
      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcyNTM0NTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpbG9kc2twMDMxMjAxdWhiaHBkYWx0ay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmM5MDMyN2YtZjQ3Ni00YzlkLTlmMjAtNGViMzYwMzE0YTg1IiwianRpIjoiY2xqNDM1NHk3MHJ2bTAxdDk1d2Y4YmxyOCJ9.mtX12JDjdjYcfHqwUg8HeDHMSvfRi2KVhCxRU5r4chMmpQX1BvgZgDvml03NI7zsMZKeVWL_9YIDrjJHw12M-uwWbAbERQlZMhENVIduCyOVfVkZrd31t1tPMikqo2jH3jtMgL-1H01Svk4SdlSub04BTzdYs7s4Xs0z-BCA5EGRr9fXWg75_ckhla4nyYsF0i4v2SazPhgZuD-kjVSK6mlmMCr0kbQg_3vSwNwlS2FWcBTrYR4NXKdWgM2kxipdve74chk8S6o-U_SqvatZUHIAG264asJm67r0q83sPG3sqRAjaC2QyTV8-6dhxSJKI65mfpoxXRORBfLk5wWfAqK8CRAe0p0RyznS_kiPpUyAaOT5hMLwufKKRYBuqgAN7DtK8WWU8uSVFLHHZeK2SM-uGTi3oFM_aRP9pOGVX5pjJnjII6yxedWa3jsb52nJ3neUo_oXIv7LbNfaxPTg6qGICp7jQJ-TQRQ1IDTGpQGYu0BXftXsqZKYTVYDS0Swme1ZMlOgkf-nX2wZM85ktdugZL7Kna1yWbZpOMJx_pnHhAj-yzh1Id7qrnYrHGL220cXVBRKNQJz0A0VXNWOtMG5P7DyuEAd9zhoOA4YgOcxyXnrFls9a8qL-x0ADqWf2HbndxA7evk3ByGMvQz9NwhHscp2aCC0vjvtfBQ2OCM`
        }
      });
      const query = gql`
        query {
        gegevens(stage: DRAFT, last: 1) {
            aantalRegenpijpen
            dakOppervlakte
            inhoudRegenton
            typeDak
            postcode
            huisnummer
        }
        }
        `;
      const data = await graphQLClient.request(query);
      console.log(data.gegevens);
      return data;
    };
    await_block($$renderer2, getData(), () => {
    }, (data) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(data.gegevens);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let gegevens = each_array[$$index];
        HeaderHome($$renderer2);
        $$renderer2.push(`<!----> <main class="profile svelte-maq4gq"><h2 class="svelte-maq4gq">Profiel</h2> <section class="general-info svelte-maq4gq"><section class="profile-infoblock svelte-maq4gq"><section><p class="svelte-maq4gq">Email</p> <p class="svelte-maq4gq">b-rain@spatwater.nl</p></section></section> <section class="profile-infoblock svelte-maq4gq"><section><p class="svelte-maq4gq">Locatie</p> <p class="svelte-maq4gq">${escape_html(gegevens.postcode)}, ${escape_html(gegevens.huisnummer)}</p></section></section> <section class="roofs svelte-maq4gq"><section class="house svelte-maq4gq"><img src="images/houseprofile.png" alt="" class="svelte-maq4gq"/> <section class="svelte-maq4gq"><p class="svelte-maq4gq">Huis dak 1</p></section> <section class="detail-info svelte-maq4gq"><section class="barrel-infoblock svelte-maq4gq"><section class="svelte-maq4gq"><p class="svelte-maq4gq">Regenton 1</p> <img src="images/regenton.png" alt="regenton" class="svelte-maq4gq"/></section> <button class="svelte-maq4gq">+</button></section> <section class="profile-gegevens">`);
        GegevensHuis($$renderer2);
        $$renderer2.push(`<!----></section></section></section> <button class="homeadd svelte-maq4gq">Huis toevoegen</button></section></section> `);
        Nav($$renderer2);
        $$renderer2.push(`<!----></main>`);
      }
      $$renderer2.push(`<!--]-->`);
    });
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
