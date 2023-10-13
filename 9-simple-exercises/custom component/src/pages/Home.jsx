import Button from '../components/Button'

function Home() {
    const clickHandler = (id) => {
        alert(`Your clicked on Button ${id}`)
      }
      return <div>
        <div className="nav">
          <a href="#">Home</a>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <a key={id} href="#">Exercise {id}</a>)}
        </div>
        <div className="action">
          { [1, 2, 3].map(number => <Button key={number} id={number} onClick={clickHandler}>Button {number}</Button>) }
        </div>
      </div>;
}

export default Home