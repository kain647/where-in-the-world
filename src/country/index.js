import React, { useState, useEffect } from "react";
import Selector from "../dropdown";
import OpenWindow from "../modal";
import { ThemeProvider } from "styled-components";
import {
  Container,
  Header,
  Logo,
  Content,
  Filters,
  Theme,
  Mode,
  SwitchContainer,
  Circle,
  Cards,
  CardContainer,
  Flag,
  CountryName,
  Population,
  Region,
  Capital,
  ContentCard,
  FlagContainer,
} from "./styled";

const Country = () => {
  const lightTheme = {
    header: "#fff",
    logo: "#202c37",
    mode: "#202c37",
    bgContent: "#eee",
    //boxShadowHeader: "0px 0px 10px 0px rgba(189,189,189,1)",
    input: "#fff",
    inputText: "#202c37",
    inputShadow: "0px 0px 15px 0px rgba(143,141,143,1)",
    dropDownShadow: "0px 0px 15px 0px rgba(143,141,143,1)",
    dropDownButton: "#fff",
    dropDownText: "#2b3945",
    bgSelector: "#fff",
    selectorText: "#2b3945",
  };
  const darkTheme = {
    header: "#202c37",
    logo: "#fff",
    mode: "#fff",
    bgContent: "#202c37",
    //boxShadowHeader: "0px 0px 10px 0px rgba(25,35,43,1)",
    input: "#2b3945",
    inputText: "#fff",
    dropDownButton: "#2b3945",
    dropDownText: "#fff",
    bgSelector: "#202c37",
  };
  const [region, setRegion] = useState("All");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [dataBase, setDataBase] = useState({});
  const [idList, setIdList] = useState([]);

  const [dark, light] = useState(false);
  const mode = dark === false ? "Dark" : "Light";
  const theme = dark ? lightTheme : darkTheme;

  const clickSwitch = () => light(!dark);

  const processData = (data) => {
    const idList = [];
    const dataBase = {};
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      idList.push(item.name);
      dataBase[item.name] = item;
    }
    setDataBase(dataBase);
    setIdList(idList);
  };

  const getData = async (country) => {
    const url = !country
      ? `https://restcountries.eu/rest/v2/all`
      : `https://restcountries.eu/rest/v2/name/${country}`;
    const response = await fetch(url);
    //console.log(response);
    if (response.ok) {
      const json = await response.json();
      processData(json);
      console.log(json);
    } else {
      processData([]);
    }
  };

  useEffect(() => {
    getData("");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo>Where in the world?</Logo>
          <Theme>
            <Mode>{mode} mode</Mode>
            <SwitchContainer onClick={clickSwitch}>
              <Circle dark={dark} />
            </SwitchContainer>
          </Theme>
        </Header>
        <Content>
          <Filters>
            <input
              placeholder={"Search for a country..."}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                getData(e.target.value);
              }}
            />
            <Selector
              onChange={(item) => {
                setRegion(item.value);
              }}
              options={[
                {
                  label: "All",
                  value: `All`,
                },
                {
                  label: "Europe",
                  value: `Europe`,
                },
                {
                  label: "Asia",
                  value: `Asia`,
                },
                {
                  label: "Africa",
                  value: `Africa`,
                },
                {
                  label: "America",
                  value: `America`,
                },
                {
                  label: "Oceania",
                  value: `Oceania`,
                },
              ]}
            />
          </Filters>
          <Cards>
            {idList
              .filter((id) => {
                const card = dataBase[id];
                if (!card) {
                  return false;
                }
                return (
                  (region === "All" ||
                    card.region
                      .toLocaleLowerCase()
                      .includes(region.toLocaleLowerCase())) &&
                  (search === "" ||
                    card.name
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()))
                );
              })
              .map((id) => {
                //console.log(id, dataBase)
                const card = dataBase[id];
                return <Card {...card} key={card.name} />;
              })}
          </Cards>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

const Card = (props) => {
  const { flag, name, population, region, capital } = props;
  return (
    <CardContainer>
      <FlagContainer>
        <Flag flag={flag} />
      </FlagContainer>
      <ContentCard>
        <CountryName>{name}</CountryName>
        <Population>Population: {population}</Population>
        <Region>Region: {region}</Region>
        <Capital>Capital: {capital}</Capital>
        <OpenWindow data={props} />
      </ContentCard>
    </CardContainer>
  );
};

export default Country;
