/**
 * Created by ZhangLynn on 2018/7/31
 **/
import React from 'react';
const MyLoadingComponent = ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
export default MyLoadingComponent;