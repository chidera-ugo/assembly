import { useEffect, useState } from "react";
import { Input } from "../../form_elements/Input";
import { StyledForm } from "./Form.styles";
import { SubmitButton } from "../../form_elements/SubmitButton";
import { Flex } from "../../styles/commons/Utils.styles";
import { SearchResults } from "../../../types/SearchResults";
import { RadioInput } from "../../form_elements/RadioInput";
import { getResults } from "../../../utils/api";

enum SearchType {
  ORGANIZATIONS = "organizations",
  USERS = "USERS",
}

const initialValues = {
  search: "",
  type: SearchType.USERS,
};

interface Props {
  emitResults: (results: SearchResults) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchForm({ emitResults, isLoading, setIsLoading }: Props) {
  const urlChunks = window.location.href.split("?q=");

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (!urlChunks[1]) return;

    const search = decodeURIComponent(urlChunks[1]);

    setValues((prev) => ({
      ...prev,
      search,
    }));

    if (!true) submit(search); // Todo: remove;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit(search: string) {
    if (!search) return;

    const path = `${urlChunks[0]}?q=${search}`;

    window.history.pushState({ route: path }, "", path);

    setIsLoading(true);

    const { status, data } = await getResults(
      search,
      values.type === SearchType.ORGANIZATIONS,
    );

    if (status !== 200 && status !== 201) {
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    emitResults(data);
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        submit(values.search);
      }}
    >
      <Flex $marginTop={40}>
        <Input
          autoFocus
          value={values.search}
          placeholder="Start typing..."
          handleChange={(search) => setValues((prev) => ({ ...prev, search }))}
        />

        <SubmitButton submitting={isLoading}>Submit</SubmitButton>
      </Flex>

      <RadioInput
        value={values.type}
        handleChange={(val) =>
          setValues((prev) => ({ ...prev, type: val as SearchType }))
        }
        options={[
          { label: "Search Users", value: SearchType.USERS },
          { label: "Search Organizations", value: SearchType.ORGANIZATIONS },
        ]}
      />
    </StyledForm>
  );
}
