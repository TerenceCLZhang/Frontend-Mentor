import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <img src="" alt="" />
      </header>
      <main>
        <div>
          <div>
            <span>Bill</span>
            <input type="number" />
          </div>
          <div>
            <span>Select Tip %</span>
            <div>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="number" placeholder="Custom" />
            </div>
          </div>
          <div>
            <span>Number of People</span>
            <input type="number" />
          </div>
        </div>

        <div>
          <div>
            <div>
              <span>Tip Amount</span>
              <span>/ person</span>
            </div>
            <span>$4.37</span>
          </div>

          <div>
            <div>
              <span>Total</span>
              <span>/ person</span>
            </div>
            <span>$4.37</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
