import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getHeader(lang) {
  return client.fetch(groq`*[_type == 'header-info']`);
}
export async function getHero(lang) {
  return client.fetch(groq`*[_type == 'hero']`);
}

export async function getPassport(){
  return client.fetch(groq`*[_type == 'passport']`);
}
export async function getAvantages(){
  return client.fetch(groq`*[_type == 'avantages']`);
}
export async function getNft(){
  return client.fetch(groq`*[_type == 'nft']`);
}
export async function getQR(){
  return client.fetch(groq`*[_type == 'qrcode']`);
}
export async function getVideo(){
  return client.fetch(groq`*[_type == 'videoFooter']`);
}


export async function getFooter(lang) {
  return client.fetch(groq`*[_type == 'footer']`);
}
export async function getPage(lang) {
  return client.fetch(groq`*[_type == 'pageFooter']`);
}

