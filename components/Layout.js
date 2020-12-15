/* eslint-disable react/prop-types */
import "./Layout.scss";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content"> {children} </div>
    </div>
  );
};
export default Layout;
