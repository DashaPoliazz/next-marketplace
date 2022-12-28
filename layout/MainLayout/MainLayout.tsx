import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { MainLayoutProps } from "./MainLayout.props";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export const withMainLayout = <T extends Record<string, unknown>>(
  Component: React.FC<T>
) => {
  return (props: T) => {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
