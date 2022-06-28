import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

// Style Imports
import { LoadingWrapper } from "styles/common";

// Local Imports
import {getModDetailsLoading, getModListLoading} from "client/store/selectors/modSelector"

const AppLoader = ({children}) => {
  const listLoading = useSelector(getModListLoading);
  const detailLoading = useSelector(getModDetailsLoading);
  return (
    <Fragment>
      <LoadingWrapper show={listLoading || detailLoading}>
        <TailSpin height="100" width="100" color="black" ariaLabel="loading" />
      </LoadingWrapper>
      {children}
    </Fragment>
  );
};

export default AppLoader;
