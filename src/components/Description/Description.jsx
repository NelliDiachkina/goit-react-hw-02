import { GiCoffeeCup } from 'react-icons/gi';

import css from './Description.module.css';

const Description = () => {
  return (
    <div className={css.containerDescription}>
      <h1>Sip Happens Café</h1>
      <GiCoffeeCup size="110" />
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
