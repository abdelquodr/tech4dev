
export const Navbar = () => {
    return  (
        <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo"> 
              <a href="index-2.html">
                  <h4 style={{color: "#4280BF"}}> TECH<span style={{color: 'red'}}>4</span>DEV MOVIE</h4>   
              </a>
            </div>
          </nav>
        <form>
          <div className="top-search">
            <select>
              <option value="united"> Options </option>
              <option value="action">Action Film</option>
              <option value="comedy">Comedy Film</option>
              <option value="sci-fi">Sci-fi Film</option>
            </select>
               <input type="text" placeholder="Search for StarWar character" />
          </div>
        </form>
        </div>
      </header>
    )
}