import image from 'images/bmc-button.png';

export const BuyMeABoosterButton = () => {
  return (
    <a href="https://www.buymeacoffee.com/richardhpa" target="blank">
      <img style={{ height: '40px' }} alt="Buy me a booster pack" src={image} />
    </a>
  );
};
