import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { social } = useSiteMetadata()

  let fb, tw, goo = null

  if (social.facebook){
    fb = <li><a href={ 'https://facebook.com/' + social.facebook }><i className="fa fa-facebook"></i></a></li>
  }

  if (social.twitter){
    tw = <li><a href={ 'https://twitter.com/' + social.twitter }><i className="fa fa-twitter"></i></a></li>
  }

  if (social.google){
    goo = <li><a href={ 'https://google.com/' + social.google }><i className="fa fa-google-plus"></i></a></li>
  }


  return (
    <ul className="header-social">
        { fb }{ tw }{ goo }
     </ul>
   )
}
