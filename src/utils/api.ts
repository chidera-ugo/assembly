import axios from "axios";
import { API_URL } from "../constants/api";

export async function getResults(search: string, isOrg?: boolean) {
  const url = `${API_URL}?q=${search}${isOrg ? `+type:org` : "+type:user"}`;

  const res = await axios.get(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return res;
}
