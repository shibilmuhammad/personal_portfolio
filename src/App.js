import { Provider, useSelector } from "react-redux";
import { Header } from "./components/Header";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import appStore from "./utils/appStore";

function App() {
	const theme = useSelector((store) => store?.theme?.theme);
	return (
		
			<div
				className={
					theme === "dark"
						? "dark bg-slate-50 dark:bg-black "
						: " bg-slate-50 dark:bg-black "
				}>
				<Header />
				<Home />
				<About />
				<Skills />
				<Projects />
				<Experiences />
				<Contact />
			</div>
		
	);
}

export default App;
