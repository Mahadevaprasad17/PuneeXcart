import Footer from "../components/Footer";
import Products from "../pages/Products";
export default function Home() {
    return (
        <>
            <div
                className="home"
                style={{
                    background: `url("https://cmsimages.shoppersstop.com/Festive_sale_main_kv_web_71112ada9c/Festive_sale_main_kv_web_71112ada9c.png") no-repeat center center/cover`,
                    height: "50vh",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
            </div>
            <Products />
            <Footer />
        </>
    );
}
