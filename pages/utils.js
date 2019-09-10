import fetch from 'isomorphic-unfetch';
import { ungzip } from 'node-gzip';
import datasets from '../data/datasets';

export async function fetchDataset(name=null) {
  // Setup an array to get the property name of each dataset
  const datasetNames = Object.keys(datasets);

  let res;
  if (name === null) {
    // Fetch the json for the first dataset
    res = await fetch(datasets[datasetNames[0]].urls.compressed);
  } else {
    // Fetch the json of the named dataset
    res = await fetch(datasets[name].urls.compressed);
  }
  const resBuffer = await res.buffer();
  const decompressed = await ungzip(resBuffer);
  const decompressedString = decompressed.toString();
  return JSON.parse(decompressedString);
}
