import Account from "@/components/Account";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Stepper from "@/components/Stepper";
import Success from "@/components/Success";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stepper/>
      <Success/>
      <Account/>
      <Footer/>
    </div>
  );
}
