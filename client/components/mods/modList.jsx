import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

// Local Imports
import {
  getModDetailsAction,
  getModsListAction,
} from "client/store/thunks/modThunk";

// Style Imports
import { GridContainer, Grid } from "styles/list";

// Component Imports
import { ModCard } from "client/components/mods";
import {
  getModList,
  getModListError,
  getModListPageNumber,
  getModsCount,
} from "client/store/selectors/modSelector";

const ModList = () => {
  const dispatch = useDispatch();
  const modList = useSelector(getModList);
  const totalMods = useSelector(getModsCount);
  const modListError = useSelector(getModListError);
  const pageNumber = useSelector(getModListPageNumber);

  useEffect(() => {
    dispatch(getModsListAction());
  }, [dispatch]);

  return (
    <GridContainer id="grid-container">
      {modListError ? (
        <div>No Mods Found</div>
      ) : (
        <>
          {!!modList && (
            <Grid>
              {modList.map((mod, index) => (
                <ModCard mod={mod} key={index} />
              ))}
            </Grid>
          )}
        </>
      )}
    </GridContainer>
  );
};

export default ModList;
