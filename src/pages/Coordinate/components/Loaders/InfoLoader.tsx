import React from "react"
import ContentLoader from "react-content-loader";

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={1450}
    height={570}
    viewBox="0 0 2000 570"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1450" height="120" />
    <rect x="0" y="150" rx="0" ry="0" width="1450" height="120" />
    <rect x="0" y="300" rx="0" ry="0" width="1450" height="120" />
    <rect x="0" y="450" rx="0" ry="0" width="1450" height="120" />
  </ContentLoader>
)

export default InfoLoader