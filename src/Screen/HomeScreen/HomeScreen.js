import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFirstMovie, getMovie } from "../../Redux/movieAction.js";

function HomeScreen(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const firstMovie = state?.movieData?.firstMovie?.results[0];
  // console.log('.....',state.movieData.firstMovie.results[0])
  // console.log('0000')
  useEffect(() => {
    dispatch(getMovie(pageNumber));
    dispatch(getFirstMovie());
  }, [dispatch, pageNumber]);

  return state.movieData.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280" +firstMovie?.backdrop_path}
      >
        <InnerHeroSection>
          <Title>{firstMovie?.title}</Title>
          <Description> {firstMovie?.overview} </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle></MoviesTitle>
        <CardsContainer>
          {state.movieData.movies.map((page) =>
            page.map((item) => (
              <Card
                Key={item.id}
                id={item.id}
                name={item.title}
                img={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              />
            ))
          )}
        </CardsContainer>
        <LoadMore
          isLoading={false}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
