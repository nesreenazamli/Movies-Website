import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieInfo } from "../../Redux/movieAction";
import { useHistory, useParams } from "react-router";

function MovieScreen(props) {
  const state = useSelector((state) => state);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    dispatch(getMovieInfo(params.id));
  }, [dispatch, params.id]);

  return state.movieData.movieInfo.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan onClick={goBack}>Back</NavigatorSpan>
          <NavigatorSpan>
            /{state.movieData.movieInfo.movieInfo.title}
          </NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={
          "https://image.tmdb.org/t/p/w500/" +
          state.movieData.movieInfo.movieInfo.backdrop_path
        }
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={
                "https://image.tmdb.org/t/p/w500/" +
                state.movieData.movieInfo.movieInfo.poster_path
              }
              alt={state.movieData.movieInfo.movieInfo.title}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {state.movieData.movieInfo.movieInfo.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {state.movieData.movieInfo.movieInfo.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {state.movieData.movieInfo.movieInfo.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
    </FlexColumn>
  );
}

export default MovieScreen;
