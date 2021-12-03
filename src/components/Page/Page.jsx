import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { error, loading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    }

    return (
        <Fragment>
            <Header />
            <button className={styles.refresh} onClick={() => { window.location.reload(); }}>
                Refresh
            </button>
            { !forecast &&
                <div className={`${styles.box} position-relative`}>
                    {/* form */}
                    { !loading && <Form submitSearch={onSubmit} /> }
                    { /* error */}
                    { error && <Error message={error} /> }
                    { /* loader */}
                    { loading && <Loader /> }
                    { /* forecast */}
                </div>
            }
            {forecast && <Forecast forecast={forecast} /> }
        </Fragment>
    );
};

export default Page;
