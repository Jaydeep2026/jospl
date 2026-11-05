import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

/**
 * Page title banner.
 * items: [{ label, to? }] - the last item (without `to`) is rendered as the active crumb.
 */
export default function Breadcrumb({ title, items = [] }) {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center padding-xl text-light"
      style={{ backgroundImage: 'url(/assets/img/standard-bg.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{title}</h1>
            <ul className="breadcrumb">
              {items.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && ' '}
                  <li className={item.to ? undefined : 'active'}>
                    {item.to === '#' ? (
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {item.label}
                      </a>
                    ) : item.to ? (
                      <Link to={item.to}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
