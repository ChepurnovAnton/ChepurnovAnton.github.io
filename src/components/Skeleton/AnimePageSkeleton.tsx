
import ContentLoader from "react-content-loader"

const AnimePageSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={950}
    viewBox="0 0 1200 950"
    backgroundColor="#343434"
    foregroundColor="#666666"
    {...props}
  >
    <rect x="147" y="325" rx="0" ry="0" width="17" height="0" /> 
    <rect x="237" y="439" rx="0" ry="0" width="0" height="2" /> 
    <rect x="2" y="6" rx="10" ry="10" width="24%" height="420" /> 
    <rect x="81" y="148" rx="0" ry="0" width="0" height="1" /> 
    <rect x="310" y="180" rx="10" ry="10" width="50%" height="30" /> 
    <rect x="310" y="243" rx="10" ry="10" width="30%" height="12" /> 
    <rect x="310" y="300" rx="10" ry="10" width="30%" height="100" /> 
    <rect x="1" y="450" rx="10" ry="10" width="100%" height="70" /> 
    <rect x="1" y="550" rx="10" ry="10" width="27%" height="20" /> 
    <rect x="1" y="595" rx="10" ry="10" width="27%" height="50" /> 
    <rect x="60" y="700" rx="10" ry="10" width="17%" height="100" /> 
    <rect x="20" y="371" rx="0" ry="0" width="0" height="5" /> 
    <rect x="275" y="700" rx="10" ry="10" width="17%" height="100" /> 
    <rect x="500" y="700" rx="10" ry="10" width="17%" height="100" /> 
    <rect x="715" y="700" rx="10" ry="10" width="17%" height="100" /> 
    <rect x="935" y="700" rx="10" ry="10" width="17%" height="100" />
  </ContentLoader>
)

export default AnimePageSkeleton
