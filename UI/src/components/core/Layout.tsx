import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';


const Layout = (props : any) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">{props.children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
