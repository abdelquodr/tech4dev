
export const Info = ({count}) => {

    return (
        <div className="topbar-filter">
        <p>Found <span> {count} characters </span> in total</p>
        <label>Sort by:</label>
          <option value="popularity">Popularity</option>
        <span className="list"><i className="ion-ios-list-outline active" /></span>
        <span className="grid"><i className="ion-grid" /></span>
      </div>
    )
}