import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styles";
import { Container } from "./components/styles/commons/Container.styles";
import { theme } from "./constants/theme";
import { SearchForm } from "./components/forms/SearchForm";
import { useState } from "react";
import { SearchResults } from "./types/SearchResults";
import { Spacer, YCenter } from "./components/styles/commons/Utils.styles";
import { ProfileCard } from "./components/cards/ProfileCard";
import { Helmet } from "react-helmet";
import { Spinner } from "./components/commons/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResults | null>(null);

  const resultsCount = results?.items?.length;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Github Registry</title>

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        </style>
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Container>
          <h1>Github Registry</h1>
          <p>Search GitHub for users and organizations.</p>

          <SearchForm
            emitResults={(results) => setResults(results)}
            {...{ isLoading, setIsLoading }}
          />

          {isLoading ? (
            <YCenter $withBorder $marginTop={20}>
              <Spinner description="Loading Results..." />
            </YCenter>
          ) : !!results ? (
            <>
              <Spacer />

              <h3>
                {resultsCount} Result
                {resultsCount === 1 ? "" : "s"} Found{" "}
              </h3>

              {!results?.total_count ? (
                <YCenter $withBorder>No Data Found</YCenter>
              ) : (
                <div>
                  {results?.items?.map((item) => {
                    return <ProfileCard {...item} key={item.id} />;
                  })}
                </div>
              )}
            </>
          ) : null}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
