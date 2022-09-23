import React, {useState, useEffect} from 'react'

const HigherComponent=(WrappedComponent) =>{
  
  function HigherComponent() {

    const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 750px)").matches)
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 750px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return (
      <div>
        <WrappedComponent
        matches = {matches}
        setMatches= {setMatches}
        />
      </div>
    )
  }

  return HigherComponent
}

export default HigherComponent
