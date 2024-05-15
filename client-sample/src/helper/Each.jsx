import { Children } from 'react'

export const Each = ({ render, of }) => {
    Children.toArray(of.map((item, index) => render(item, index)));
}

/**
 * Usage: <Each of={array} render={(item,index) =>
 *          <li>{`${index}: ${item.name}`}</li>    
 *          } />
 */