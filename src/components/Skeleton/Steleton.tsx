import { FC } from "react";
import ContentLoader from "react-content-loader";

interface MyLoaderProps {
  key: number;
}

const MyLoader: FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={295}
    viewBox="0 0 840 295"
    backgroundColor="#343434"
    foregroundColor="#666666"
    {...props}
  >
    <rect x="91" y="122" rx="0" ry="0" width="0" height="33" />
    <rect x="182" y="168" rx="0" ry="0" width="88" height="0" />
    <rect x="18" y="33" rx="10" ry="10" width="165" height="239" />
    <rect x="206" y="40" rx="10" ry="10" width="346" height="33" />
    <rect x="207" y="89" rx="10" ry="10" width="300" height="8" />
    <rect x="206" y="113" rx="10" ry="10" width="550" height="152" />
  </ContentLoader>
);

export default MyLoader;
