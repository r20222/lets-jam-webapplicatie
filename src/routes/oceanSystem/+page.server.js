import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import { json } from '@sveltejs/kit'

export async function load() {

  let query = gql`
  query Assets {
    dashboard(where: {id: "cln32p50anrma0bw03q8fsa54"}) {
      buttonTop
      map {
        title
        opties
      }
      nav {
        navLinkjes
      }
      ocean {
        titlePage
        oceanStartDate {
          title
          date
        }
        oceanInfotext {
          infotext {
            markdown
          }
        }
        oceanImage {
          image {
            url
          }
        }
        oceanExtractionDate {
          markdown
        }
      }
      river {
        slug
      }
      title
      trashRemoved {
        total
        month
      }
    }
  }
  
  `
  const dataHygraph = await hygraph.request(query)
  
  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/ocean")
  const dataApi = await grrrData.json()

  const riverData = await fetch("https://fdnd-toc-api.netlify.app/river");
  const riverDataJson = await riverData.json();

  const oceanData = await fetch("https://fdnd-toc-api.netlify.app/ocean");
  const oceanDataJson = await oceanData.json();


  return { dataHygraph, dataApi, riverDataJson, oceanDataJson };
}