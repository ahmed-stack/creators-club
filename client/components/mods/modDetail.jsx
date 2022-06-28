import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";

// Local Imports
import { getModDetailsAction } from "client/store/thunks/modThunk";
import { getModDetails } from "client/store/selectors/modSelector";

// Style Imports
import {
  DetailWrapper,
  GridWrapper,
  TagContainer,
  TitleWrapper,
} from "styles/details";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { calculateTime } from "client/helpers/common";

const ModDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const mod = useSelector(getModDetails);

  const { modId } = router.query;

  useEffect(() => {
    if (modId) {
      dispatch(getModDetailsAction(modId));
    }
  }, [dispatch, modId]);

  return (
    <DetailWrapper>
      {!!mod && (
        <>
          <TitleWrapper>
            <div className="mod-title">{mod?.title}</div>
            <div className="mod-subscriber">
              {calculateTime(mod.createdAt)} months ago - {mod?.subscriberCount}{" "}
              subscribers
            </div>
          </TitleWrapper>
          <GridWrapper>
            <div className="grid">
              <Carousel showThumbs={false}>
                {mod.screenshots.map((screenshot, index) => (
                  <img src={screenshot.url} key={index} />
                ))}
              </Carousel>

              <div className="detail-card">
                <h1>OVERVIEW</h1>
                <p>{mod.shortDescription}</p>
                <TagContainer>
                  {mod.tags.map((tag, index) => (
                    <div key={index}>{tag.name}</div>
                  ))}
                </TagContainer>
                <table>
                  <tbody>
                    <tr>
                      <td className="key-div">File Size</td>
                      <td className="value-div">
                        {(mod.fileSize / 1000000).toFixed(1)} MB
                      </td>
                    </tr>
                    <tr>
                      <td className="key-div">Created</td>
                      <td className="value-div">
                        {calculateTime(mod.createdAt)} months ago
                      </td>
                    </tr>
                    <tr>
                      <td className="key-div">Updated</td>
                      <td className="value-div">
                        {calculateTime(mod.updatedAt)} months ago
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </GridWrapper>
        </>
      )}
    </DetailWrapper>
  );
};

export default ModDetail;
