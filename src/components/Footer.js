
export const Footer = () => {
    return (
   
  <footer className="ht-footer">
  <div className="container">
    <div className="flex-parent-ft">
      <div className="flex-child-ft item1">
        <span >
          <h6 style={{color: "#4280BF"}}> Tech<span style={{color:"red"}}>4</span>dev</h6>
        </span>
        <p>7, Omo Ighodalo Street <br />
         Ogudu GRA. Ogudu, Lagos</p>
         <p>enquiries@tech4dev.com</p>
        <p>Call us: <span >+01) 202 342 6789</span></p>
      </div>
      <div className="flex-child-ft item2">
        <h4>Resources</h4>
        <ul>
          <li><span >About</span></li> 
          <li><span >Blockbuster</span></li>
          <li><span >Contact Us</span></li>
          <li><span >Forums</span></li>
          <li><span >Blog</span></li>
          <li><span >Help Center</span></li>
        </ul>
      </div>
      <div className="flex-child-ft item3">
        <h4>Legal</h4>
        <ul>
          <li><span >Terms of Use</span></li> 
          <li><span >Privacy Policy</span></li>	
          <li><span >Security</span></li>
        </ul>
      </div>
      <div className="flex-child-ft item4">
        <h4>Account</h4>
        <ul>
          <li><span >My Account</span></li> 
          <li><span >Watchlist</span></li>	
          <li><span >Collections</span></li>
          <li><span >User Guide</span></li>
        </ul>
      </div>
      <div className="flex-child-ft item5">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
        <form action="#">
          <input type="text" placeholder="Enter your email..." />
        </form>
        <span  className="btn">Subscribe now <i className="ion-ios-arrow-forward" /></span>
      </div>
    </div>
  </div>
</footer>
    )
}