import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

export const useAnalytics = () => {
  const location = useLocation();

  const sendPageView = () => {
    if (import.meta.env.MODE === 'development') {
      console.log('send page view event', location.pathname);
      return;
    }
    if (import.meta.env.MODE === 'production') {
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  };

  const sendEvent = ({
    category,
    action,
    label,
  }: {
    category: string;
    action: string;
    label?: string;
  }) => {
    if (import.meta.env.MODE === 'development') {
      console.log('send event', category, action, label);
      return;
    }
    // Send a custom event
    ReactGA.event({
      category,
      action,
      label, // optional
    });
  };

  return { sendPageView, sendEvent };
};
