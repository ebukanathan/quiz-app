// import DateCounter from "./DateCounter";

import DateCounter from "./DateCounter";
import Header from "./Header";
import Mainpage from "./Mainpage";
function App() {
  return (
    <div>
      <Header />
      <Mainpage>
        <DateCounter />
      </Mainpage>
    </div>
  );
}

export default App;
