import "../styles.css";

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP": // First Contentful Paint
      break;
    case "LCP": // Largest Contentful Paint
      break;
    case "CLS": // Cumulative Layout Shift
      break;
    case "FID": // First Input Delay
      break;
    case "TTFB": // Time To First Byte
      break;
    case "Next.js-hydration":
      break;
    case "Next.js-route-change-to-render":
      break;
    case "Next.js-render":
      break;
    default:
      break;
  }
}
