import React from 'react';
import './TimelineElements.css';


const TimeLine = () => {
    return (
        <div id='roadmap'>
          <h1><center>Roadmap</center></h1>
          <div class="timeline">
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">2022/01</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <p class="timeline__paragraph">
     Consensus mechanism
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <p class="timeline__paragraph">
     Witness nodes network testing
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">2022/03</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">2022/06</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <p class="timeline__paragraph">
      Alpha release with p2p transfer, ledger implementation
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <p class="timeline__paragraph">
    Beta testing with simple interface    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">2022/09</div>
  </div>

  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">2022/12</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <p class="timeline__paragraph">
      Dpos network in production, full release
    </p>
  </div>

  
  <div class="timeline__component timeline__component--bottom timeline__component--bg">
    <p class="timeline__paragraph">
      Highly scalable clustered full nodes network
    </p>
   
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
    <div class="timeline__point timeline__point--bottom"></div>
  </div>
  <div class="timeline__component timeline__component--bottom">
    <div class="timeline__date">2023/03</div>
  </div>
</div>
 </div>
        
    )
}

export default TimeLine
