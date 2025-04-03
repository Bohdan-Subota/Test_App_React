import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main">
        {pageTitle && <h1 className="layout__title">{pageTitle}</h1>}
        <div className="layout__content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 