import Account from "@/components/Account";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Orders from "@/components/Orders";
import Stepper from "@/components/Stepper";
import Success from "@/components/Success";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stepper/>
      <Orders/>
      <Success/>
      <Account/>
      <Footer/>
    </div>
  );
}
