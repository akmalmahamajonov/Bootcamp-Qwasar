const List = props => {
    return (
      <div>
        <div className="coolHeader">{props.list}</div>
        <ul>
          {props.list.map(function(listItem) {
            return (<li className="coolListItem">
                {listItem}
            </li>);
          })}
        </ul>
      </div>
    )
}

export default List;
