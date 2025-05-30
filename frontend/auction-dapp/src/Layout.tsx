import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";

const Layout = ({
  children,
}: {
  children: React.ReactComponentElement<never> | React.ReactElement;
}) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
