import * as React from 'react';

import {Styles} from './styles';

const StyleGuide = () => {

  return(
    <Styles>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta mauris ut libero cursus, at cursus dolor aliquam. Sed feugiat ornare urna, et mattis ipsum. Integer et facilisis nisi. Curabitur nec orci urna. Sed enim tortor, facilisis in dui non, malesuada consectetur nibh.</p>
        <a href="#">Hyperlink</a>
        <a href="#" className="visited">Visited Hyperlink</a>
        <a href="#" className="hover">Hover Hyperlink</a>
      </div>
      <div>
        <section className="bg-gradient">
          <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta mauris ut libero cursus, at cursus dolor aliquam. Sed feugiat ornare urna, et mattis ipsum. Integer et facilisis nisi. Curabitur nec orci urna. Sed enim tortor, facilisis in dui non, malesuada consectetur nibh.
          </p>
        </section>
      </div>
    </Styles>
  )
}

export default StyleGuide;