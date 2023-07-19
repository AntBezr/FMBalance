import './App.css';
import NewChart from './NewChart';

function App() {
  return (
    <div className="App">
      <div className="template">
      <div className='header'>
        <div className="hLeft">
        <p className='heading'> My balance</p>
       <h2 className='balance'>$921.48</h2>
        </div>
       <div className="hRight">
        <div className="c1"></div>
        <div className="c2"></div>
       </div>
      </div>
      <div className='spendings'>
        <div className='spendingsTitle'>
         <h2>Spending - Last 7 days</h2> 
        </div>
        <div className='tables'>
          {NewChart()}
        </div>
        <div className="line"></div>

    <div className="bottomInfo">
    <p>Total this month</p> 

      <div className="bottomDown">
        
        <h2>$478.33</h2>
        <div className="bottomRight">
        <h5>+2.4%</h5>
        <p>from last month</p>
        
        </div>
</div>
      
    </div>
       
        
      </div>

      </div>
      



      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/AntBezr">Bezruchenkov Anton</a>.
      </div>
    </div>
  );
}

export default App;
