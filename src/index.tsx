import {render} from "react-dom";
import Counter from "./components/counter";

render(
    <div>
        Hello world
        <Counter />
    </div>,
    document.getElementById('root')
)
