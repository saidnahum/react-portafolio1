import { useContext } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { ProductList } from "./components/ProductList";
import { Toggle } from "./components/Toggle";
import { ThemeContext } from "./context";

function App() {

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div 
			style={{ background: darkMode ? "#222" : "white", color: darkMode && "white" }}
			/*className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}*/
			className=""
		>
			<Toggle/>
			<Intro/>
			<About/>
			<ProductList/>
			<Contact/>
		</div>
	);
}

export default App;

